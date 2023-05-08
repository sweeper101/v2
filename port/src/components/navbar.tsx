"use client"
import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

interface NavItem {
  label: string;
  path: string;
}

interface NavbarProps {
  navItems: NavItem[];
}

const Navbar = ({ navItems }: NavbarProps) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav
    aria-label="Site Nav"
    className="mx-auto flex items-center justify-between p-4"
    >
    <a
        href="/"
        className="inline-flex h-20 w-20 items-center justify-center rounded-lg "
    >
       <Image src="/logz.png" alt="Subract Logo" width={500} height={500} />
    </a>

    <ul className="flex items-center gap-2 text-sm font-medium text-gray-500">
        <li className="hidden lg:block">
        <a className="rounded-lg px-3 py-2 text-green-500" href="/"> Home </a>
        </li>

        <li><a className="rounded-lg px-3 py-2 text-green-500" href=""> About </a></li>

        <li>
        <a
            className="inline-flex items-center gap-2 rounded-lg px-3 py-2 text-green-500"
            href=""
            target="_blank"
        >
            Projects
        </a>
        </li>
    </ul>
    </nav>
  );
};

export default Navbar;
