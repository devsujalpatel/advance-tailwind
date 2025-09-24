"use client";
import { MenuIcon, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export const Navbar = () => {
  const navLinks = ["Home", "About", "Services", "Contact"];
  const [open, isOpen] = useState<boolean>(false);
  return (
    <nav className="shadow-ace w-full max-w-5xl bg-white px-2 py-2 lg:my-5 lg:rounded-full">
      <div className="flex items-center justify-between">
        <Image
          src="https://ui.aceternity.com/logo.png"
          width={40}
          height={40}
          alt="Aceternity Logo"
          className="rounded-full"
        />
        <ul className="hidden items-center gap-4 px-4 text-neutral-500 lg:flex">
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
        <button
          className="cursor-pointer outline-none lg:hidden"
          onClick={() => isOpen((prev) => !prev)}
        >
          {open ? <X /> : <MenuIcon />}
        </button>
      </div>
      <div className="lg:hidden">
        {open && (
          <ul className="flex flex-col items-center gap-4 text-neutral-500">
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
        )}
      </div>
    </nav>
  );
};
