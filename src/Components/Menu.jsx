"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { signOut } from "next-auth/react";
const Menu = () => {
  const [open, setOpen] = useState(false);
  const user = true;
  const links = [
    { title: "Home", url: "/" },
    { title: "Contact", url: "/contact" },
    { title: "About", url: "/about" },
  ];
  return (
    <div>
      {!open ? (
        <Image
          src="/open.png"
          alt=""
          width={20}
          height={20}
          onClick={() => setOpen(true)}
        />
      ) : (
        <Image
          src="/close.png"
          alt=""
          width={20}
          height={20}
          onClick={() => setOpen(false)}
        />
      )}
      {open && (
        <div className="absolute bg-red-900 text-white left-0 top-20 h-[calc(100vh-5rem)] flex flex-col gap-8 items-center justify-center z-10 w-full">
          {links.map((link) => (
            <Link
              href={link.url}
              key={link.title}
              className=" "
              onClick={() => setOpen(false)}
            >
              {link.title}
            </Link>
          ))}
          {!user ? (
            <Link onClick={() => setOpen(false)} href="/login">
              Login
            </Link>
          ) : (
            <div onClick={() => signOut()} className="cursor-pointer">Logout</div>
          )}
        </div>
      )}
    </div>
  );
};

export default Menu;
