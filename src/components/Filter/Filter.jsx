import React, { useState } from "react";
import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import { FaSortAmountDownAlt } from "react-icons/fa";

const Filter = (props) => {
  const { selectedCategory, setSelectedCategory, categories } = props;
  return (
    <div className="w-full h-20 text-white flex justify-between items-center relative">
      <div className="w-full flex justify-start items-center gap-x-3 font-lato font-bold transition-all duration-500">
        <button
          onClick={() => setSelectedCategory("All")}
          className={`px-4 py-2 bg-zinc-100 rounded-md text-zinc-900 dark:bg-zinc-900 dark:text-[#f1f1f1] hover:bg-zinc-800 dark:hover:bg-zinc-700 ${
            selectedCategory === "All"
              ? "bg-[#f1f1f1]"
              : "bg-zinc-900 text-[#f1f1f1]"
          }`}
        >
          All
        </button>
        {categories.map((button, key) => (
          <button
            key={key}
            onClick={() => setSelectedCategory(button.category)}
            className={`   px-4 py-2 bg-[#18181B] rounded-md dark:bg-[#F1F1F1] dark:text-[#141414] hover:bg-zinc-800 dark:hover:bg-zinc-100 ${
              selectedCategory == button.category
                ? "bg-[#F1F1F1] text-[#141414]"
                : ""
            }`}
          >
            {button.category}
          </button>
        ))}
      </div>
      <Menu>
        <MenuButton className="py-3 hover:bg-zinc-800 px-5 cursor-pointer text-[#d4d2d2] dark:text-[#141414] dark:bg-[#f1f1f1] group transition-all duration-500 bg-zinc-900 rounded-md flex">
          <div className="flex items-center justify-center gap-x-2">
            <FaSortAmountDownAlt size={20} />
            <span className="font-lato font-semibold">Sırala</span>
          </div>
        </MenuButton>
        <MenuItems
          anchor="bottom"
          className="relative p-4 bg-zinc-900 dark:bg-[#eee] dark:border-zinc-300 dark:text-[#141414] border border-zinc-800 rounded-md mt-2 flex justify-start flex-col gap-y-2.5"
        >
          <MenuItem>
            <a className="flex justify-start items-center dark:text-[#141414] dark:hover:bg-[#dddddd] hover:bg-zinc-800 transition-colors duration-100 text-white px-5 rounded-md py-2 cursor-pointer">
              Kategoriye Göre
            </a>
          </MenuItem>
          <MenuItem>
            <a className="flex justify-start items-center dark:text-[#141414] dark:hover:bg-[#dddddd] hover:bg-zinc-800 transition-colors duration-100 text-white px-5 rounded-md py-2 cursor-pointer">
              Tarihe Göre
            </a>
          </MenuItem>
        </MenuItems>
      </Menu>
    </div>
  );
};

export default Filter;
