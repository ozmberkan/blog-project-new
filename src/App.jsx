import React, { useState } from "react";
import Main from "./components/Main/Main";
import Navbar from "./components/Navbar/Navbar";
import { blogData } from "~/data/blogData";
import FlexContainer from "./containers/FlexContainer";

const App = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [search, setSearch] = useState("");
  const [data, setData] = useState(blogData);

  return (
    <FlexContainer>
      <Navbar search={search} setSearch={setSearch} />
      <Main
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
        data={data}
        search={search}
      />
    </FlexContainer>
  );
};

export default App;
