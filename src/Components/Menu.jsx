import { Avatar } from "@mui/material";
import Link from "next/link";

import React from "react";

export default function Menu() {
  return (
    <div className="w-full md:w-[30%] ">
      <div>
        <h1 className="text-2xl flex flex-col">
          <span className="text-sm">What's hot</span>
          <span className="font-medium">Most Popular</span>{" "}
        </h1>
      
        <Link href="/" className="  ">

          <div className="space-y-1 mt-8">
            <h1 className="bg-[#ff7857] rounded-2xl w-max text-base px-2 py-">
              Travel
            </h1>
            <h1 className="text-gray-600 text-base ">
              Lorem ipsum dolor sit amet consec.
            </h1>
            <div className="text-gray-600 text-xs">
              <span classname="">John Doe</span>
              <span classname="">11.09.2024</span>
            </div>
          </div>
        </Link>
        <Link href="/" className="  ">

          <div className="space-y-1 mt-8">
            <h1 className="bg-[#ff7857] rounded-2xl w-max text-base px-2 py-">
              Travel
            </h1>
            <h1 className="text-gray-600 text-base ">
              Lorem ipsum dolor sit amet consec.
            </h1>
            <div className="text-gray-600 text-xs">
              <span classname="">John Doe</span>
              <span classname="">11.09.2024</span>
            </div>
          </div>
        </Link>
        <Link href="/" className="  ">

          <div className="space-y-1 mt-8">
            <h1 className="bg-[#ff7857] rounded-2xl w-max text-base px-2 py-">
              Travel
            </h1>
            <h1 className="text-gray-600 text-base ">
              Lorem ipsum dolor sit amet consec.
            </h1>
            <div className="text-gray-600 text-xs">
              <span classname="">John Doe</span>
              <span classname="">11.09.2024</span>
            </div>
          </div>
        </Link>
        <Link href="/" className="  ">

          <div className="space-y-1 mt-8">
            <h1 className="bg-[#ff7857] rounded-2xl w-max text-base px-2 py-">
              Travel
            </h1>
            <h1 className="text-gray-600 text-base ">
              Lorem ipsum dolor sit amet consec.
            </h1>
            <div className="text-gray-600 text-xs">
              <span classname="">John Doe</span>
              <span classname="">11.09.2024</span>
            </div>
          </div>
        </Link>
        <Link href="/" className="  ">

          <div className="space-y-1 mt-8">
            <h1 className="bg-[#ff7857] rounded-2xl w-max text-base px-2 py-">
              Travel
            </h1>
            <h1 className="text-gray-600 text-base ">
              Lorem ipsum dolor sit amet consec.
            </h1>
            <div className="text-gray-600 text-xs">
              <span classname="">John Doe</span>
              <span classname="">11.09.2024</span>
            </div>
          </div>
        </Link>
     
     
      </div>
      {/* CATEGORIES */}
      <div>
        <h1 className="text-2xl flex flex-col mt-12">
          <span className="text-sm text-gray-600">Discover by topic</span>
          <span className="font-medium">Categories</span>{" "}
        </h1>
        <div className="flex flex-wrap justify-between gap-2 md:gap-5 items-center mt-8">
          <Link
            href="/"
            className=" px-6  py-2 bg-[#57c4ff31] justify-center items-center rounded-lg"
          >
            <span>Style</span>
          </Link>
          <Link
            href="/"
            className=" px-6  py-2 bg-[#57c4ff31] justify-center items-center rounded-lg"
          >
            <span>Style</span>
          </Link>
          <Link
            href="/"
            className=" px-6 py-2 bg-[#57c4ff31] justify-center items-center rounded-lg"
          >
            <span>Style</span>
          </Link>
          <Link
            href="/"
            className=" px-6  py-2  bg-[#57c4ff31] justify-center items-center rounded-lg"
          >
            <span>Style</span>
          </Link>
          <Link
            href="/"
            className="px-6  py-2 bg-[#57c4ff31] justify-center items-center rounded-lg"
          >
            <span>Style</span>
          </Link>
          <Link
            href="/"
            className="px-6  py-2 bg-[#57c4ff31] justify-center items-center rounded-lg"
          >
            <span>Style</span>
          </Link>
        </div>
      </div>
      {/* EDITORS PICK */}
      <div className="mt-12">
        <h1 className="text-2xl flex flex-col">
          <span className="text-sm">Choose by the editor</span>
          <span className="font-medium">Editors Pick</span>{" "}
        </h1>
       
        <Link href="/" className="mt-8 flex gap-4 items-center ">
          <Avatar
            src="/p1.jpeg"
            alt=""
            className="w-16 h-16 object-cover border-2 border-white"
          />

          <div className="space-y-1">
            <h1 className="bg-[#ff7857] rounded-2xl w-max text-base px-2 py-">
              Travel
            </h1>
            <h1 className="text-gray-600 text-base ">
              Lorem ipsum dolor sit amet consec.
            </h1>
            <div className="text-gray-600 text-xs">
              <span classname="">John Doe</span>
              <span classname="">11.09.2024</span>
            </div>
          </div>
        </Link>
        <Link href="/" className="mt-8 flex gap-4 items-center ">
          <Avatar
            src="/p1.jpeg"
            alt=""
            className="w-16 h-16 object-cover border-2 border-white"
          />

          <div className="space-y-1">
            <h1 className="bg-[#ff7857] rounded-2xl w-max text-base px-2 py-">
              Travel
            </h1>
            <h1 className="text-gray-600 text-base ">
              Lorem ipsum dolor sit amet consec.
            </h1>
            <div className="text-gray-600 text-xs">
              <span classname="">John Doe</span>
              <span classname="">11.09.2024</span>
            </div>
          </div>
        </Link>
        <Link href="/" className="mt-8 flex gap-4 items-center ">
          <Avatar
            src="/p1.jpeg"
            alt=""
            className="w-16 h-16 object-cover border-2 border-white"
          />

          <div className="space-y-1">
            <h1 className="bg-[#ff7857] rounded-2xl w-max text-base px-2 py-">
              Travel
            </h1>
            <h1 className="text-gray-600 text-base ">
              Lorem ipsum dolor sit amet consec.
            </h1>
            <div className="text-gray-600 text-xs">
              <span classname="">John Doe</span>
              <span classname="">11.09.2024</span>
            </div>
          </div>
        </Link>
        <Link href="/" className="mt-8 flex gap-4 items-center ">
          <Avatar
            src="/p1.jpeg"
            alt=""
            className="w-16 h-16 object-cover border-2 border-white"
          />

          <div className="space-y-1">
            <h1 className="bg-[#ff7857] rounded-2xl w-max text-base px-2 py-">
              Travel
            </h1>
            <h1 className="text-gray-600 text-base ">
              Lorem ipsum dolor sit amet consec.
            </h1>
            <div className="text-gray-600 text-xs">
              <span classname="">John Doe</span>
              <span classname="">11.09.2024</span>
            </div>
          </div>
        </Link>
        <Link href="/" className="mt-8 flex gap-4 items-center ">
          <Avatar
            src="/p1.jpeg"
            alt=""
            className="w-16 h-16 object-cover border-2 border-white"
          />

          <div className="space-y-1">
            <h1 className="bg-[#ff7857] rounded-2xl w-max text-base px-2 py-">
              Travel
            </h1>
            <h1 className="text-gray-600 text-base ">
              Lorem ipsum dolor sit amet consec.
            </h1>
            <div className="text-gray-600 text-xs">
              <span classname="">John Doe</span>
              <span classname="">11.09.2024</span>
            </div>
          </div>
        </Link>
        <Link href="/" className="mt-8 flex gap-4 items-center">
          <Avatar
            src="/p1.jpeg"
            alt=""
            className="w-16 h-16 object-cover border-2 border-white"
          />

          <div className="space-y-1">
            <h1 className="bg-[#ff7857] rounded-2xl w-max text-base px-2 py-">
              Travel
            </h1>
            <h1 className="text-gray-600 text-base ">
              Lorem ipsum dolor sit amet consec.
            </h1>
            <div className="text-gray-600 text-xs">
              <span classname="">John Doe</span>
              <span classname="">11.09.2024</span>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
}
