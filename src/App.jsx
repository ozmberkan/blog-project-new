import React, { useState } from "react";
import { ToastContainer } from "react-toastify";
import Main from "./components/Main/Main";
import Navbar from "./components/Navbar/Navbar";
import FlexContainer from "./containers/FlexContainer";
import { blogData } from "~/data/blogData";
import "react-toastify/dist/ReactToastify.css";

const App = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [search, setSearch] = useState("");
  const [data, setData] = useState(blogData);

  return (
    <FlexContainer>
      <ToastContainer autoClose={1000} />
      <Navbar
        search={search}
        setSearch={setSearch}
        setData={setData}
        data={data}
      />
      <Main
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
        data={data}
        setData={setData}
        search={search}
      />
    </FlexContainer>
  );
};

export default App;
