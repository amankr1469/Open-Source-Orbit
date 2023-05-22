import React, { useContext } from "react";
import { HiMenuAlt4 } from "react-icons/hi";
import { FaGithubAlt } from "react-icons/fa";
import { AiFillPlayCircle } from "react-icons/ai";
import { Button, Divider, Typography } from "@mui/material";
import { GithubContext } from "../context/GithubContext";
import metamask from "../Assets/metamask.png";
import { shortenAddress } from "../utils/shortenAddress";


const Navbar = () => {
  const { currentAccount, connectWallet } = useContext(GithubContext);

  return (
    <nav className="w-full flex  items-center justify-between items-center px-4 py-4   ">
      <div className="md:flex-[0.5] flex-initial justify-center items-center">
        <Typography
          sx={{
            display: "flex",
            flexDirection: "row",
            fontSize: "2rem",
            color: "white",
            ml: "3rem",
            fontFamily: "Righteous",
          }}
        >
          <FaGithubAlt
            style={{
              marginTop: "7px",
              marginRight: "5px",
            }}
          />{" "}
          Open-Source Orbit
        </Typography>
      </div>
      <ul className="text-white md:flex hidden list-none flex-row justify-between items-center flex-initial">
        {currentAccount && (
          <Typography
            sx={{
              color: "white",
              fontSize: "20px",
              borderRadius: "0.5rem",
              padding: "0.5rem",
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              border: "1px solid white",
            }}
          >
            <img src={metamask} alt="metamask" className="w-6 h-6 mr-2" />
            {shortenAddress(currentAccount)}
          </Typography>
        )}

        {!currentAccount && (
          <button
            type="button"
            onClick={connectWallet}
            className="flex flex-row justify-center items-center  mx-5 my-2 p-3 rounded-md cursor-pointer border-2 border-white "
          >
            <AiFillPlayCircle className="text-white mr-2" />
            <p className="text-white text-base font-semibold">Connect Wallet</p>
          </button>
        )}
      </ul>
    </nav>
  );
};

export default Navbar;
