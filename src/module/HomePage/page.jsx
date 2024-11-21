"use client";
import { useContext } from "react";
import { Box } from "@mui/material";
import TopBar from "../../component/Topbar";
import useFetch from "../useFetch/page";
import ProblemList from "../ProblemList/page";
import { WalletContext } from "../WalletContext/page";

function HomePage() {
  const {
    error,
    isPending,
    data: problems,
  } = useFetch("http://localhost:3000/problems");

  const { walletAddress, connectWallet } = useContext(WalletContext);

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
        <h1 className="text-4xl font-bold">Problem List</h1>
        {/* {!walletAddress && (
          <button onClick={connectWallet} style={{ marginBottom: "1rem" }}>
            Connect Wallet
          </button>
        )}
        {walletAddress && (
          <p style={{ marginBottom: "1rem" }}>Connected Wallet: {walletAddress}</p>
        )} */}
        {error && <div>{error}</div>}
        {isPending && <div>Loading...</div>}
        {problems && (
          <ProblemList problems={problems} connectedWallet={walletAddress} />
        )}
      </Box>
    </>
  );
}

export default HomePage;
