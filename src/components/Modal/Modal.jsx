import { createPortal } from "react-dom";
import PropTypes from "prop-types";
import { GrFormClose } from "react-icons/gr";
import { MdFormatListBulletedAdd } from "react-icons/md";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";

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

  const handleClose = () => {
    setIsShowModal(false);
  };

  const isValid = Object.values(newBlog).some((x) => x === "");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewBlog({ ...newBlog, [name]: value });
  };

  const addNewBlog = (e) => {
    e.preventDefault();
    if (isValid) {
      toast.error("Lütfen tüm alanları doldurunuz.");
    } else {
      const updatedBlog = [...data, { ...newBlog, id: data.length + 1 }];
      setData(updatedBlog);
      toast.success("Blog Başarıyla Oluşturuldu");
    }
  };

  console.log(data);

  return createPortal(
    <>
      <div className="fixed inset-0 flex items-center justify-center z-50">
        <div className="bg-zinc-950 border-2 border-zinc-800 dark:border-zinc-400 dark:bg-[#fff]  rounded-2xl shadow-lg p-6 max-w-2xl w-full relative z-50">
          <div className="flex w-full gap-y-2 flex-col mb-5">
            <div className="flex justify-between items-center w-full">
              <h3 className="text-xl font-semibold text-zinc-200 dark:text-zinc-700">
                Blog Oluştur
              </h3>
              <button
                className="text-gray-500 hover:text-zinc-300 dark:hover:text-zinc-800 hover:bg-zinc-800 p-1 flex items-center justify-center dark:hover:bg-[#f1f1f1] rounded-md transition-colors duration-500"
                onClick={handleClose}
              >
                <GrFormClose size={25} />
              </button>
            </div>
            <div className="text-sm text-zinc-500">
              Bu alandan yeni bir blog ekleyebilirsin. Doldurman gereken alanlar
              '*' ile belirtildi.
            </div>
          </div>
          <div className="py-4 grid grid-cols-2 gap-3">
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
          </div>
        </div>
        <div
          className="bg-zinc-700  bg-opacity-30 dark:bg-opacity-50 absolute w-full h-full"
          onClick={handleClose}
        ></div>
      </div>
    </>,
    document.getElementById("modal")
  );
}

Modal.propTypes = {
  setIsShowModal: PropTypes.func,
  title: PropTypes.string,
  desc: PropTypes.string,
};

export default Modal;
