import React from "react";
import { Avatar } from "@mui/material";
import Image from "next/image";
import Comments from "@/Components/Comments";
import Menu from "@/Components/Menu";


const getData = async (slug) => {
  const res = await fetch(`http://localhost:3000/api/posts/${slug}`, {
    cache: "no-store",
  });
  if (!res.ok) {
    throw new Error("failed to fetch");
  }
  return res.json();
};
export default async function SinglePage({ params }) {
  const { slug } = params;
  const data = await getData(slug);
 
  return (
    <div>
      {/* UPPER CONTAINER */}
      <div className=" my-8 flex flex-col md:flex-row gap-6">
        <div className="flex-1 flex flex-col gap-4 justify-between">
          <h1 className="text-2xl md:text-4xl xl:text-6xl font-medium">
            {data?.title}
          </h1>
          <div className="flex gap-4 items-center">
            {data?.user.image && (
              <Avatar
                src={data.user.image}
                alt=""
                className="object-cover w-10 h-10"
              />
            )}
            <h1 className="">
              <p className="text-gray-600 text-xl">{data?.user.name}</p>{" "}
              <p className="text-gray-600 text-sm">2024.10.14</p>
            </h1>
          </div>
        </div>
        {data.img && (
          <div className="flex-1 relative h-[350px] w-full">
            <Image
              src={data.img}
              alt=""
              fill
              className="object-cover rounded-md"
            />
          </div>
        )}
      </div>
      {/* LOWER CONTAINER */}
      <div className="flex flex-col md:flex-row gap-6 w-full">
        <div className="w-full md:w-[70%] space-y-4">
          <div className="" dangerouslySetInnerHTML={{ __html: data?.desc }} />
          <Comments postSlug={slug}/>
        </div>

        <Menu/>
      </div>
    </div>
  );
}
