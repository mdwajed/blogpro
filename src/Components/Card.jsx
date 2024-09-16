import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Card({ key, item }) {
  return (
    <div
      className="flex flex-col md:flex-row gap-4 xl:gap-12  h-[500px] mb-4 md:12"
      key={key}
    >
      {/* IMAGE CONTAINER */}
      {item.img && (
        <div className="flex-1 relative md:h-[460px] w-full">
          <Image
            src={item.img}
            alt=""
            fill
            className="object-cover rounded-md"
          />
        </div>
      )}
      {/* TEXT CONTAINER */}
      <div className="flex-1 flex flex-col gap-4 xl:gap-7">
        <div className="flex">
          <p className="text-sm text-gray-600 md:text-sm xl:text-lg">
            {item.createdAt.slice(0, 10)} - </p>
          <p className="text-sm text-red-600 md:text-sm xl:text-lg font-medium uppercase">
            {" "}
             {item.catSlug}
          </p>
        </div>
        <Link href={`/posts/${item.slug}`}>
          {" "}
          <h1 className="text-2xl xl:text-3xl 2xl:text-4xl">{item.title}</h1>
        </Link>
        <p className="text-sm 2xl:text-lg text-gray-600 font-light">
          {item.desc}
        </p>

        <Link
          href={`/posts/${item.slug}`}
          className="underline  self-start text-base"
        >
          Read More
        </Link>
      </div>
    </div>

    // {/* </div> */}
  );
}
