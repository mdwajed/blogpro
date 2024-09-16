import Image from "next/image";
import React from "react";

const Featured = () => {
  return (
    <div className="mt-4 md:mt-8 ">
      <h1 className="text-4xl md:text-8xl font-normal">
        <b>Hey, lama dev here!</b> Discover my stories and creative ideas.
      </h1>

      <div className=" flex flex-col gap-4 md:flex-row md:gap-12 mt-4 items-center">
        <div className="flex-1 relative h-[450px] w-full">
          <Image
            src="/p1.jpeg"
            alt=""
            fill
            className="object-cover rounded-md "
          />
        </div>
        <div className="flex-1 flex flex-col justify-center gap-3 md:gap-8">
          <h1 className="text-2xl md:text-4xl">
            Lorem ipsum dolor sit amet alim consectetur adipisicing elit.
          </h1>
          <p className="text-base md:text-xl">
            {" "}
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Cupiditate, quam nisi magni ea laborum inventore voluptatum
            laudantium repellat ducimus unde aspernatur fuga. Quo, accusantium
            quisquam! Harum unde sit culpa debitis.
          </p>
          <button className="capitalize w-max bg-pink-700 p-2 rounded-md">
            read more
          </button>
        </div>
      </div>
    </div>
  );
};

export default Featured;
