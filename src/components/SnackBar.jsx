import { Alert, Snackbar } from "@mui/material";
import React from "react";

const SnackBar = ({ open, setOpen }) => {
  const handleClose = async (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
  };
  return (
    <Snackbar open={open} autoHideDuration={3000} onClose={handleClose}>
      <Alert onClose={handleClose}>
        Number of images should be between 3 and 200
      </Alert>
    </Snackbar>
  );
};

export default SnackBar;
