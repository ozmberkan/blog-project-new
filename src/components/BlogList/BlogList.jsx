import React from "react";
import BlogItem from "../BlogItem/BlogItem";
import { useAutoAnimate } from "@formkit/auto-animate/react";

const BlogList = ({ data, sortBy, selectedCategory, search, setData }) => {
  const [animationParent] = useAutoAnimate();

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
        return new Date(b.date) - new Date(a.date);
      }
      return 0;
    });

  return (
    <div className="w-full flex flex-col gap-y-12 pb-12" ref={animationParent}>
      {filteredAndSortedData.length > 0 ? (
        filteredAndSortedData.map((blog) => (
          <BlogItem setData={setData} data={data} key={blog.id} blog={blog} />
        ))
      ) : (
        <span className="bg-red-500 p-4 rounded-md text-red-100 dark:text-red-500 dark:bg-red-200 font-lato text-base">
          Veritabanında blog bulunamadı, Lütfen kontrolleri sağlayınız.
        </span>
      )}
    </div>
  );
};

export default BlogList;
