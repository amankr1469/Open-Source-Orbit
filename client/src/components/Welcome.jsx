import React from "react";
import * as animationData from "../Assets/cat2.json";
import { useContext } from "react";
import { GithubContext } from "../context/GithubContext";
import { Button, Grid, Typography } from "@mui/material";
import Lottie from "react-lottie";
import { AiFillPlayCircle } from "react-icons/ai";

const Welcome = () => {
  
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData.default,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  const { currentAccount, connectWallet } = useContext(GithubContext);

  return (
    <Grid
      container
      xs={12}
      sx={{
        height: "auto",
        minHeight: "90vh",
        alignItems: "center",
        justifyContent: "center",
        my: {
          xs: 5,
          md: 0,
        },
        px: {
          xs: 5,
          md: 10,
        },
      }}
    >
      <Grid
        item
        xs={12}
        md={6}
        lg={6}
        sx={{
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Typography
          sx={{
            color: "#fff",
            fontSize: "3rem",
            fontWeight: "bold",
            lineHeight: "1.2",
          }}
        >
          Explore the
          <br /> world of{" "}
          <span
            style={{
              color: "#7ADAFF",
              fontWeight: "bold",
            }}
          >
            Open Source <br />
          </span>{" "}
          with
          <span style={{ color: "#7ADAFF", fontWeight: "bold" }}> Crypto</span>
        </Typography>
        <Typography
          sx={{
            color: "#fff",
            fontSize: "1.2rem",
            fontWeight: "bold",
            lineHeight: "1.2",
            mt: 5,
          }}
        >
          Get your issues solved by the community <br />
          Get paid to solve others issues
        </Typography>

        {!currentAccount && (
          <Button
            onClick={connectWallet}
            sx={{
              backgroundColor: "#7ADAFF",
              color: "#000",
              display: {
                xs: "block",
                md: "none",
              },
              mt: 5,
              "&:hover": {
                backgroundColor: "none",
                color: "#7ADAFF",
                border: "1px solid #7ADAFF",
              },
            }}
          >
            Connect Wallet
          </Button>
        )}
      </Grid>
      <Grid item xs={12} md={6} lg={6}>
        <Lottie options={defaultOptions} height={400} width={400} />
      </Grid>
    </Grid>
  );
};

export default Welcome;
