import React, { useContext } from "react";
// import { MyIssues } from ".";
import { GithubContext } from "../context/GithubContext";
import useFetch from "../hooks/useFetch";
//import dummyData from "../utils/dummyData";
import { shortenAddress } from "../utils/shortenAddress";
import AddLinkIcon from "@mui/icons-material/AddLink";
import PaidIcon from "@mui/icons-material/Paid";
import { Card, CardContent, CardMedia, Typography } from "@mui/material";
import { CardActions, Divider, Grid } from "@mui/material";
import StarIcon from "@mui/icons-material/Star";
import CreditScoreIcon from "@mui/icons-material/CreditScore";
import PendingActionsIcon from "@mui/icons-material/PendingActions";
import Lottie from "react-lottie";
import * as animationData from "../Assets/notfound.json";
const IssueCard = ({
  id,
  Issuer,
  username,
  repourl,
  issue,
  desc,
  amount,
  status,
  solvedUser,
  solvedUsername,
  claimed,
  users,
}) => {
  // const gifUrl = useFetch({ keyword });
  const { currentAccount, userAddress } = useContext(GithubContext);

  const handleSubmit = (e) => {
    e.preventDefault();

    //ClaimAmount(id,amount,Issuer);
  };

  return (
    <Card
      sx={{
        maxWidth: "380px",
        minWidth: "380px",
        width: "auto",
        height: "auto",
        border: "1.37039px solid rgba(147, 162, 211, 0.38)",
        borderRadius: "20.937px",
        boxShadow: "none",
        backgroundColor: "#202325",
        p: "20px",
        mx: {
          xs: "20px",
          sm: "0px",
          md: "0px",
        },
      }}
    >
      <CardMedia
        sx={{ width: "auto", height: "70px", borderRadius: "10px" }}
        image="https://cdn.dribbble.com/users/644659/screenshots/5940913/1_rewind_dribbble_live_ipad_4x.png?compress=1&resize=800x600"
        title="green iguana"
      />
      <CardContent>
        {/* Url
Username
Issue title
Desc.
Amount
Users trying

Form
Button */}
        <Grid
          container
          xs={12}
          sx={{
            display: "flex",
            flexDirection: "row",
            width: "100%",
            justifyContent: "space-between",
            alignItems: "center",
            my: "10px",
          }}
        >
          <Typography
            sx={{
              fontSize: "16px",
              color: "black",
              backgroundColor: "#fff",
              borderRadius: "5px",
              padding: "5px",
              fontWeight: "bold",
              display: "flex",
              flexDirection: "row",
            }}
          >
            <StarIcon
              sx={{
                fontSize: "20px",
                color: "#dbaa0b",
                m: "2px",
              }}
            />{" "}
            {issue}
          </Typography>
          <Typography
            sx={{
              fontSize: "14px",
              color: "white",
            }}
          >
            {username}
          </Typography>
        </Grid>

        <Typography
          color="#78bbe7"
          sx={{
            fontsize: "14px",
            textDecoration: "underline",
          }}
        >
          <AddLinkIcon
            sx={{
              fontSize: "25px",
              mr: "5px",
              color: "#78bbe7",
            }}
          />
          {repourl.slice(19)}
        </Typography>
        <Typography
          color="white"
          sx={{
            fontSize: "14px",
            my: "10px",
            p: "15px",
            backgroundColor: "#3a3f43",
          }}
        >
          <Typography
            color="white"
            sx={{
              fontSize: "16px",
              fontWeight: "bold",
            }}
          >
            Description
          </Typography>
          {/* {desc} */}
          {desc.slice(0, 150)} ....read more
        </Typography>

        <Grid
          container
          xs={12}
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            width: "100%",
          }}
        >
          <Typography color="white" fontSize="14px">
            <PaidIcon sx={{ fontSize: "20px" }} /> {amount}
            ETH
          </Typography>
        </Grid>
        <Divider sx={{ mt: "10px", backgroundColor: "white" }} />
      </CardContent>

      <CardActions>
        <Grid
          container
          xs={12}
          sx={{
            width: "100%",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {claimed ? (
            <Typography color="white" fontSize="20px" fontWeight="bold">
              <CreditScoreIcon /> Amount Received
            </Typography>
          ) : (
            <Typography color="white" fontSize="14px" fontWeight="bold">
              <PendingActionsIcon /> Amount Requested
            </Typography>
          )}
        </Grid>
      </CardActions>
    </Card>
  );
};

const MyCompletedIssues = () => {
  const { currentAccount, myCompletedIssues } = useContext(GithubContext);
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
      xs={12}
      sx={{
        display: "flex",
        height: "auto",
        width: "100%",
      }}
    >
      {currentAccount ? (
        <Grid
          item
          xs={12}
          sx={{
            mt: "50px",
            display: "flex",
            flexDirection: "row",
            flexWrap: "wrap",
            rowGap: "30px",
            columnGap: "50px",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {myCompletedIssues.map((issue, i) => (
            <IssueCard key={i} {...issue} />
          ))}
        </Grid>
      ) : (
        <Grid item xs={12}>
          <Typography
            sx={{ fontSize: "20px", color: "white", textAlign: "center" }}
          >
            Please connect your wallet to see the issues
          </Typography>
          <Lottie options={defaultOptions} />
        </Grid>
      )}
    </Grid>
  );
};

export default MyCompletedIssues;
