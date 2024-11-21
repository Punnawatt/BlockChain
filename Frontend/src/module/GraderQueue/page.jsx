import { Link } from "react-router-dom";
import React, { useContext } from "react";
import { Card, CardContent } from "@mui/material";
import { WalletContext } from "../WalletContext/page";

const GraderQueue = ({ submissions, connectedWallet }) => {
  const { walletAddress } = useContext(WalletContext);

  return (
    <Card
      sx={{
        width: 1100,
        height: 100,
        padding: 0,
        flex: 1,
        flexDirection: "row",
        boxShadow: "8px 8px #472F05",
        backgroundColor: "#F3DDD1",
        borderRadius: 0,
        border: "3px solid #472F05",
      }}
    >
      {submissions.map((submission) => (
        <CardContent
          sx={{
            padding: 2,
            flex: 1,
            boxShadow: "8px 8px #472F05",
            border: "3px solid #472F05",
          }}
          key={submission.id}
        >
          <Link to={`/graders/${submission.id}`}>
            <h2>Problem Name : {submission.problem.problemName}</h2>{" "}
            {/* Display problemName */}
            <p>Stake amount: {submission.problem.stake}</p>
            <p>Submited By: {submission.problem.walletAddress}</p>
          </Link>
        </CardContent>
      ))}
    </Card>
  );
};

export default GraderQueue;
