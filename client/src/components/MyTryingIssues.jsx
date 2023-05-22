import React, { useContext, useState } from "react";
// import { MyIssues } from ".";

import { GithubContext } from "../context/GithubContext";
import AddLinkIcon from "@mui/icons-material/AddLink";
import PaidIcon from "@mui/icons-material/Paid";
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Button,
  Link,
} from "@mui/material";
import { CardActions, Divider, Grid } from "@mui/material";
import StarIcon from "@mui/icons-material/Star";
import useFetch from "../hooks/useFetch";
//import dummyData from "../utils/dummyData";
import { shortenAddress } from "../utils/shortenAddress";
import axios from "axios";
import Lottie from "react-lottie";
import * as animationData from "../Assets/notfound.json";
const Input = ({ placeholder, name, type, value, handleChange }) => (
  <input
    placeholder={placeholder}
    type={type}
    // step="0.0001"
    value={value}
    onChange={(e) => handleChange(e, name)}
    className="my-2 rounded-sm p-1  bg-transparent text-white  text-sm"
  />
);

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
  usersTrying,
}) => {
  ///// Latest Issue
  // // const gifUrl = useFetch({ keyword });
  // const { currentAccount, userAddress, MarkComplete } =
  //   useContext(GithubContext);
  // console.log(currentAccount);
  // const handleSubmit = (e) => {
  //   //console.log(userAddress);
  //   e.preventDefault();
  //   const len = usersTrying.length;
  //   for (var i = 0; i < len; i++) {
  //     //console.log(usersTrying[i].user);
  //     if (userAddress.toUpperCase() === usersTrying[i].user.toUpperCase()) {
  //       MarkComplete(id, usersTrying[i].username);
  //       return;
  //     }
  //   }
  //   console.log("mark complete not called");

  //   //sendTryRequest(i_d);

  ////// OLd code

  const { currentAccount, userAddress, MarkComplete } =
    useContext(GithubContext);
  console.log("hehe");
  const [prno, setPrno] = useState(0);
  // const [state, setState] = useState("");
  // const [title, setTitle] = useState("");
  // const [user, setUser] = useState("");
  const handleChange = (e, name) => {
    //setformData((prevState) => ({ ...prevState, [name]: e.target.value }));
    setPrno(e.target.value);
  };

  const anotherfunc = (state, title, user) => {
    const len = usersTrying.length;
    for (var i = 0; i < len; i++) {
      if (userAddress.toUpperCase() === usersTrying[i].user.toUpperCase()) {
        console.log(usersTrying[i].username);
        if (state == "closed" && status == false) {
          if (user == usersTrying[i].username) {
            if (title == issue) {
              //alert("MARK COMPLETE");
              MarkComplete(id, usersTrying[i].username);
            } else {
              alert("Error : Issue Title did not matched");
              return;
            }
          } else {
            alert("Error : Username did not Matched with your username");
            return;
          }
        } else {
          alert("Error : Status is Open");
          return;
        }
        //MarkComplete(id,usersTrying[i].username);
        return;
      }
    }
  };

  const handleSubmit = async (e) => {
    console.log(prno);
    //////////
    // https://github.com/Bhushan21z/testrepo
    const repo = repourl.slice(19);
    const name = username;
    console.log(repo);
    await axios
      .get(`https://api.github.com/repos/${repo}/pulls/${prno}`)
      .then((response) => {
        console.log(response.data);
        // setState(response.data.state);
        // setTitle(response.data.title);
        // setUser(response.data.user.login);
        // console.log(state,title,user);
        anotherfunc(
          response.data.state,
          response.data.title,
          response.data.user.login
        );
      })
      .catch((error) => {
        console.log(error);
      });

    /////////
    // e.preventDefault();
    console.log("Mark complete not called");
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
            From: {username}
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
          {desc.slice(0, 150)} ....
          <Link href={`${repourl}/issues`} target="_blank">
            <Typography sx={{ fontSize: "14px", fontWeight: "bold" }}>
              Read More
            </Typography>
          </Link>
          {/* lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla */}
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
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          {/* <Typography variant="body2" color="white">
            Try this issue
          </Typography> */}
          <Input
            placeholder="Pull Request No"
            name="prno"
            type="number"
            handleChange={handleChange}
          />
          <Button
            onClick={handleSubmit}
            sx={{
              backgroundColor: "#fff",
              color: "black",
              borderRadius: "5px",
              padding: "5px",
              fontSize: "10px",
            }}
          >
            Mark Complete
          </Button>
        </Grid>
      </CardActions>
    </Card>
  );
};

const MyTryingIssues = () => {
  const { currentAccount, myTryingIssues } = useContext(GithubContext);
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
          container
          xs={12}
          sx={{
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Typography
            sx={{ fontSize: "16px", textAlign: "center", color: "white" }}
          >
            Solve the Issue and send Pull Request. Once the Pull Request is
            merged,mention the Pull Request Number in the form and click on Mark
            Complete.
          </Typography>

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
            {myTryingIssues.map((issue, i) => (
              <IssueCard key={i} {...issue} />
            ))}
          </Grid>
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

export default MyTryingIssues;
