import Image from "next/image";
import SignOutButton from "./SignOutButton";

import { auth } from "@/auth";
import Link from "next/link";

export default async function NavBar() {
  const session = await auth();

  return (
    <nav className="flex justify-between items-center box-border max-w-full mx-8 h-12">
      <div className="flex items-center pt-8">
        <Link
          href="/"
          className="flex items-center hover:scale-110 transition-transform duration-200 h-full"
        >
          <Image src="/image.png" height={40} width={40} alt="logo" />
        </Link>
      </div>
      <div className="text-base flex items-center">
        {session && (
          <>
            <div className="flex items-center gap-8 h-full pt-7">
              <Link
                href="/profile"
                className="flex items-center h-full hover:text-emerald-600 transition"
              >
                Profile
              </Link>
              <Link
                href="/resources"
                className="flex items-center h-full hover:text-emerald-600 transition"
              >
                Resources
              </Link>
              <Link
                href="/community"
                className="flex items-center h-full hover:text-emerald-600 transition"
              >
                Community
              </Link>
              <Link
                href="/messaging"
                className="flex items-center h-full hover:text-emerald-600 transition"
              >
                Messaging
              </Link>
              <SignOutButton />
            </div>
          </>
        )}
      </div>
    </nav>
  );
}
