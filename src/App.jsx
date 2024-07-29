import React, { useState } from "react";
import { ToastContainer } from "react-toastify";
import Main from "./components/Main/Main";
import Navbar from "./components/Navbar/Navbar";
import FlexContainer from "./containers/FlexContainer";
import { blogData } from "~/data/blogData";
import "react-toastify/dist/ReactToastify.css";
import { useMediaQuery } from 'react-responsive'


const App = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [search, setSearch] = useState("");
  const [data, setData] = useState(blogData);
  const isDesktopOrLaptop = useMediaQuery({
    query: '(min-width: 1224px)'
  })
  const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1224px)' })

  return (
    <FlexContainer>
      <ToastContainer autoClose={1000} />
      <Navbar
        search={search}
        setSearch={setSearch}
        setData={setData}
        data={data}
        isDesktopOrLaptop={isDesktopOrLaptop}
        isTabletOrMobile={isTabletOrMobile}
      />
      <Main
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
        data={data}
        setData={setData}
        search={search}
        isDesktopOrLaptop={isDesktopOrLaptop}
        isTabletOrMobile={isTabletOrMobile}
      />
    </FlexContainer>
  );
};

export default App;
