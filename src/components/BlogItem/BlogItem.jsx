import React from "react";

const BlogItem = () => {
  return (
    <div className="w-full border rounded-xl border-zinc-700 p-3 gap-x-5 flex items-start justify-start">
      <div className="w-[40%]">
        <img
          src="https://images.yourstory.com/cs/wordpress/2017/02/52-Blog.jpg?mode=crop&crop=faces&ar=16%3A9&format=auto&w=3840&q=75"
          alt="Blog"
        />
      </div>
      <div className="w-[60%] font-lato text-[#d4d2d2] p-3 flex flex-col gap-y-3">
        <div>
          <p className="px-1.5 py-1 w-32 text-sm bg-zinc-900 rounded-md inline-flex items-center justify-center  ">
            Technology
          </p>
        </div>
        <h1 className="text-3xl ">Blog Başlığı</h1>
        <p className="text-sm leading-normal">
          {/* İçerik */}
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam sunt
          atque fugiat ipsa, quas iste dolores asperiores nesciunt architecto,
          incidunt ipsum vero, explicabo dolor rerum?
        </p>
      </div>
    </div>
  );
};

export default BlogItem;
