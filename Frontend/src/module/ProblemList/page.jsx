// // // import { Link } from "react-router-dom";
// // // import { Card, CardContent, Typography, Button, Box } from "@mui/material";
// // // import { useNavigate } from "react-router-dom";
// // // const ProblemList = ({ problems }) => {
// // //   const navigate = useNavigate();
// // //   const handleOnclick = () => {
// // //       //<Link to = {`/problems/${problems.id}/submit`}></Link>
// // //       navigate(`/problems/${problems.id}/submit`);
// // //     }
// // //   return (
    
// // //     <Card
// // //       sx={{
// // //         width: 1500,
// // //         height: 100,
// // //         padding: 0,
// // //         flex: 1,
// // //         flexDirection: "row",
// // //         boxShadow: "8px 8px #472F05",
// // //         backgroundColor: "#F3DDD1",
// // //         borderRadius: 0,
// // //         border: "3px solid #472F05",
// // //         //position: 'relative',
// // //       }}
// // //     >
// // //       {problems.map((problem) => (
// // //         <CardContent
// // //           sx={{
// // //             padding: 2,
// // //             flex: 1,
// // //             boxShadow: "8px 8px #472F05",
// // //             border: "3px solid #472F05",
// // //           }}
// // //           key={problem.id}
// // //         >
// // //           <Link to={`/problems/${problem.id}`}>
// // //             <h2>{problem.problemName}</h2>
// // //             <p>Stake amount {problem.stake}</p>
// // //           </Link>
// // //           <button>Delete</button>
// // //           <Link to={`/problems/submit/${problem.id}`}>
// // //             <button>Submit</button>
// // //           </Link>
          
// // //         </CardContent>
// // //       ))}
// // //     </Card>
// // //   );
// // // };

// // // export default ProblemList;
// // import { Link } from "react-router-dom";
// // import { Card, CardContent, Typography, Button, Box } from "@mui/material";

// // const ProblemList = ({ problems }) => {
// //     const handleDelete = () => {
// //     fetch('http://localhost:3000/problems/' + problems.id, {
// //       method: 'DELETE'
// //     }).then(() => {
// //       alert('Delete Sucessful')
// //     })
// //   }
// //   return (
// //     <Card
// //       sx={{
// //         width: 1500,
// //         height: 100,
// //         padding: 0,
// //         flex: 1,
// //         flexDirection: "row",
// //         boxShadow: "8px 8px #472F05",
// //         backgroundColor: "#F3DDD1",
// //         borderRadius: 0,
// //         border: "3px solid #472F05",
// //       }}
// //     >
// //       {problems.map((problem) => (
// //         <CardContent
// //           sx={{
// //             padding: 2,
// //             flex: 1,
// //             boxShadow: "8px 8px #472F05",
// //             border: "3px solid #472F05",
// //           }}
// //           key={problem.id}
// //         >
// //           <Link to={`/problems/${problem.id}`}>
// //             <h2>{problem.problemName}</h2>
// //             <p>Stake amount {problem.stake}</p>
// //           </Link>
// //           <button onClick={handleDelete}>Delete</button>
// //           <Link to={`/problems/submit/${problem.id}`}>
// //             <button>Submit</button>
// //           </Link>
// //         </CardContent>
// //       ))}
// //     </Card>
// //   );
// // };

// // export default ProblemList;
// import { Link } from "react-router-dom";
// import { Card, CardContent } from "@mui/material";

// const ProblemList = ({ problems }) => {
//   const handleDelete = (id) => {
//     fetch(`http://localhost:3000/problems/${id}`, {
//       method: 'DELETE'
//     })
//     .then(() => {
//       alert('Delete Successful');
//       window.location.reload(); // Refresh the page
//     })
//     .catch((error) => {
//       console.error("Error deleting problem:", error);
//     });
//   };

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
//       {problems.map((problem) => (
//         <CardContent
//           sx={{
//             padding: 2,
//             flex: 1,
//             boxShadow: "8px 8px #472F05",
//             border: "3px solid #472F05",
//           }}
//           key={problem.id}
//         >
//           <Link to={`/problems/${problem.id}`}>
//             <h2>{problem.problemName}</h2>
//             <p>Stake amount {problem.stake}</p>
//             <p>Created By {problem.walletAddress}</p>
//           </Link>
//           <button onClick={() => handleDelete(problem.id)}>Delete</button>
//           <Link to={`/problems/submit/${problem.id}`}>
//             <button>Submit</button>
//           </Link>
//         </CardContent>
//       ))}
//     </Card>
//   );
// };

// export default ProblemList;
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
            <h2>{problem.problemName}</h2>
            <p>Stake amount {problem.stake}</p>
            <p>Created By {problem.walletAddress}</p>
          </Link>
          <button onClick={() => handleDelete(problem.id, problem.walletAddress)}>
            Delete
          </button>
          <Link to={`/problems/submit/${problem.id}`}>
            <button>Submit</button>
          </Link>
        </CardContent>
      ))}
    </Card>
  );
};

export default ProblemList;
