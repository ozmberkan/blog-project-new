import React, { useState } from "react";
import Main from "./components/Main/Main";
import Navbar from "./components/Navbar/Navbar";
import FlexContainer from "./containers/FlexContainer";
import { blogData } from "~/data/blogData";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";

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
        search={search}
        setData={setData}
      />
    </FlexContainer>
  );
};

export default App;
