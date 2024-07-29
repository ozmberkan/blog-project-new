import React from "react";
import { MdEditNote } from "react-icons/md";
import { RiDeleteBin6Line } from "react-icons/ri";

const BlogArea = ({
  deleteBlog,
  blog,
  setEditMode,
  isTabletOrMobile,
  isDesktopOrLaptop,
}) => {
  const { blogImg, category, id, authorImg, authorName, date, title, content } =
    blog;
  return (
    <React.Fragment>
      {isDesktopOrLaptop && (
        <div className="w-full border rounded-xl transition-all duration-500 dark:border-zinc-300 border-zinc-700 dark:bg-white p-3 gap-x-5 flex items-center">
          <div className="w-[40%]">
            <img
              src={blogImg}
              alt="Blog"
              className="rounded-md h-[275px] w-full"
            />
          </div>
          <div className="w-[60%] font-lato text-[#d4d2d2] dark:text-[#141414] p-3 flex flex-col gap-y-4">
            <div className="flex gap-x-3 justify-between">
              <p className="px-1.5 py-1 w-32 text-sm bg-zinc-900 transition-all duration-500 dark:bg-[#f1f1f1] dark:text-[#141414] rounded-md inline-flex items-center justify-center">
                {category}
              </p>
              <p className="px-1 py-1 w-16 text-sm bg-zinc-900 transition-all duration-500 dark:bg-[#f1f1f1] dark:text-[#141414] rounded-md inline-flex items-center justify-center">
                {id}
              </p>
            </div>
            <div className="w-full flex gap-x-3 items-center">
              <img src={authorImg} alt="" className="w-10 h-10 rounded-md" />
              <div className="font-lato text-zinc-600">
                <h1>{authorName}</h1>
                <h1>{date}</h1>
              </div>
            </div>
            <h1 className="text-3xl ">{title}</h1>
            <p className="text-sm leading-5">{content}</p>
            <div className="w-full flex gap-x-3">
              <button
                onClick={() => deleteBlog(id)}
                className="bg-zinc-900 dark:text-[#141414] dark:hover:bg-[#dbdbdb] dark:bg-[#f1f1f1] flex items-center gap-x-2 hover:bg-zinc-800 transition-colors duration-500 px-4 py-2 rounded-md"
              >
                <RiDeleteBin6Line size={20} />
                Sil
              </button>
              <button
                onClick={() => setEditMode(true)}
                className="bg-zinc-900 dark:text-[#141414] dark:hover:bg-[#dbdbdb] dark:bg-[#f1f1f1] flex items-center gap-x-2 hover:bg-zinc-800 transition-colors duration-500 px-4 py-2 rounded-md"
              >
                <MdEditNote size={20} />
                Güncelle
              </button>
            </div>
          </div>
        </div>
      )}
      {isTabletOrMobile && (
        <div className="w-full border rounded-xl flex-col transition-all duration-500 dark:border-zinc-300 border-zinc-700 dark:bg-white p-3 gap-y-5 flex items-center">
          <div className="w-full">
            <img src={blogImg} alt="Blog" className="rounded-md w-full" />
          </div>
          <div className="w-full font-lato text-[#d4d2d2] dark:text-[#141414] p-3 flex flex-col gap-y-4">
            <div className="flex  justify-between">
              <p className="px-1.5 py-1 w-32 text-sm bg-zinc-900 transition-all duration-500 dark:bg-[#f1f1f1] dark:text-[#141414] rounded-md inline-flex items-center justify-center">
                {category}
              </p>
              <p className="px-1 py-1 w-16 text-sm bg-zinc-900 transition-all duration-500 dark:bg-[#f1f1f1] dark:text-[#141414] rounded-md inline-flex items-center justify-center">
                {id}
              </p>
            </div>
            <div className="w-full flex gap-x-3 items-center">
              <img src={authorImg} alt="" className="w-10 h-10 rounded-md" />
              <div className="font-lato text-zinc-600">
                <h1>{authorName}</h1>
                <h1>{date}</h1>
              </div>
            </div>
            <h1 className="text-3xl ">{title}</h1>
            <p className="text-sm leading-5">{content}</p>
            <div className="w-full flex gap-x-3">
              <button
                onClick={() => deleteBlog(id)}
                className="bg-zinc-900 dark:text-[#141414] dark:hover:bg-[#dbdbdb] dark:bg-[#f1f1f1] flex items-center gap-x-2 hover:bg-zinc-800 transition-colors duration-500 px-4 py-2 rounded-md"
              >
                <RiDeleteBin6Line size={20} />
                Sil
              </button>
              <button
                onClick={() => setEditMode(true)}
                className="bg-zinc-900 dark:text-[#141414] dark:hover:bg-[#dbdbdb] dark:bg-[#f1f1f1] flex items-center gap-x-2 hover:bg-zinc-800 transition-colors duration-500 px-4 py-2 rounded-md"
              >
                <MdEditNote size={20} />
                Güncelle
              </button>
            </div>
          </div>
        </div>
      )}
    </React.Fragment>
  );
};

export default BlogArea;
