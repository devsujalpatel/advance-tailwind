"use client"
import Image from "next/image";
import Link from "next/link";

export const Navbar = () => {
  const navLinks = ["Home", "About", "Services", "Contact"];
  return (
    <nav className="shadow-ace my-5 w-full max-w-5xl rounded-full bg-white px-2 py-2">
      <div className="flex items-center justify-between">
        <Image
          src="https://ui.aceternity.com/logo.png"
          width={40}
          height={40}
          alt="Aceternity Logo"
          className="rounded-full"
        />
        <ul className="flex items-center gap-4 px-4 text-neutral-500">
          {navLinks.map((link) => (
            <Link
              href={`#${link.toLowerCase()}`}
              className="cursor-pointer font-semibold transition-all duration-100 hover:text-neutral-800"
              key={link}
            >
              {link}
            </Link>
          ))}
        </ul>
      </div>
    </nav>
  );
};
