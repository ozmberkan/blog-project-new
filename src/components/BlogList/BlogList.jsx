import React from "react";
import BlogItem from "../BlogItem/BlogItem";

const BlogList = () => {
  return (
    <div className="w-full  flex flex-col gap-y-12">
      <BlogItem />
      <BlogItem />
      <BlogItem />
    </div>
  );
};

export default BlogList;
