"use client"
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const Navlinks = ({ link }) => {
  const pathname = usePathname();
  return (
    <Link
      href={link.url}
      className={` rounded-3xl  px-2 ${
        pathname === link.url && "bg-pink-700 text-white"
      }`}
    >
      {link.title}
    </Link>
  );
};

export default Navlinks;
