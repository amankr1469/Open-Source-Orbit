import React from "react";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import MailOutlineIcon from "@mui/icons-material/MailOutline";

const Footer = () => (
  <div className="w-full flex md:justify-center justify-between items-center flex-col p-4 bg-[#131516]  ">
    <div className=" w-full h-[0.25px] bg-gray-400 mt-10 " />
    <div className="w-full flex sm:flex-row flex-col justify-between items-center my-4">
      <div className="flex flex-[0.5]  items-center">
        <h1 className="text-white font-semibold text-4xl">GithubCrypt</h1>
      </div>
      <div className="text-white flex flex-col items-center">
        Copyright © 2023 GithubCrypt. All rights reserved.
      </div>
      <div className="flex flex-[0.5] justify-center items-center">
        <InstagramIcon className="text-white mr-2" />
        <LinkedInIcon className="text-white mr-2" />
        <MailOutlineIcon className="text-white mr-2" />
      </div>
    </div>
  </div>
);

export default Footer;
