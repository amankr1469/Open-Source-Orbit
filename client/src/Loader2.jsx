import React from "react";
import * as animationData from "./Assets/loaderanime.json";
import Lottie from "react-lottie";
import { Grid, Typography } from "@mui/material";

const Loader2 = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData.default,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  return (
    <Grid
      container
      justifyContent="center"
      alignItems="center"
      sx={{
        display: "flex",
        flexDirection: "column",
        height: "100vh",
        width: "100vw",
        backgroundColor: "#131516",
      }}
    >
      <Typography
        sx={{
          color: "#fff",
          fontSize: "2rem",
          fontWeight: "bold",
          marginBottom: "1rem",
        }}
      >
        Be Patient, Transaction in Progress...
      </Typography>
      <Lottie options={defaultOptions} height={400} width={400} />
    </Grid>
  );
};

export default Loader2;
