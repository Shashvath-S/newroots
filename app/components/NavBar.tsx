import Image from "next/image";

export default async function NavBar() {
  return (
    <nav className="flex justify-between items-center box-border max-w-full m-8 mb-0">
      <div className="flex items-center">
        <a href="/">
          <Image src="/image.png" height={50} width={50} alt="logo" />
        </a>
      </div>
      <div className="text-lg">
        <div className="flex items-center gap-4">
          <a href="/profile">Profile</a>
          <a href="/resources">Resources</a>
          <a href="/community">Community</a>
          <a href="/messaging">Messaging</a>
          <a href="/contact-us">Contact Us</a>
        </div>
      </div>
    </nav>
  );
}
