import React from 'react'
import { HeartPlus } from "lucide-react";

function Topics({ count }) {
  return (
    <div>
      {Array.from({ length: count }).map((_, index) => (
        <div
          key={index}
          className="line-clamp-2   w-full h-14 bg-white text-sm rounded-md px-2 py-2 my-2 shadow-sm border border-gray-100"
        >
          <p className="text-gray-700">Topic  Ayish Amarriage about some repettative content </p>
        </div>
      ))}
    </div>
  );
}
function SideBar() {
  return (
    <div class=" col-span-1 hidden md:block sm:col-span-3  md:col-span-1 bg-gray-100 p-1 min-h-screen ">

      <div className="px-2 flex items-center">
        <h1 className="font-inter text-lg font-normal text-gray-800">
          Favorite Topics
        </h1>
        <span className="ml-3">
          <HeartPlus />
        </span>
      </div>

      <div class="border-t-1 border-gray-300 w-full my-4"></div>

      <Topics count={5} />

    </div>
  )
}

export default SideBar