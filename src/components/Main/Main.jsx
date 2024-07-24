import React, { useState } from "react";
import Filter from "../Filter/Filter";
import BlogList from "../BlogList/BlogList";

const Main = ({
  selectedCategory,
  setSelectedCategory,
  data,
  setData,
  search,
}) => {
  const [sortBy, setSortBy] = useState("title");

  return (
    <div className="w-full h-svh bg-[#0F0F10] dark:bg-[#fdfdfd] transition-all duration-500 py-5 px-80">
      <Filter
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
        setSortBy={setSortBy}
        sortBy={sortBy}
      />
      <BlogList
        data={data}
        sortBy={sortBy}
        selectedCategory={selectedCategory}
        search={search}
        setData={setData}
      />
    </div>
  );
};

export default Main;
