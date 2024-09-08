"use client"
import { signOut, useSession } from "next-auth/react";
import Link from "next/link";
import React from "react";

const Userlink = () => {
  const { status } = useSession();

  return (
    <div className="text-base md:text-lg " >
      {status === "authenticated" ? (
        <div onClick={() => signOut()}>
          Logout
        </div>
      ) : (
        <Link href="/login">Login</Link>
      )}
    </div>
  );
};

export default Userlink;
