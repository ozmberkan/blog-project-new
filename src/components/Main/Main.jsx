import React, { useState } from "react";
import Filter from "../Filter/Filter";
import BlogList from "../BlogList/BlogList";
import { blogData } from "../../data/blogData";

const Main = () => {
  const [data, setData] = useState(blogData);

  return (
    <div className="w-full bg-[#0F0F10]  dark:bg-[#fdfdfd] transition-all duration-500 py-5 px-80">
      <Filter />
      <BlogList data={data} />
    </div>
  );
};

export default Main;
