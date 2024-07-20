import React from "react";
import Filter from "../Filter/Filter";
import BlogList from "../BlogList/BlogList";

const Main = () => {
  return (
    <div className="w-full bg-[#0F0F10] py-5 px-80">
      <Filter />
      <BlogList />
    </div>
  );
};

export default Main;
