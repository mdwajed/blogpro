"use client";
import { signOut, useSession } from "next-auth/react";
import Link from "next/link";
import React from "react";

const Userlink = () => {
   const { status } = useSession();
  return (
    <div className="text-base md:text-lg ">
      {status === "authenticated" ? (
        <div className="flex gap-2 items-center">
          <Link
            href="/write"
            className=" text-sm xl:text-lg"
          >
            Write
          </Link>
          <div
            onClick={() => signOut()}
            className="cursor-pointer bg-red-900 px-2 py-1 rounded-3xl text-white text-sm xl:text-lg"
          >
            Logout
          </div>
        </div>
      ) : (
        <Link
          href="/login"
          className="text-sm xl:text-lg cursor-pointer bg-green-900 px-2 rounded-3xl text-white py-1"
        >
          Login
        </Link>
      )}
    </div>
  );
};

export default Userlink;
