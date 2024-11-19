// import { Link } from "react-router-dom";
// import React, { useContext } from "react";
// import { Card, CardContent } from "@mui/material";
// import { WalletContext } from "../WalletContext/page";
// const GraderQueue = ({ submissions, connectedWallet }) => {
//   const { walletAddress } = useContext(WalletContext);
  
// //   const handleDelete = (id, walletAddress) => {
// //     if (connectedWallet !== walletAddress) {
// //       alert("You are not authorized to delete this problem.");
// //       return;
// //     }

// //     fetch(`http://localhost:3000/problems/${id}`, {
// //       method: 'DELETE',
// //     })
// //       .then(() => {
// //         alert('Delete Successful');
// //         window.location.reload(); // Refresh the page
// //       })
// //       .catch((error) => {
// //         console.error("Error deleting problem:", error);
// //       });
// //   };

//   return (
//     <Card
//       sx={{
//         width: 1500,
//         height: 100,
//         padding: 0,
//         flex: 1,
//         flexDirection: "row",
//         boxShadow: "8px 8px #472F05",
//         backgroundColor: "#F3DDD1",
//         borderRadius: 0,
//         border: "3px solid #472F05",
//       }}
//     >
//       {submissions.map((submission) => (
//         <CardContent
//           sx={{
//             padding: 2,
//             flex: 1,
//             boxShadow: "8px 8px #472F05",
//             border: "3px solid #472F05",
//           }}
//           key={submission.id}
//         >
//           <Link to={`/graders/${submission.id}`}>
//             <h2>pp</h2>
//             {/* <h2>{problem.problemName}</h2>
//             <p>Stake amount {problem.stake}</p>
//             <p>Created By {problem.walletAddress}</p> */}
//           </Link>
          
//         </CardContent>
//       ))}
//     </Card>
//   );
// };

// export default GraderQueue;
import { Link } from "react-router-dom";
import React, { useContext } from "react";
import { Card, CardContent } from "@mui/material";
import { WalletContext } from "../WalletContext/page";

const GraderQueue = ({ submissions, connectedWallet }) => {
  const { walletAddress } = useContext(WalletContext);

  return (
    <Card
      sx={{
        width: 1500,
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
            <h2>Problem Name : {submission.problem.problemName}</h2> {/* Display problemName */}
            <p>Stake amount: {submission.problem.stake}</p>
            <p>Submited By: {submission.problem.walletAddress}</p>
          </Link>
        </CardContent>
      ))}
    </Card>
  );
};

export default GraderQueue;
