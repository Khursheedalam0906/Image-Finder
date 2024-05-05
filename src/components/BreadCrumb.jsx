import { Box, InputBase, styled } from "@mui/material";
import React from "react";

const Component = styled(Box)({
  background: "#f6f6f6",
  "& > div": {
    margin: 10,
  },
});

const BreadCrumb = ({ setText, setCount }) => {
  return (
    <Component>
      <InputBase
        type="text"
        placeholder="Search Images"
        onChange={(e) => setText(e.target.value)}
      />
      <InputBase
        type="number"
        placeholder="No of images"
        onChange={(e) => setCount(e.target.value)}
      />
    </Component>
  );
};

export default BreadCrumb;
