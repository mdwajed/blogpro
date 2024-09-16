import { Avatar } from "@mui/material";
import Link from "next/link";
import React from "react";
const LINKS = [
  {
    title: "Links",
    items: [
      { title: "Home", url: "/" },
      { title: "Blog", url: "/blog" },
      { title: "About", url: "/about" },
      { title: "Contact", url: "/contact" },
    ],
  },
  {
    title: "Tags",
    items: [
      { title: "Style", url: "/style" },
      { title: "Fashion", url: "/fashion" },
      { title: "Coding", url: "/coding" },
      { title: "News", url: "/news" },
    ],
  },
  {
    title: "Social",
    items: [
      { title: "Facebook", url: "https://www.facebook.com" },
      { title: "Instagram", url: "https://www.instagram.com" },
      { title: "Tiktok", url: "https://www.tiktok.com" },
      { title: "Youtube", url: "https://www.youtube.com" },
    ],
  },
];

const Footer = () => {
  return (
    <div className="flex flex-col md:flex-row gap-8 justify-between py-8">
      <div className="w-full md:w-[50%] space-y-6">
        {/* LEFT SIDE */}
        <div className="flex items-center gap-3">
          <Avatar src="/p1.jpeg" className="w-12 h-12 object-cover" />
          <span className="text-2xl font-bold">Wajedblog</span>
        </div>
        <p className="">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Enim
          necessitatibus similique aspernatur obcaecati veritatis. Aperiam cum
          porro sequi, totam minima consequuntur, aspernatur deleniti vero
          repellendus dorales.
        </p>
        <div className="w-2/4 md:w-1/3 flex gap-2 md:gap-4 ">
          <Avatar src="/facebook.png" alt="" className="w-5 h-5" />
          <Avatar src="/instagram.png" alt="" className="w-5 h-5" />
          <Avatar src="/tiktok.png" alt="" className="w-5 h-5" />
          <Avatar src="/youtube.png" alt="" className="w-5 h-5" />
        </div>
      </div>
      {/* RIGHT SIDE */}
      <div className="w-full md:w-[40%] ">
      <div className=" grid grid-cols-3 justify-between gap-4">
        {LINKS.map((link) => (
          <div className="" key={link.title}>
            <h1 className="font-bold text-lg mb-4">{link.title}</h1>
            <ul className="flex flex-col gap-4">
              {link.items.map((i) => (
                <li key={i.title}>
                  <Link  href={i.url}>{i.title}</Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      </div>
    </div>
  );
};

export default Footer;
