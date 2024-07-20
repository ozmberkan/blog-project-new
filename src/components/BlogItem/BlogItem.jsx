import React from "react";
import { RiDeleteBin6Line } from "react-icons/ri";
import { MdEditNote } from "react-icons/md";
import { nanoid } from "nanoid";

const BlogItem = () => {
  return (
    <div className="w-full border rounded-xl transition-all duration-500 dark:border-zinc-300 border-zinc-700 dark:bg-white  p-3 gap-x-5 flex items-center">
      <div className="w-[40%]">
        <img
          src="https://images.yourstory.com/cs/wordpress/2017/02/52-Blog.jpg?mode=crop&crop=faces&ar=16%3A9&format=auto&w=3840&q=75"
          alt="Blog"
          className="rounded-md"
        />
      </div>
      <div className="w-[60%] font-lato text-[#d4d2d2] dark:text-[#141414]  p-3 flex flex-col gap-y-4">
        <div className="flex gap-x-3 justify-between">
          <p className="px-1.5 py-1 w-32 text-sm bg-zinc-900 transition-all duration-500  dark:bg-[#f1f1f1] dark:text-[#141414]  rounded-md inline-flex items-center justify-center  ">
            Technology
          </p>
          <p className="px-1 py-1 w-16 text-sm bg-zinc-900 transition-all duration-500 dark:bg-[#f1f1f1]  dark:text-[#141414]  rounded-md inline-flex items-center justify-center  ">
            {nanoid().slice(0, 5)}
          </p>
        </div>
        <div className="w-full flex gap-x-3 items-center">
          <img src="https://randomuser.me/api/portraits/men/14.jpg" alt="" className="w-10 h-10 rounded-md" />
          <div className="font-lato text-zinc-600">
            <h1>John Doe</h1>
            <h1>20.07.2024</h1>
          </div>
        </div>
        <h1 className="text-3xl ">Blog Başlığı</h1>
        <p className="text-sm leading-5">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum aut,
          ducimus culpa impedit deleniti odit eius esse molestias commodi
          eligendi. Placeat hic unde.
        </p>
        <div className="w-full flex gap-x-3 ">
          <button className="bg-zinc-900 dark:text-[#141414]  dark:hover:bg-[#dbdbdb] dark:bg-[#f1f1f1] flex items-center gap-x-2  hover:bg-zinc-800 transition-colors duration-500  px-4 py-2 rounded-md">
            <RiDeleteBin6Line size={20} />
            Sil
          </button>
          <button className="bg-zinc-900 dark:text-[#141414]  dark:hover:bg-[#dbdbdb] dark:bg-[#f1f1f1] flex items-center gap-x-2 hover:bg-zinc-800 transition-colors duration-500  px-4 py-2 rounded-md">
            <MdEditNote size={20} />
            Güncelle
          </button>
        </div>
      </div>
    </div>
  );
};

export default BlogItem;
