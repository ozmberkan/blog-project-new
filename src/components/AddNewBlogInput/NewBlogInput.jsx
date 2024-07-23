import React from "react";
import { MdFormatListBulletedAdd } from "react-icons/md";

const NewBlogInput = ({ handleChange, addNewBlog }) => {
  return (
    <form className="py-4 grid grid-cols-2 gap-3">
      <div className="flex flex-col gap-y-2 font-lato">
        <label className="font-semibold text-zinc-500 dark:text-zinc-700">
          Başlık
        </label>
        <input
          type="text"
          name="title"
          className="p-3 text-zinc-500 w-full rounded-md border bg-transparent dark:border-zinc-600 border-zinc-700  placeholder:text-zinc-500"
          placeholder="Başlık yazınız..."
          onChange={handleChange}
        />
      </div>
      <div className="flex flex-col gap-y-2 font-lato">
        <label className="font-semibold text-zinc-500 dark:text-zinc-700">
          Kategori
        </label>
        <select
          type="text"
          name="category"
          onChange={handleChange}
          className="p-3 text-zinc-500 w-full  rounded-md border bg-transparent dark:border-zinc-600 border-zinc-700  "
        >
          <option value="">Kategori Seçiniz</option>
          <option value="Blogs">Blogs</option>
          <option value="Technology">Technology</option>
          <option value="School">School</option>
          <option value="Programming">Programming</option>
        </select>
      </div>
      <div className="flex flex-col gap-y-2 font-lato">
        <label className="font-semibold text-zinc-500 dark:text-zinc-700">
          Blog Görsel
        </label>
        <input
          type="text"
          name="blogImg"
          onChange={handleChange}
          className="p-3 text-zinc-500 w-full rounded-md border bg-transparent dark:border-zinc-600 border-zinc-700  placeholder:text-zinc-500"
          placeholder="Blog Görsel Link Giriniz..."
        />
      </div>
      <div className="flex flex-col gap-y-2 font-lato">
        <label className="font-semibold text-zinc-500 dark:text-zinc-700">
          Yazar Görsel
        </label>
        <input
          type="text"
          name="authorImg"
          onChange={handleChange}
          className="p-3 text-zinc-500 w-full rounded-md border bg-transparent dark:border-zinc-600 border-zinc-700  placeholder:text-zinc-500"
          placeholder="Yazar Görsel Link Giriniz..."
        />
      </div>
      <div className="flex flex-col gap-y-2 font-lato">
        <label className="font-semibold text-zinc-500 dark:text-zinc-700">
          Yazar İsim Soyisim
        </label>
        <input
          type="text"
          name="authorName"
          onChange={handleChange}
          className="p-3 text-zinc-500 w-full rounded-md border bg-transparent dark:border-zinc-600 border-zinc-700  placeholder:text-zinc-500"
          placeholder="Yazar İsim - Soyisim Giriniz..."
        />
      </div>
      <div className="flex flex-col gap-y-2 font-lato">
        <label className="font-semibold  text-zinc-500 dark:text-zinc-700">
          Tarih
        </label>
        <input
          type="date"
          name="date"
          onChange={handleChange}
          className="p-3 text-zinc-500 w-full rounded-md border bg-transparent dark:border-zinc-600 border-zinc-700  placeholder:text-zinc-500"
          placeholder="Yazar İsim - Soyisim Giriniz..."
        />
      </div>
      <div className="col-span-2 row-span-3 gap-y-2 flex flex-col font-lato">
        <label className="font-semibold text-zinc-500 dark:text-zinc-700">
          Blog Yazısı
        </label>
        <textarea
          type="text"
          name="content"
          onChange={handleChange}
          className="p-3 text-zinc-500 w-full min-w-[200px] min-h-[200px] bg-transparent max-h-[200px] dark:border-zinc-600 border-zinc-700 rounded-md border  placeholder:text-zinc-500"
          placeholder="Blog Yazısı..."
          maxLength={250}
        />
      </div>

      <button
        onClick={addNewBlog}
        className="p-3 w-1/2 mt-2 flex items-center text-lg justify-center gap-x-2 rounded-md bg-[#f1f1f1] text-[#000] font-lato font-bold dark:bg-zinc-100"
      >
        <MdFormatListBulletedAdd size={22} />
        Ekle
      </button>
    </form>
  );
};

export default NewBlogInput;
