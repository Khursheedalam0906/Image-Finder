import { Card, styled } from "@mui/material";
import React from "react";

const Image = ({ item }) => {
  const StyledImage = styled("img")({
    height: 300,
    width: "100%",
    objectFit: "cover",
  });

  return (
    <Card>
      <StyledImage src={item.largeImageURL} alt="Img" />
    </Card>
  );
};

export default Image;
