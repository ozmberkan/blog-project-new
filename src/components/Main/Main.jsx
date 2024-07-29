import React, { useState } from "react";
import Filter from "../Filter/Filter";
import BlogList from "../BlogList/BlogList";

const Main = ({
  selectedCategory,
  setSelectedCategory,
  data,
  setData,
  search,
  isTabletOrMobile,
  isDesktopOrLaptop,
}) => {
  const [sortBy, setSortBy] = useState("title");

  return (
    <React.Fragment>
      {isDesktopOrLaptop && (
        <div className="w-full h-svh bg-[#0F0F10] dark:bg-[#fdfdfd] transition-all duration-500 py-5 px-80">
          <Filter
            selectedCategory={selectedCategory}
            setSelectedCategory={setSelectedCategory}
            setSortBy={setSortBy}
            sortBy={sortBy}
            isTabletOrMobile={isTabletOrMobile}
            isDesktopOrLaptop={isDesktopOrLaptop}
          />
          <BlogList
            data={data}
            sortBy={sortBy}
            selectedCategory={selectedCategory}
            search={search}
            setData={setData}
            isTabletOrMobile={isTabletOrMobile}
            isDesktopOrLaptop={isDesktopOrLaptop}
          />
        </div>
      )}
      {isTabletOrMobile && (
        <div className="w-full  h-svh bg-[#0F0F10] dark:bg-[#fdfdfd] transition-all duration-500">
          <Filter
            selectedCategory={selectedCategory}
            setSelectedCategory={setSelectedCategory}
            setSortBy={setSortBy}
            sortBy={sortBy}
            isTabletOrMobile={isTabletOrMobile}
            isDesktopOrLaptop={isDesktopOrLaptop}
          />
          <BlogList
            data={data}
            sortBy={sortBy}
            selectedCategory={selectedCategory}
            search={search}
            setData={setData}
            isTabletOrMobile={isTabletOrMobile}
            isDesktopOrLaptop={isDesktopOrLaptop}
          />
        </div>
      )}
    </React.Fragment>
  );
};

export default Main;
