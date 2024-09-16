import { Avatar } from "@mui/material";
import Link from "next/link";
import React from "react";

const getData = async () => {
  const res = await fetch("http://localhost:3000/api/categories", {
    cache: "no-store",
  });
  if (!res.ok) {
    throw new Error("failed to fetch");
  }
  return res.json();
};

const Categorylist = async () => {
  const data = await getData();
  return (
    <div className="">
      <h1 className="text-2xl my-6">Popular Categories </h1>
      <div className="flex flex-wrap justify-between gap-2 md:gap-5 items-center">
        {data?.map((item) => (
          <Link
            key={item.title}
            href="/blog?cat=style"
            className={`flex gap-2 md:gap-3 px-4 md:px-10 py-2 md:py-3 category ${item.slug}  justify-center items-center rounded-lg`}
          >
            {item.img && <Avatar src={item.img} alt="" className="w-7 h-7" />}
            <span>{item.title}</span>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Categorylist;
