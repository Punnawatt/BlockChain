// "use client";
// import React, { useState } from "react";
// import axios from "axios";
// import { Box, TextField } from "@mui/material";
// import TopBar from "../../component/Topbar";
// //import { useHistory } from "react-router-dom";

// function CreateProblem() {
//   const [problemName, setProblemName] = useState("");
//   const [detail, setDetail] = useState("");
//   const [stake, setStake] = useState("");
//   const [testcases, setTestcases] = useState([]);

//   const [hover, setHover] = useState(false);

//   function onMouseAction(event) {
//     if (event.type === "mouseover") {
//       setHover(true);
//     } else {
//       setHover(false);
//     }
//   }

//   const handleAddTestcase = (testcase) => {
//     setTestcases([...testcases, testcase]);
//     console.log(
//       `Testcase added: Input = ${testcase.input}, Output = ${testcase.output}`
//     );
//   };

//   const handleDeleteTestcase = (index) => {
//     const updatedTestcases = testcases.filter((_, i) => i !== index);
//     setTestcases(updatedTestcases);
//     console.log(`Testcase at index ${index} deleted`);
//   };

  

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     const problem = { problemName, detail, stake, testcases };
//     //const history = useHistory();

//     fetch("http://localhost:3000/problems/", {
//       method: "POST",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify(problem),
//     }).then(() => {
//       //console.log('new problem added');
//       //history.push('/');
//       alert("new problem added");
//       setProblemName("");
//       setDetail("");
//       setStake("");
//       setTestcases([]);
//     });
//   };

//   return (
//     <>
//       <TopBar></TopBar>

//       <Box
//         sx={{
//           backgroundColor: "#b3d9ff",
//           width: "100vw", // Set width to 100% of the viewport width
//           maxWidth: "90%", // Ensure it doesn't go beyond the screen
//           margin: "auto",
//           mt: 4,
//           p: 3,
//           display: "flex",
//           flexDirection: "column",
//           gap: 2,
//           boxShadow: 3,
//           borderRadius: 2,
//           alignItems: "center",
//         }}
//       >
//         <h2>Create Problem</h2>
//         <>
//           <Box style={{ marginBottom: "10px" }}>
//             <label>Problem Name *</label>
//             <input
//               type="text"
//               value={problemName}
//               onChange={(e) => setProblemName(e.target.value)}
//               required
//               style={{ display: "block", width: "100%", marginBottom: "10px" }}
//             />
//           </Box>
//           <div style={{ marginBottom: "10px" }}>
//             <TextField
//               sx={{ backgroundColor: "#ffffff" }}
//               label="Detail"
//               variant="outlined"
//               fullWidth
//               multiline
//               rows={4}
//               value={detail}
//               onChange={(e) => setDetail(e.target.value)}
//               required
//             />
//           </div>

//           <Box style={{ marginBottom: "10px" }}>
//             <label>Stake Amount *</label>
//             <input
//               type="text"
//               value={stake}
//               onChange={(e) => setStake(e.target.value)}
//               required
//               style={{ display: "block", width: "100%", marginBottom: "10px" }}
//             />
//           </Box>

//           <h3>Add Your Testcase</h3>
//           <AddTestCase onAdd={handleAddTestcase} />

//           <ul>
//             {testcases.map((testcase, index) => (
//               <li key={index} style={{ marginBottom: "5px" }}>
//                 <strong>Input:</strong> {testcase.input} &nbsp; | &nbsp;
//                 <strong>Output:</strong> {testcase.output} &nbsp;
//                 <button
//                   onClick={() => handleDeleteTestcase(index)}
//                   style={{ marginLeft: "10px" }}
//                 >
//                   Delete
//                 </button>
//               </li>
//             ))}
//           </ul>

//           <button
//             className="button"
//             onClick={handleSubmit}
//             style={
//               hover
//                 ? {
//                     border: "2px solid black",
//                     boxShadow: "5px 4px #472F05",
//                     backgroundColor: "#ff3333",
//                     cursor: "pointer",
//                   }
//                 : {
//                     border: "2px solid black",
//                     boxShadow: "5px 4px #472F05",
//                     backgroundColor: "#F3DDD1",
//                     cursor: "default",
//                   }
//             }
//             onMouseOver={(event) => onMouseAction(event)}
//             onMouseOut={(event) => onMouseAction(event)}
//           >
//             <p>Create Problem</p>
//           </button>
//         </>
//         /
//       </Box>
//     </>
//   );
// }

// // AddTestCase component defined within the same file
// function AddTestCase({ onAdd }) {
//   const [input, setInput] = useState("");
//   const [output, setOutput] = useState("");

//   const handleAdd = () => {
//     if (input && output) {
//       onAdd({ input, output });
//       setInput("");
//       setOutput("");
//     } else {
//       alert("Please fill both input and output fields");
//     }
//   };

//   return (
//     <div style={{ marginBottom: "20px" }}>
//       <div style={{ marginBottom: "10px" }}>
//         <label>Input</label>
//         <input
//           type="text"
//           value={input}
//           onChange={(e) => setInput(e.target.value)}
//           style={{ display: "block", width: "100%", marginBottom: "10px" }}
//         />
//       </div>
//       <div style={{ marginBottom: "10px" }}>
//         <label>Output</label>
//         <input
//           type="text"
//           value={output}
//           onChange={(e) => setOutput(e.target.value)}
//           style={{ display: "block", width: "100%", marginBottom: "10px" }}
//         />
//       </div>
//       <button onClick={handleAdd}>Add</button>
//     </div>
//   );
// }

// export default CreateProblem;

"use client";
import React, { useState, useContext } from "react";
import axios from "axios";
import { Box, TextField } from "@mui/material";
import TopBar from "../../component/Topbar";
//import { WalletContext } from "../../WalletContext"; // Import WalletContext
import { WalletContext } from "../WalletContext/page";
function CreateProblem() {
  const [problemName, setProblemName] = useState("");
  const [detail, setDetail] = useState("");
  const [stake, setStake] = useState("");
  const [testcases, setTestcases] = useState([]);
  const [hover, setHover] = useState(false);

  const { walletAddress } = useContext(WalletContext); // Access wallet address

  function onMouseAction(event) {
    if (event.type === "mouseover") {
      setHover(true);
    } else {
      setHover(false);
    }
  }

  const handleAddTestcase = (testcase) => {
    setTestcases([...testcases, testcase]);
    console.log(
      `Testcase added: Input = ${testcase.input}, Output = ${testcase.output}`
    );
  };

  const handleDeleteTestcase = (index) => {
    const updatedTestcases = testcases.filter((_, i) => i !== index);
    setTestcases(updatedTestcases);
    console.log(`Testcase at index ${index} deleted`);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!walletAddress) {
      alert("Please connect your wallet first.");
      return;
    }

    const problem = { problemName, detail, stake, testcases, walletAddress };

    try {
      const response = await axios.post("http://localhost:3000/problems/", problem, {
        headers: { "Content-Type": "application/json" },
      });
      console.log("Problem created successfully:", response.data);
      alert("New problem added successfully");

      // Clear form fields
      setProblemName("");
      setDetail("");
      setStake("");
      setTestcases([]);
    } catch (error) {
      console.error("Error creating problem:", error);
      alert("Failed to create problem");
    }
  };

  return (
    <>
      <TopBar></TopBar>

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
          gap: 2,
          boxShadow: 3,
          borderRadius: 2,
          alignItems: "center",
        }}
      >
        <h2>Create Problem</h2>
        <>
          <Box style={{ marginBottom: "10px" }}>
            <label>Problem Name *</label>
            <input
              type="text"
              value={problemName}
              onChange={(e) => setProblemName(e.target.value)}
              required
              style={{ display: "block", width: "100%", marginBottom: "10px" }}
            />
          </Box>
          <div style={{ marginBottom: "10px" }}>
            <TextField
              sx={{ backgroundColor: "#ffffff" }}
              label="Detail"
              variant="outlined"
              fullWidth
              multiline
              rows={4}
              value={detail}
              onChange={(e) => setDetail(e.target.value)}
              required
            />
          </div>

          <Box style={{ marginBottom: "10px" }}>
            <label>Stake Amount *</label>
            <input
              type="text"
              value={stake}
              onChange={(e) => setStake(e.target.value)}
              required
              style={{ display: "block", width: "100%", marginBottom: "10px" }}
            />
          </Box>

          <h3>Add Your Testcase</h3>
          <AddTestCase onAdd={handleAddTestcase} />

          <ul>
            {testcases.map((testcase, index) => (
              <li key={index} style={{ marginBottom: "5px" }}>
                <strong>Input:</strong> {testcase.input} &nbsp; | &nbsp;
                <strong>Output:</strong> {testcase.output} &nbsp;
                <button
                  onClick={() => handleDeleteTestcase(index)}
                  style={{ marginLeft: "10px" }}
                >
                  Delete
                </button>
              </li>
            ))}
          </ul>

          <button
            className="button"
            onClick={handleSubmit}
            style={
              hover
                ? {
                    border: "2px solid black",
                    boxShadow: "5px 4px #472F05",
                    backgroundColor: "#ff3333",
                    cursor: "pointer",
                  }
                : {
                    border: "2px solid black",
                    boxShadow: "5px 4px #472F05",
                    backgroundColor: "#F3DDD1",
                    cursor: "default",
                  }
            }
            onMouseOver={(event) => onMouseAction(event)}
            onMouseOut={(event) => onMouseAction(event)}
          >
            <p>Create Problem</p>
          </button>
        </>
      </Box>
    </>
  );
}

// AddTestCase component defined within the same file
function AddTestCase({ onAdd }) {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");

  const handleAdd = () => {
    if (input && output) {
      onAdd({ input, output });
      setInput("");
      setOutput("");
    } else {
      alert("Please fill both input and output fields");
    }
  };

  return (
    <div style={{ marginBottom: "20px" }}>
      <div style={{ marginBottom: "10px" }}>
        <label>Input</label>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          style={{ display: "block", width: "100%", marginBottom: "10px" }}
        />
      </div>
      <div style={{ marginBottom: "10px" }}>
        <label>Output</label>
        <input
          type="text"
          value={output}
          onChange={(e) => setOutput(e.target.value)}
          style={{ display: "block", width: "100%", marginBottom: "10px" }}
        />
      </div>
      <button onClick={handleAdd}>Add</button>
    </div>
  );
}

export default CreateProblem;
