import React from "react";
import BlogItem from "../BlogItem/BlogItem";

const BlogList = ({ data }) => {
  return (
    <div className="w-full  flex flex-col gap-y-12">
      {data.map((blog) => (
        <BlogItem key={blog.id} blog={blog} />
      ))}
    </div>
  );
};

export default BlogList;
