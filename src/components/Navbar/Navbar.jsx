import React, { useEffect, useState } from "react";
import { HiMoon, HiSearch, HiSun, HiViewGridAdd } from "react-icons/hi";
import { BsCardList } from "react-icons/bs";

const Navbar = () => {
  const [isLightMode, setIsLightMode] = useState(
    localStorage.theme === "dark" ||
      (!("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
  );

  useEffect(() => {
    if (isLightMode) {
      document.documentElement.classList.add("dark");
      localStorage.theme = "dark";
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.theme = "light";
    }
  }, [isLightMode]);

  const handleLightMode = () => {
    setIsLightMode(!isLightMode);
  };

  return (
    <div className="py-4 px-80 bg-[#0F0F10] flex items-center justify-between border-b border-zinc-700 w-full ">
      <div>
        <h1 className="font-lato text-3xl font-semibold text-[#d4d2d2] flex items-center justify-center gap-x-2">
          <BsCardList size={30} />
          Blog Project
        </h1>
      </div>
      <div className="flex  items-center gap-x-2.5 ">
        <div className="relative">
          <label className="text-zinc-600 absolute right-5 top-3">
            <HiSearch size={24} />
          </label>
          <input
            type="text"
            placeholder="Blog Ara..."
            className="border bg-black py-3 px-5 placeholder:text-zinc-600 text-[#d4d2d2] font-lato rounded-full min-w-[300px] border-zinc-700 outline-none transition-all pr-12 duration-500  focus:ring-2 ring-zinc-800 ring-offset-[#0f0f10] ring-offset-2 "
          />
        </div>
        <div
          onClick={handleLightMode}
          className=" p-3 cursor-pointer text-[#d4d2d2] hover:bg-zinc-800 rounded-md transition-colors duration-500 flex"
        >
          <div className="flex items-center justify-center gap-x-2">
            {isLightMode ? <HiMoon size={26} /> : <HiSun size={26} />}
          </div>
        </div>
        <div className="py-3 hover:bg-zinc-700 px-5 cursor-pointer text-[#d4d2d2]  group transition-all duration-500 bg-zinc-800 rounded-md  flex">
          <div className="flex items-center justify-center gap-x-2">
            <HiViewGridAdd size={26} />
            <span className="font-lato font-semibold ">Ekle</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
