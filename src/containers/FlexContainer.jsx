import React from "react";

const FlexContainer = ({ children }) => {
  return (
    <div className="flex flex-col items-start justify-start w-full">
      {children}
    </div>
  );
};

export default FlexContainer;
