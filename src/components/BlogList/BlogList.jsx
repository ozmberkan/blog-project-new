import React from "react";
import BlogItem from "../BlogItem/BlogItem";
import { useAutoAnimate } from "@formkit/auto-animate/react";

const BlogList = (props) => {
  const { data, sortBy, selectedCategory, search, setData } = props;
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
        return new Date(a.date) - new Date(b.date);
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
        <span className="bg-red-500 py-2 px-3 rounded-md text-red-200 dark:text-red-500 dark:bg-red-200 font-lato text-sm">
          Veritabanında blog bulunamadı, Lütfen kontrolleri sağlayınız.
        </span>
      )}
    </div>
  );
};

export default BlogList;
