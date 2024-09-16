"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { signOut, useSession } from "next-auth/react";
const MenuItems = () => {
  const [open, setOpen] = useState(false);
const {status}=useSession()
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
        <div className="absolute bg-[#0a0a0a] text-white left-0 top-20 h-[calc(100vh-5rem)] flex flex-col gap-8 items-center justify-center z-10 w-full">
          {links.map((link) => (
            <Link
              href={link.url}
              key={link.title}
              onClick={() => setOpen(false)}
            >
              {link.title}
            </Link>
          ))}
          {status === "notauthenticated" ? (
            <Link
              onClick={() => setOpen(false)}
              href="/login"
              className="cursor-pointer"
            >
              Login
            </Link>
          ) : (
            <div onClick={() => signOut()} className="cursor-pointer ">
              Logout
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default MenuItems;
