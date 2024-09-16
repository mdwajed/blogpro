"use client";
import { ThemeContext } from "@/Provider/ThemeProvider";
import Image from "next/image";
import React, { useContext } from "react";

const ThemToggle = () => {
  const { toggle, mode } = useContext(ThemeContext);
  return (
    <div
      onClick={toggle}
      className="w-14 h-6 bg-pink-700 cursor-pointer flex justify-between items-center rounded-2xl relative"
    >
      <Image src="/sun.png" alt="" width={20} height={20} />
      <div
        className="w-5 h-5 absolute bg-white rounded-full "
        style={mode === "light" ? { left: "2px" } : { right: "2px" }}
      ></div>
      <Image src="/moon.png" alt="" width={18} height={18} />
    </div>
  );
};

export default ThemToggle;
