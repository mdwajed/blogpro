import Cardlist from "@/Components/Cardlist";
import Menu from "@/Components/Menu";
import React from "react";

export default function BlogPage({ searchParams }) {
  const page = parseInt(searchParams.page) || 1;
  const { cat } = searchParams;
  return (
    <div className="mt-8">
      <h1 className="text-2xl font-bold justify-center flex items-center h-10 bg-[#FF7F50] capitalize">
        {cat} Blog
      </h1>
      <div className="flex flex-col md:flex-row gap-4 xl:gap-12 my-8">
        <Cardlist page={page} cat={cat} />
        <Menu />
      </div>
    </div>
  );
}
