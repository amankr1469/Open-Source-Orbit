import React, { useContext } from "react";
import { GithubContext } from "../context/GithubContext";
import useFetch from "../hooks/useFetch";
import { shortenAddress } from "../utils/shortenAddress";
//import dummyData from "../utils/dummyData";
// import { MyIssues } from ".";
import AddLinkIcon from "@mui/icons-material/AddLink";
import PaidIcon from "@mui/icons-material/Paid";
import { Card, CardContent, CardMedia, Typography, Link } from "@mui/material";
import { CardActions, Divider, Grid } from "@mui/material";
import StarIcon from "@mui/icons-material/Star";
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
  const { currentAccount, userAddress, ClaimAmount } =
    useContext(GithubContext);
  const button2 = status && claimed;
  const button1 = !claimed && status;
  console.log(button1);
  console.log(button2);
  const handleSubmit = (e) => {
    e.preventDefault();

    ClaimAmount(id, amount, solvedUser);
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

        <Link href={repourl} target="_blank">
          <Typography
            sx={{
              fontsize: "14px",
            }}
          >
            <AddLinkIcon
              sx={{
                fontSize: "25px",
                mr: "5px",
              }}
            />
            {repourl.slice(19)}
          </Typography>
        </Link>
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
          {desc.slice(0, 150)} ....
          <Link href={`${repourl}/issues`} target="_blank">
            <Typography sx={{ fontSize: "14px", fontWeight: "bold" }}>
              Read More
            </Typography>
          </Link>
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
          {!claimed && status ? (
            <button
              type="button"
              onClick={handleSubmit}
              className="text-white w-full mt-2 border-[1px] p-2 border-[#3d4f7c] hover:bg-[#3d4f7c] rounded-full cursor-pointer"
            >
              Pay User
            </button>
          ) : (
            <></>
          )}
          {claimed && status ? (
            // <Typography color="white" fontSize="14px">
            //   Status: Transaction Complete
            // </Typography>
            <Typography color="white" fontSize="20px" fontWeight="bold">
              Transaction Complete
            </Typography>
          ) : (
            <></>
          )}
          {!status ? (
            <Typography color="white" fontSize="20px" fontWeight="bold">
              Not Solved
            </Typography>
          ) : (
            <></>
          )}
        </Grid>
      </CardActions>
    </Card>
  );
};

const MyIssues = () => {
  const { currentAccount, myIssues } = useContext(GithubContext);
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
          {myIssues.map((issue, i) => (
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

export default MyIssues;
