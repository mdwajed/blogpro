"use client";
import { useRouter } from "next/navigation";
import React from "react";

const Pagination = ({ page, hasPrev, hasNext }) => {
  const router = useRouter();
  return (
    <div className="flex justify-between items-center">
      <button
         className={`bg-[#DC143C] w-24 px-4 py-3 ${!hasPrev ? 'bg-opacity-50 cursor-not-allowed' : ''}`}
        onClick={() => router.push(`?page=${page - 1}`)}
       disabled={!hasPrev}
      >
        Previous
      </button>
      <button
        className={`bg-[#DC143C] w-24 px-4 py-3 ${!hasNext ? 'bg-opacity-50 cursor-not-allowed' : ''}`}
        onClick={() => router.push(`?page=${page + 1}`)}
       disabled={!hasNext}
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
