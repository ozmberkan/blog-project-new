import React from "react";
import Filter from "../Filter/Filter";
import BlogList from "../BlogList/BlogList";
import { categories } from "~/data/blogData";

const Main = ({
  selectedCategory,
  setSelectedCategory,
  data,
  search,
  setData,
}) => {
  const filteredData = data.filter((item) => {
    const matchesCategory =
      selectedCategory === "All" || item.category === selectedCategory;
    const matchesSearch = `${item.title} ${item.authorName} ${item.date}`
      .toLowerCase()
      .includes(search.toLowerCase());
    return matchesCategory && matchesSearch;
  });
  return (
    <div className="w-full h-svh bg-[#0F0F10] dark:bg-[#fdfdfd] transition-all duration-500 py-5 px-80">
      <Filter
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
        categories={categories}
      />
      <BlogList filteredData={filteredData} data={data} setData={setData} />
    </div>
  );
};

export default Main;
