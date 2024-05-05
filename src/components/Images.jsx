import { Grid } from "@mui/material";
import React from "react";
import Image from "./Image";

const Images = ({ data }) => {
  return (
    <Grid container>
      {data.map((item) => (
        <Grid item xs={3}>
          <Image item={item} />
        </Grid>
      ))}
    </Grid>
  );
};

export default Images;
