import { Link } from "react-router-dom";
import React, { useContext } from "react";
import { Card, CardContent } from "@mui/material";
import { WalletContext } from "../WalletContext/page";

const ProblemList = ({ problems, connectedWallet }) => {
  const { walletAddress } = useContext(WalletContext);
  
  const handleDelete = (id, walletAddress) => {
    if (connectedWallet !== walletAddress) {
      alert("You are not authorized to delete this problem.");
      return;
    }

    fetch(`http://localhost:3000/problems/${id}`, {
      method: 'DELETE',
    })
      .then(() => {
        alert('Delete Successful');
        window.location.reload(); // Refresh the page
      })
      .catch((error) => {
        console.error("Error deleting problem:", error);
      });
  };

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
      {problems.map((problem) => (
        <CardContent
          sx={{
            padding: 2,
            flex: 1,
            boxShadow: "8px 8px #472F05",
            border: "3px solid #472F05",
          }}
          key={problem.id}
        >
          <Link to={`/problems/${problem.id}`}>
            <h2>Problem Name : {problem.problemName}</h2>
            <p>Stake amount : {problem.stake}</p>
            <p>Created By :{problem.walletAddress}</p>
          </Link>
          <button 
            style={{
                backgroundColor: '#f44336', // Red color for a delete button
                color: 'white', // White text
                padding: '10px 20px', // Padding for size
                border: 'none', // Remove default border
                borderRadius: '5px', // Rounded corners
                cursor: 'pointer', // Pointer cursor on hover
                fontSize: '16px', // Font size
                boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)', // Subtle shadow for depth
            }}
            onClick={() => handleDelete(problem.id, problem.walletAddress)}>
            Delete
          </button>
          <Link to={`/problems/submit/${problem.id}`}>
            <button
              style={{
                backgroundColor: '#4CAF50',
                color: 'white',
                padding: '10px 20px',
                border: 'none',
                borderRadius: '5px',
                cursor: 'pointer',
                fontSize: '16px',
              }}
            >
              Submit
            </button>
          </Link>
        </CardContent>
      ))}
    </Card>
  );
};

export default ProblemList;
