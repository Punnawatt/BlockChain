"use client";
import { useContext } from "react";
import { Box } from "@mui/material";
import TopBar from "../../component/Topbar";
import useFetch from "../useFetch/page";
import { WalletContext } from "../WalletContext/page"; // Use context for wallet
import GraderQueue from "../GraderQueue/page";

function GraderHome() {
  const {
    error,
    isPending,
    data: submissions,
  } = useFetch("http://localhost:8000/submissions");
  const { walletAddress, connectWallet } = useContext(WalletContext); // Get wallet context

  return (
    <>
      <TopBar />

      <Box
        sx={{
          backgroundColor: "#b3d9ff",
          width: "100vw",
          maxWidth: "90%",
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
        <h1>Submission List</h1>

        {error && <div>{error}</div>}
        {isPending && <div>Loading...</div>}

        {submissions && (
          <GraderQueue
            submissions={submissions}
            connectedWallet={walletAddress} // Pass wallet address
          />
        )}
      </Box>
    </>
  );
}

export default GraderHome;
