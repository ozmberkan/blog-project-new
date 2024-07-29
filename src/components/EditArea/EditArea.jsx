import React from "react";
import EditInput from "~/UI/EditInput/EditInput";
import { EditInputField } from "../../data/blogData";

const EditArea = ({
  editedBlog,
  saveBlog,
  handleEditChange,
  blogImg,
  setEditMode,
  isTabletOrMobile,
  isDesktopOrLaptop,
}) => {
  const closeEditMode = (e) => {
    e.preventDefault();
    setEditMode(false);
  };
  return (
    <React.Fragment>
      {isDesktopOrLaptop && (
        <div className="w-full border rounded-xl transition-all duration-500 dark:border-zinc-300 border-zinc-700 dark:bg-white p-3 gap-x-5 flex flex-col items-center">
          <div className="flex w-full items-center justify-center ">
            <div className="w-[40%]">
              <img
                src={blogImg}
                alt="Blog"
                className="rounded-md h-[275px] w-full"
              />
            </div>
            <form className="w-[60%] font-lato text-[#d4d2d2] dark:text-[#141414] p-3 flex flex-col gap-y-4">
              {EditInputField.map((input, i) => (
                <EditInput
                  key={i}
                  label={input.label}
                  type={input.type}
                  placeholder={input.placeholder}
                  name={input.name}
                  handleEditChange={handleEditChange}
                  value={editedBlog[input.name] || ""}
                  options={input.options}
                />
              ))}
              <button
                onClick={saveBlog}
                className="bg-zinc-900 dark:text-[#141414] dark:hover:bg-[#dbdbdb] dark:bg-[#f1f1f1] flex items-center gap-x-2 hover:bg-zinc-800 transition-colors duration-500 px-4 py-2 rounded-md"
              >
                Kaydet
              </button>
              <button
                onClick={closeEditMode}
                className="bg-zinc-900 dark:text-[#141414] dark:hover:bg-[#dbdbdb] dark:bg-[#f1f1f1] flex items-center gap-x-2 hover:bg-zinc-800 transition-colors duration-500 px-4 py-2 rounded-md"
              >
                İptal
              </button>
            </form>
          </div>
        </div>
      )}
      {isTabletOrMobile && (
        <div className="w-full border rounded-xl transition-all duration-500 dark:border-zinc-300 border-zinc-700 dark:bg-white p-3 gap-x-5 flex flex-col items-center">
          <div className="flex w-full flex-col items-center justify-center ">
            <div className="w-full">
              <img src={blogImg} alt="Blog" className="rounded-md  w-full" />
            </div>
            <form className="w-full font-lato text-[#d4d2d2] dark:text-[#141414] p-3 flex flex-col gap-y-4">
              {EditInputField.map((input, i) => (
                <EditInput
                  key={i}
                  label={input.label}
                  type={input.type}
                  placeholder={input.placeholder}
                  name={input.name}
                  handleEditChange={handleEditChange}
                  value={editedBlog[input.name] || ""}
                  options={input.options}
                />
              ))}
              <button
                onClick={saveBlog}
                className="bg-zinc-900 dark:text-[#141414] dark:hover:bg-[#dbdbdb] dark:bg-[#f1f1f1] flex items-center gap-x-2 hover:bg-zinc-800 transition-colors duration-500 px-4 py-2 rounded-md"
              >
                Kaydet
              </button>
              <button
                onClick={closeEditMode}
                className="bg-zinc-900 dark:text-[#141414] dark:hover:bg-[#dbdbdb] dark:bg-[#f1f1f1] flex items-center gap-x-2 hover:bg-zinc-800 transition-colors duration-500 px-4 py-2 rounded-md"
              >
                İptal
              </button>
            </form>
          </div>
        </div>
      )}
    </React.Fragment>
  );
};

export default EditArea;
