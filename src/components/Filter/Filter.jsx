import React from "react";
import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import { FaSortAmountDownAlt } from "react-icons/fa";

const Filter = () => {
  return (
    <div className="w-full h-20 text-white flex justify-end items-center">
      <Menu>
        <MenuButton className="py-3 hover:bg-zinc-800 px-5 cursor-pointer text-[#d4d2d2]  group transition-all duration-500 bg-zinc-900 rounded-md  flex">
          <div className="flex items-center justify-center gap-x-2">
            <FaSortAmountDownAlt size={20} />
            <span className="font-lato font-semibold ">Sırala</span>
          </div>
        </MenuButton>
        <MenuItems
          anchor="bottom"
          className="p-4 bg-zinc-900 border border-zinc-800 rounded-md mt-2 flex justify-start flex-col gap-y-2.5"
        >
          <MenuItem>
            <a className="flex justify-start items-center data-[focus]:bg-zinc-800 transition-colors duration-100 text-white px-5 rounded-md py-2 cursor-pointer">
              Kategoriye Göre
            </a>
          </MenuItem>
          <MenuItem>
            <a className="flex justify-start items-center data-[focus]:bg-zinc-800 transition-colors duration-100 text-white  px-5 rounded-md py-2 cursor-pointer">
              Tarihe Göre
            </a>
          </MenuItem>
        </MenuItems>
      </Menu>
    </div>
  );
};

export default Filter;
