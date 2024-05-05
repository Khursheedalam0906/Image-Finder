import { AppBar, Toolbar, Typography, styled } from "@mui/material";
import React from "react";
import CollectionsIcon from "@mui/icons-material/Collections";

const Header = styled(AppBar)`
  background: #445a6f;
  position: static;
`;

const Navbar = () => {
  return (
    <Header>
      <Toolbar>
        <CollectionsIcon />
        <Typography>Image Finder</Typography>
      </Toolbar>
    </Header>
  );
};

export default Navbar;
