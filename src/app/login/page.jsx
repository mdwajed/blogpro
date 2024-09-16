"use client";
import { signIn, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import React from "react";

export default function LoginPage() {
  const { data, status } = useSession();
  const router = useRouter();
  if (status === "loading") {
    return <div>Loading....</div>;
  }
  if (status === "authenticated") {
    router.push("/");
  }
  return (
    <div className="flex items-center justify-center mt-15  my-8">
      <div className="text-white flex flex-col gap-12 p-8 md:px-12 lg:px-32 md:py-16 lg:py-32 bg-[#0f172a] rounded-lg">
        <div
          onClick={() => signIn("google")}
          className="bg-[#ff5555] cursor-pointer px-6 py-4 rounded-md font-bold flex items-center justify-center"
        >
          Sign in with Google
        </div>
        <div className="bg-black cursor-pointer px-6 py-4 rounded-md font-bold flex items-center justify-center">
          Sign in with Github
        </div>
        <div className="bg-[#087BEA] cursor-pointer px-6 py-4 rounded-md font-bold flex items-center justify-center">
          Sign in with Facebook
        </div>
      </div>
    </div>
  );
}
