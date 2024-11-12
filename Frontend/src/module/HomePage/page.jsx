"use client";
import { Box } from "@mui/material";
import TopBar from "../../component/Topbar";
//import Submit from './component/Submit';
//import './MyApp.css'
import React, { useState, useEffect } from "react";
//import Problemform from './component/Problemform';
//import CustomCard from './component/CustomCard';
import CustomCard from "../../component/CustomCard";
import useFetch from "../useFetch/page";

import ProblemList from "../ProblemList/page";

function HomePage() {
  const {
    error,
    isPending,
    data: problems,
  } = useFetch("http://localhost:3000/problems");

  return (
    <>
      <TopBar></TopBar>

      <Box
        sx={{
          backgroundColor: "#b3d9ff",
          width: "100vw", // Set width to 100% of the viewport width
          maxWidth: "90%", // Ensure it doesn't go beyond the screen
          margin: "auto",
          mt: 4,
          p: 3,
          display: "flex",
          flexDirection: "column",
          gap: 0,
          boxShadow: 3,
          borderRadius: 2,
          alignItems: "center",
        }}
      >
        <h1>Problem List</h1>
        {error && <div>{error}</div>}
        {isPending && <div>Loading...</div>}
        {problems && <ProblemList problems={problems} />}
      </Box>
    </>
  );
}

export default HomePage;
