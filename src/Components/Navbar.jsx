import React from "react";
import { Avatar } from "@mui/material";
import MenuItems from "./MenuItems";
import Userlink from "./Userlink";
import ThemToggle from "./ThemToggle";
import Navlinks from "./Navlinks";

const Navbar = () => {
  const links = [
    { title: "Home", url: "/" },
    { title: "Contact", url: "/contact" },
    { title: "About", url: "/about" },
  ];
  return (
    <div className="h-20 flex items-center">
      <div className="hidden md:flex md:w-[30%]  gap-2 md:gap-4 ">
        <Avatar src="/facebook.png" alt="" className="w-5 h-5" />
        <Avatar src="/instagram.png" alt="" className="w-5 h-5" />
        <Avatar src="/tiktok.png" alt="" className="w-5 h-5" />
        <Avatar src="/youtube.png" alt="" className="w-5 h-5" />
      </div>
      <div className="w-1/2  md:w-[25%] text-lg text-red-900 lg:text-xl font-bold flex md:justify-center">
        Wajedblog
      </div>

      <div className="flex  md:w-[45%] gap-2 justify-end items-center">
        <ThemToggle />
        <div className="hidden md:flex gap-2 justify-end items-center text-sm xl:text-lg">
          {links.map((link) => (
            <Navlinks link={link} key={link.title} />
          ))}

          <Userlink />
        </div>
      </div>
      <div className="md:hidden w-1/2 flex justify-end">
        <MenuItems />
      </div>
    </div>
  );
};

export default Navbar;
