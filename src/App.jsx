import React from "react";
import Navbar from "./components/Navbar/Navbar";
import FlexContainer from "./containers/FlexContainer";
import Main from "./components/Main/Main";

const App = () => {
  return (
    <FlexContainer>
      <Navbar />
      <Main />
    </FlexContainer>
  );
};

export default App;
