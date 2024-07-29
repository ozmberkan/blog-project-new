import React from "react";
import { MdFormatListBulletedAdd } from "react-icons/md";
import Input from "~/UI/Input/Input";
import { inputField } from "~/data/blogData";

const NewBlogInput = ({ handleChange, addNewBlog }) => {
  return (
    <form className="py-4 grid grid-cols-1 gap-3">
      {inputField.map((input, i) => (
        <Input
          key={i}
          label={input.label}
          type={input.type}
          placeholder={input.placeholder}
          name={input.name}
          handleChange={handleChange}
          options={input.options}
        />
      ))}
      <button
        onClick={addNewBlog}
        className="p-3 col-span-2 mt-2 w-full flex items-center text-lg justify-center gap-x-2 rounded-md bg-[#f1f1f1] text-[#000] font-lato font-bold dark:bg-zinc-100"
      >
        <MdFormatListBulletedAdd />
        Ekle
      </button>
    </form>
  );
};

export default NewBlogInput;
