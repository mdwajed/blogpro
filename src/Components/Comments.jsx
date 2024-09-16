"use client";
import React, { useState } from "react";
import { Avatar } from "@mui/material";
import { useSession } from "next-auth/react";
import useSWR from "swr";
import Link from "next/link";
const fetcher = async (url) => {
  const res = await fetch(url);
  const data = await res.json();
  console.log("Data:", data);
  if (!res.ok) {
    const error = new Error(data.message || "failed to fetch");
    throw error;
  }
  return data;
};
export default function Comments({ postSlug }) {
  const { status } = useSession();
  const { data,mutate, isLoading } = useSWR(
    `http://localhost:3000/api/comments?postSlug=${postSlug}`,
    fetcher
  );
  const [desc, setDesc] = useState("");

  const handleSubmit = async () => {
    await fetch("/api/comments", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ desc, postSlug }),
    });
    setDesc("");
    mutate()
  };
  return (
    <div className="space-y-8">
      <h3 className="text-xl mb-4">Comments</h3>
      {status === "authenticated" ? (
        <div className="relative">
          <textarea
            onChange={(e) => setDesc(e.target.value)}
            type="text"
            name="comment"
            placeholder="Write a comment...."
            className="p-4 w-full outline-none bg-gray-300 rounded-md text-black"
          />
          <button
            className="absolute right-0 top-2.5 text-xl bg-teal-800 w-max p-4 rounded-md"
            onClick={handleSubmit}
          >
            Send
          </button>
        </div>
      ) : (
        <Link href="/login">Login to write a comment</Link>
      )}
      <div className="space-y-8">
        {isLoading
          ? "Loading"
          : data?.map((item) => (
              <div className="space-y-4" key={item.id}>
                <div className="flex gap-4 items-center">
                  {item?.user?.image && (
                    <Avatar
                      src={item.user.image}
                      alt=""
                      className="object-cover w-10 h-10"
                    />
                  )}
                  <h1 className="">
                    <p className="text-gray-600 text-xl">{item.user.name}</p>{" "}
                    <p className="text-gray-600 text-sm">
                      {new Date(item.createdAt).toLocaleString()}
                    </p>
                  </h1>
                </div>
                <p className="">{item.desc}</p>
              </div>
            ))}
      </div>
    </div>
  );
}
