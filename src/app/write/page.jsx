"use client";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { CiCirclePlus } from "react-icons/ci";
import { CiImageOn } from "react-icons/ci";
import { FiExternalLink } from "react-icons/fi";
import { MdOutlineOndemandVideo } from "react-icons/md";
// import ReactQuill from "react-quill";

import "react-quill/dist/quill.bubble.css";
import {
  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
} from "firebase/storage";
import { app } from "@/Utilis/firebase";

export default function WritePage() {
  const { status } = useSession();
  const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });
  const router = useRouter();

  const [file, setFile] = useState(null);
  const [open, setOpen] = useState(false);
  const [media, setMedia] = useState("");
  const [value, setValue] = useState("");
  const [title, setTitle] = useState("");
  const [catSlug, setCatSlug] = useState("");

  useEffect(() => {
    const storage = getStorage(app);
    const upload = () => {
      const name = new Date().getTime() + file.name;
      const storageRef = ref(storage, name);

      const uploadTask = uploadBytesResumable(storageRef, file);
      uploadTask.on(
        "state_changed",
        (snapshot) => {
          const progress =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          console.log("Upload is " + progress + "% done");
          switch (snapshot.state) {
            case "paused":
              console.log("Upload is paused");
              break;
            case "running":
              console.log("Upload is running");
              break;
          }
        },
        (error) => {},
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
            setMedia(downloadURL);
          });
        }
      );
    };
    file && upload();
  }, [file]);

  if (status === "loading") {
    return <div>Loading....</div>;
  }
  if (status === "unauthenticated") {
    router.push("/");
  }
  const slugify = (str) =>
    str
      .toLowerCase()
      .trim()
      .replace(/[^\w\s-]/g, "")
      .replace(/[\s_-]+/g, "-")
      .replace(/^-+|-+$/g, "");

  const handleSubmit = async () => {
    const postData = {
      title,
      desc: value,
      img: media,
      slug: slugify(title),
      catSlug: catSlug || "style", //If not selected, choose the general category
    };

    console.log("Submitting Post Data: ", postData);

    const res = await fetch("/api/posts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(postData),
    });

    if (res.status === 200) {
      const data = await res.json();
      router.push(`/posts/${data.slug}`);
    }
  };

  return (
    <div>
      <input
        onChange={(e) => setTitle(e.target.value)}
        type="text"
        placeholder="Title"
        className="p-12 text-5xl border-none outline-none bg-transparent"
      />
      <select
        className="p-3 mb-12 ml-12 w-max text-white"
        onChange={(e) => setCatSlug(e.target.value)}
      >
        <option value="style">style</option>
        <option value="fashion">fashion</option>
        <option value="food">food</option>
        <option value="culture">culture</option>
        <option value="travel">travel</option>
        <option value="coding">coding</option>
      </select>
      <div className="flex gap-5 h-[700px] relative">
        <button className="w-9 h-9 rounded-full bg-transparent flex items-center justify-center cursor-pointer">
          <CiCirclePlus className="w-10 h-10" onClick={() => setOpen(!open)} />
        </button>
        {open && (
          <div className="flex gap-5 absolute z-999 w-full left-12">
            <input
              type="file"
              id="image"
              onChange={(e) => setFile(e.target.files[0])}
              style={{ display: "none" }}
            />
            <button className="w-9 h-9 rounded-full bg-transparent flex items-center justify-center cursor-pointer">
              <label htmlFor="image">
                <CiImageOn className="w-8 h-8" />
              </label>
            </button>
            <button className="w-9 h-9 rounded-full bg-transparent flex items-center justify-center cursor-pointer">
              <FiExternalLink className="w-8 h-8" />
            </button>
            <button className="w-9 h-9 rounded-full bg-transparent flex items-center justify-center cursor-pointer">
              <MdOutlineOndemandVideo className="w-8 h-8 " />
            </button>
          </div>
        )}
        <ReactQuill
          className="w-full"
          theme="bubble"
          value={value}
          onChange={setValue}
          placeholder="Tell your story...."
        />
      </div>
      <button
        onClick={handleSubmit}
        className="absolute top-[24px] py-2 px-4 bg-[#1a8917] text-white right-5 rounded-3xl cursor-pointer"
      >
        Publish
      </button>
    </div>
  );
}
