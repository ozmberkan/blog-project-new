import React from "react";

const EditArea = ({
  editedBlog,
  saveBlog,
  handleEditChange,
  blogImg,
  setEditMode,
}) => {
  return (
    <div className="w-full border rounded-xl transition-all duration-500 dark:border-zinc-300 border-zinc-700 dark:bg-white p-3 gap-x-5 flex flex-col items-center">
      <div className="flex w-full items-center justify-center ">
        <div className="w-[40%]">
          <img
            src={blogImg}
            alt="Blog"
            className="rounded-md h-[275px] w-full"
          />
        </div>
        <div className="w-[60%] font-lato text-[#d4d2d2] dark:text-[#141414] p-3 flex flex-col gap-y-4">
          <input
            type="text"
            name="title"
            value={editedBlog.title}
            onChange={handleEditChange}
            className="w-full p-2 border rounded-md"
            placeholder="Başlık"
          />
          <textarea
            name="content"
            value={editedBlog.content}
            onChange={handleEditChange}
            className="w-full p-2 border rounded-md"
            placeholder="İçerik"
          />
          <input
            type="text"
            name="date"
            value={editedBlog.date}
            onChange={handleEditChange}
            className="w-full p-2 border rounded-md"
            placeholder="Tarih"
          />
          <input
            type="text"
            name="authorName"
            value={editedBlog.authorName}
            onChange={handleEditChange}
            className="w-full p-2 border rounded-md"
            placeholder="Yazar Adı"
          />
          <input
            type="text"
            name="category"
            value={editedBlog.category}
            onChange={handleEditChange}
            className="w-full p-2 border rounded-md"
            placeholder="Kategori"
          />
          <button
            onClick={saveBlog}
            className="bg-zinc-900 dark:text-[#141414] dark:hover:bg-[#dbdbdb] dark:bg-[#f1f1f1] flex items-center gap-x-2 hover:bg-zinc-800 transition-colors duration-500 px-4 py-2 rounded-md"
          >
            Kaydet
          </button>
          <button
            onClick={() => setEditMode(false)}
            className="bg-zinc-900 dark:text-[#141414] dark:hover:bg-[#dbdbdb] dark:bg-[#f1f1f1] flex items-center gap-x-2 hover:bg-zinc-800 transition-colors duration-500 px-4 py-2 rounded-md"
          >
            İptal
          </button>
        </div>
      </div>
    </div>
  );
};

export default EditArea;
