import React from "react";
import { Avatar } from "@mui/material";
import Link from "next/link";
import Menu from "./Menu";
import Userlink from "./Userlink";

const Navbar = () => {
  const links = [
    { title: "Home", url: "/" },
    { title: "Contact", url: "/contact" },
    { title: "About", url: "/about" },
    // { title: "Login", url: "/login" },
  ];
  return (
    <div className="h-20 flex items-center">
      <div className="w-2/4 md:w-1/3 flex gap-2 md:gap-4 ">
        <Avatar src="/facebook.png" alt="" className="w-5 h-5" />
        <Avatar src="/instagram.png" alt="" className="w-5 h-5" />
        <Avatar src="/tiktok.png" alt="" className="w-5 h-5" />
        <Avatar src="/youtube.png" alt="" className="w-5 h-5" />
      </div>
      <div className="w-1/4  md:w-1/3 text-lg text-red-900 md:text-xl font-bold flex justify-center">
        Wajedblog
      </div>
      <div className="hidden md:flex text-black md:w-1/3 gap-4 justify-end text-base md:text-lg">
        {links.map((link) => (
          <Link href={link.url} key={link.title} className="">
            {link.title}
          </Link>
        ))}
        <Userlink/>
      </div>
      <div className="md:hidden w-1/4 flex justify-end">
        <Menu />
      </div>
    </div>
  );
};

export default Navbar;
