import React from "react";
import BlogItem from "../BlogItem/BlogItem";
import { useAutoAnimate } from "@formkit/auto-animate/react";

const BlogList = ({ filteredData, setData, data }) => {
  const [animationParent] = useAutoAnimate();

  return (
    <div className="w-full  flex flex-col   gap-y-12" ref={animationParent}>
      {filteredData.length > 0 ? (
        filteredData.map((blog) => (
          <BlogItem setData={setData} data={data} key={blog.id} blog={blog} />
        ))
      ) : (
        <span className="bg-red-500 py-2 px-3 rounded-md text-red-200 dark:text-red-500 dark:bg-red-200 font-lato text-sm ">
          Veritabanında herhangi bir blog bulunmamaktadır!
        </span>
      )}
    </div>
  );
};

export default BlogList;
