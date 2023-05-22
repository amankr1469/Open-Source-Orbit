import React, { useContext } from "react";
import { AiFillPlayCircle } from "react-icons/ai";
import { SiEthereum } from "react-icons/si";
import { BsInfoCircle } from "react-icons/bs";
import { GithubContext } from "../context/GithubContext";
import { shortenAddress } from "../utils/shortenAddress";
import { Loader } from ".";
import { Divider, Grid, Typography } from "@mui/material";

const Input = ({ placeholder, name, type, value, handleChange }) => (
  <input
    placeholder={placeholder}
    type={type}
    step="0.0001"
    value={value}
    onChange={(e) => handleChange(e, name)}
    className="my-2 w-full rounded-md p-3 outline-none bg-[#3a3f43] text-white border-none text-sm "
  />
);

const Working = () => {
  const {
    currentAccount,
    connectWallet,
    handleChange,
    sendIssue,
    formData,
    isLoading,
  } = useContext(GithubContext);

  const handleSubmit = (e) => {
    const { username, repourl, issue, desc, amount } = formData;

    e.preventDefault();

    if (!username || !amount || !repourl || !desc || !issue) return;

    sendIssue();
  };

  return (
    <Grid
      container
      xs={12}
      spacing={2}
      sx={{
        height: "auto",
        minHeight: "100vh",
        alignItems: "center",
        justifyContent: "center",
        p: 5,
      }}
    >
      <Grid item xs={12} md={6} lg={6}>
        <Typography
          variant="h3"
          sx={{
            color: "#fff",
            textAlign: "center",
          }}
        >
          How it works
        </Typography>
        <Grid
          container
          xs={12}
          sx={{
            mt: 5,
          }}
        >
          <Grid
            item
            xs={12}
            md={6}
            lg={6}
            sx={{
              p: 2,
            }}
          >
            <Typography
              sx={{
                color: "#fff",
                textAlign: "center",
                fontWeight: "bold",
                fontSize: "1.5rem",
              }}
            >
              Issuer
            </Typography>
            <Divider sx={{ my: 2, backgroundColor: "white" }} />
            <Typography sx={{ color: "#fff" }}>
              1. Post your Github issue <br />
              2. Set the amount you want to pay <br />
              3. Wait for the issue to be solved <br />
              4. Merge the pull request <br />
              5. Pay the solver <br />
            </Typography>
          </Grid>
          <Grid
            item
            xs={12}
            md={6}
            lg={6}
            sx={{
              p: 2,
            }}
          >
            <Typography
              sx={{
                color: "#fff",
                textAlign: "center",
                fontWeight: "bold",
                fontSize: "1.5rem",
              }}
            >
              Solver
            </Typography>
            <Divider sx={{ my: 2, backgroundColor: "white" }} />
            <Typography sx={{ color: "#fff" }}>
              1. Find an issue you can solve <br />
              2. Send Request to solve the issue <br />
              3. Solve the issue and send pull request <br />
              4. Mark complete once the pull request is merged <br />
              5. Get paid <br />
            </Typography>
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={12} md={6} lg={6}>
        <Grid
          container
          xs={12}
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "#202325",
            borderRadius: "1rem",
            boxShadow: "0px 0px 10px 0px rgba(0,0,0,0.75)",
            p: 5,
          }}
        >
          <h1 className="text-white font-semibold text-2xl mb-5">
            Post Your Github Issue
          </h1>
          <Input
            placeholder="Github Username"
            name="username"
            type="text"
            handleChange={handleChange}
          />
          <Input
            placeholder="Repository link"
            name="repourl"
            type="text"
            handleChange={handleChange}
          />
          <Input
            placeholder="Enter Exact Issue title"
            name="issue"
            type="text"
            handleChange={handleChange}
          />
          <Input
            placeholder="Enter Issue Description"
            name="desc"
            type="text"
            handleChange={handleChange}
          />
          <Input
            placeholder="Amount (ETH)"
            name="amount"
            type="number"
            handleChange={handleChange}
          />

          {/* {isLoading ? (
            <Loader />
          ) : ( */}
          <button
            type="button"
            onClick={handleSubmit}
            className="text-white  mt-2 border-[1px] p-2 border-white hover:bg-[#3d4f7c] rounded-md cursor-pointer"
          >
            Submit Issue
          </button>
          {/* )} */}
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Working;
