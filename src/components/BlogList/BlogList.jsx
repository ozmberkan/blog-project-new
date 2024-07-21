import React from "react";
import BlogItem from "../BlogItem/BlogItem";
import { useAutoAnimate } from "@formkit/auto-animate/react";

const BlogList = ({ filteredData }) => {
  const [animationParent] = useAutoAnimate();

  return (
    <div className="w-full   flex flex-col  gap-y-12" ref={animationParent}>
      {filteredData.map((blog) => (
        <BlogItem key={blog.id} blog={blog} />
      ))}
    </div>
  );
};

export default BlogList;
