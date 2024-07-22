import React, { useState, useEffect } from "react";
import Filter from "../Filter/Filter";
import BlogList from "../BlogList/BlogList";
import { categories } from "~/data/blogData";

const Main = ({
  selectedCategory,
  setSelectedCategory,
  data,
  setData,
  search,
}) => {
  const [sortBy, setSortBy] = useState("title");

  // Filter and sort data based on selectedCategory, search, and sortBy
  useEffect(() => {
    const filteredAndSortedData = data
      .filter((item) => {
        const matchesCategory =
          selectedCategory === "All" || item.category === selectedCategory;
        const matchesSearch = `${item.title} ${item.authorName} ${item.date}`
          .toLowerCase()
          .includes(search.toLowerCase());

        return matchesCategory && matchesSearch;
      })
      .sort((a, b) => {
        if (sortBy === "title") {
          return a.title.localeCompare(b.title);
        } else if (sortBy === "date") {
          return new Date(a.date) - new Date(b.date);
        }
        return 0;
      });

    setData(filteredAndSortedData);
  }, [selectedCategory, search, sortBy]);

  return (
    <div className="w-full h-svh bg-[#0F0F10] dark:bg-[#fdfdfd] transition-all duration-500 py-5 px-80">
      <Filter
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
        categories={categories}
        setSortBy={setSortBy}
        sortBy={sortBy}
      />
      <BlogList filteredData={data} setData={setData} data={data} />
    </div>
  );
};

export default Main;
