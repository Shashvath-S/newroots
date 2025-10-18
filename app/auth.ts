import NextAuth from "next-auth";
import db from "./lib/db";
import bcrypt from "bcryptjs";
import CredentialsProvider from "next-auth/providers/credentials";

export interface IUser {
  id: number;
  email: string;
  username: string;
  password: string;
  name: string;
}

export const { handlers, signIn, signOut, auth } = NextAuth({
  session: {
    strategy: "jwt",
  },
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: {},
        password: {},
      },
      async authorize(credentials) {
        let user = (
          await db`SELECT * FROM users WHERE email = ${credentials?.email} LIMIT 1`
        )[0] as IUser | undefined;

        if (!user) {
          return null;
        }

        const validPassword = await bcrypt.compare(
          credentials?.password as string,
          user.password
        );

        if (validPassword) {
          return {
            id: String(user.id),
            email: user.email,
            name: user.name,
          };
        }

        return null;
      },
    }),
  ],
  pages: {
    signIn: "/login",
  },
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id;
        token.email = user.email;
        token.name = user.name;
      }
      return token;
    },

    async session({ session, token }) {
      if (session.user) {
        session.user.id = token.id as string;
        session.user.email = token.email as string;
        session.user.name = token.name as string;
      }
      return session;
    },
  },
});
