import { createPortal } from "react-dom";
import React from "react";
import { GrFormClose } from "react-icons/gr";
import { useState } from "react";
import { toast } from "react-toastify";
import NewBlogInput from "~/components/AddNewBlogInput/NewBlogInput";

function Modal({ setIsShowModal, setData, data }) {
  const [newBlog, setNewBlog] = useState({
    category: "",
    blogImg: "",
    authorImg: "",
    authorName: "",
    date: "",
    title: "",
    content: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewBlog({ ...newBlog, [name]: value });
  };

  const isValid = Object.values(newBlog).some((x) => x === "");
  const addNewBlog = (e) => {
    e.preventDefault();
    if (isValid) {
      toast.error("Lütfen tüm alanları doldurunuz.");
    } else {
      const updatedBlog = [...data, { ...newBlog, id: data.length + 1 }];
      setData(updatedBlog);
      setIsShowModal(false);
      toast.success("Blog Başarıyla Oluşturuldu");
    }
  };

  return createPortal(
    <React.Fragment>
      <div className="fixed inset-0 flex items-center justify-center z-50">
        <div className="bg-zinc-950 border-2 border-zinc-800 dark:border-zinc-400 dark:bg-[#fff]  rounded-2xl shadow-lg p-6 max-w-2xl w-full relative z-50">
          <div className="flex w-full gap-y-2 flex-col mb-5">
            <div className="flex justify-between items-center w-full">
              <h3 className="text-xl font-semibold text-zinc-200 dark:text-zinc-700">
                Blog Oluştur
              </h3>
              <button
                className="text-gray-500 hover:text-zinc-300 dark:hover:text-zinc-800 hover:bg-zinc-800 p-1 flex items-center justify-center dark:hover:bg-[#f1f1f1] rounded-md transition-colors duration-500"
                onClick={() => setIsShowModal(false)}
              >
                <GrFormClose size={25} />
              </button>
            </div>
            <div className="text-sm text-zinc-500">
              Bu alandan yeni bir blog ekleyebilirsiniz. Bütün alanları
              doldurmanız gerekmektedir.
            </div>
          </div>
          <NewBlogInput handleChange={handleChange} addNewBlog={addNewBlog} />
        </div>
        <div
          id="backDiv"
          className="bg-zinc-700  bg-opacity-30 dark:bg-opacity-50 absolute w-full h-full"
          onClick={() => setIsShowModal(false)}
        ></div>
      </div>
    </React.Fragment>,
    document.getElementById("modal")
  );
}

export default Modal;
