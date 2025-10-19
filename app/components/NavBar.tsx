import Image from "next/image";
import SignOutButton from "./SignOutButton";

import { auth } from "@/auth";

export default async function NavBar() {
  const session = await auth();

  return (
    <nav className="flex justify-between items-center box-border max-w-full mx-8 my-4 py-2">
      <div className="flex items-center">
        <a href="/" className="flex items-center">
          <Image src="/image.png" height={50} width={50} alt="logo" />
        </a>
      </div>
      <div className="text-base flex items-center">
        {session && (
          <>
            <div className="flex items-center gap-8">
              <a href="/profile" className="hover:text-emerald-600 transition">
                Profile
              </a>
              <a
                href="/resources"
                className="hover:text-emerald-600 transition"
              >
                Resources
              </a>
              <a
                href="/community"
                className="hover:text-emerald-600 transition"
              >
                Community
              </a>
              <a
                href="/messaging"
                className="hover:text-emerald-600 transition"
              >
                Messaging
              </a>
              <SignOutButton />
            </div>
          </>
        )}
      </div>
    </nav>
  );
}
