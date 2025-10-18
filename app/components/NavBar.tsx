import Image from "next/image";

export default async function NavBar() {
  return (
    <nav className="flex justify-between items-center box-border max-w-full py-4 px-6 md:px-12 bg-stone-200 h-24 m-4 rounded-2xl shadow-lg">
      {/* <h1 style={{color: "white"}} className="text-3xl">asdf</h1> */}
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
