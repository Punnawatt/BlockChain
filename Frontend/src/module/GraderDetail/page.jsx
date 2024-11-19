// import { useEffect, useRef, useState } from "react";
// import { EditorView, basicSetup } from "@codemirror/basic-setup";
// import { EditorState } from "@codemirror/state";
// import { python } from "@codemirror/lang-python";
// import { oneDark } from "@codemirror/theme-one-dark";
// import { useParams } from "react-router-dom";
// import useFetch from "../useFetch/page";
// import TopBar from "../../component/Topbar";

// export default function GraderDetail() {
//   const { id } = useParams();
//   const { error, isPending, data: submissions } = useFetch(
//     `http://localhost:8000/submissions/${id}`
//   );

//   const [problemData, setProblemData] = useState(null); // For storing problem data from localhost:3000/problems

//   const editorRef = useRef(null);
//   const [output, setOutput] = useState("");
//   const [inputValue, setInputValue] = useState("");
//   const pyodideRef = useRef(null);
//   const editorViewRef = useRef(null);

//   // Fetch problem data when submission is available
//   useEffect(() => {
//     if (submissions) {
//       const fetchProblemData = async () => {
//         try {
//           const response = await fetch("http://localhost:3000/problems");
//           if (!response.ok) throw new Error("Failed to fetch problems");
//           const problems = await response.json();
//           const matchingProblem = problems.find(
//             (problem) => problem.problemName === submissions.problem.problemName
//           );
//           setProblemData(matchingProblem); // Set matching problem data
//         } catch (error) {
//           console.error(error);
//         }
//       };

//       fetchProblemData();
//     }
//   }, [submissions]);

//   useEffect(() => {
//     const loadPyodide = async () => {
//       pyodideRef.current = await window.loadPyodide();

//       pyodideRef.current.runPython(`
//         import sys
//         from io import StringIO
//         sys.stdout = StringIO()

//         # Define a custom input function to mimic the behavior of input()
//         def input(prompt=''):
//             print(prompt, end='')  # Display the prompt without newline
//             return user_input  # Return the input passed from React
//       `);
//     };
//     loadPyodide();
//   }, []);

//   useEffect(() => {
//     if (editorRef.current && submissions?.code) {
//       const state = EditorState.create({
//         doc: submissions.code, // Use the code from submissions
//         extensions: [basicSetup, oneDark, python()],
//       });

//       const view = new EditorView({
//         state,
//         parent: editorRef.current,
//       });

//       editorViewRef.current = view;

//       return () => view.destroy();
//     }
//   }, [submissions]);

//   const runCode = async () => {
//     setOutput("");
//     if (pyodideRef.current) {
//       try {
//         const code = editorViewRef.current.state.doc.toString();

//         pyodideRef.current.globals.set("user_input", inputValue);

//         await pyodideRef.current.runPythonAsync(code);

//         const output = pyodideRef.current.runPython(`
//           sys.stdout.getvalue()
//         `);

//         setOutput(output || "No output");
//       } catch (error) {
//         setOutput(error.toString());
//       }
//     } else {
//       setOutput("Pyodide is still loading...");
//     }
//   };

//   return (
//     <>
//     <TopBar></TopBar>
    
//     <div className="flex w-full h-full">
//       <div className="flex w-1/2 flex-col h-full">
//         <div className="text-xl font-bold m-2">Problem Details</div>
//         <div className="border m-4 p-4 rounded border-black">
//           <div className="text-xl font-bold">Problem Name:</div>
//           <div className="text-lg">{submissions?.problem?.problemName}</div>
//           <div className="text-xl font-bold mt-4">Stake:</div>
//           <div className="text-lg">{submissions?.problem?.stake}</div>
//           <div className="text-xl font-bold mt-4">Submission Wallet Address:</div>
//           <div className="text-lg">{submissions?.problem?.walletAddress}</div>
//           {problemData && (
//             <div className="text-xl font-bold mt-4">Problem Wallet Address:</div>
//           )}
//           <div className="text-lg">
//             {problemData?.walletAddress || "Not available"}
//           </div>
//         </div>

//         <div>
//           <div className="text-xl font-bold m-2">Example Test Cases:</div>
//           {submissions?.problem?.testcases?.map((testCase, index) => (
//             <div key={index} className="border m-4 p-2 rounded border-black">
//               <div className="text-xl font-bold m-2">Test Case {index + 1}:</div>
//               <div>
//                 <div className="text-xl font-bold m-2">Input:</div>
//                 <div className="border m-4 p-2 rounded border-black">
//                   {testCase.input}
//                 </div>
//               </div>
//               <div>
//                 <div className="text-xl font-bold m-2">Output:</div>
//                 <pre className="border rounded border-black h-full m-4 p-2">
//                   {testCase.output}
//                 </pre>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>

//       <div className="flex w-1/2 flex-col">
//         <div className="text-xl font-bold m-2">Python Code Editor</div>
//         <div ref={editorRef} className="m-4"></div>
//         <button
//           onClick={runCode}
//           className="border w-20 m-4 bg-blue-300 rounded h-10"
//         >
//           Run Code
//         </button>
//         <div>
//           <div className="text-xl font-bold m-2">Input:</div>
//           <input
//             type="text"
//             value={inputValue}
//             onChange={(e) => setInputValue(e.target.value)}
//             placeholder="Enter input here"
//             className="border m-4 p-2 rounded w-5/6 border-black"
//           />
//         </div>
//         <div>
//           <div className="text-xl font-bold m-2">Output:</div>
//           <pre className="border rounded border-black h-full m-4 w-5/6 p-2">
//             {output}
//           </pre>
//         </div>
//         <div className="flex flex-row">
//           <button className="border w-20 my-4 ml-4 bg-green-400 rounded h-10">
//             Approve
//           </button>
//           <button className="border w-20 my-4 ml-4 bg-red-400 rounded h-10">
//             Reject
//           </button>
//         </div>
//       </div>
//     </div>
//     </>
//   );
// }
import { useEffect, useRef, useState } from "react";
import { EditorView, basicSetup } from "@codemirror/basic-setup";
import { EditorState } from "@codemirror/state";
import { python } from "@codemirror/lang-python";
import { oneDark } from "@codemirror/theme-one-dark";
import { useParams } from "react-router-dom";
import useFetch from "../useFetch/page";
import TopBar from "../../component/Topbar";
import Web3 from "web3"; // Import Web3

export default function GraderDetail() {
  const { id } = useParams();
  const { error, isPending, data: submissions } = useFetch(
    `http://localhost:8000/submissions/${id}`
  );

  const [problemData, setProblemData] = useState(null); // For storing problem data from localhost:3000/problems
  const editorRef = useRef(null);
  const [output, setOutput] = useState("");
  const [inputValue, setInputValue] = useState("");
  const pyodideRef = useRef(null);
  const editorViewRef = useRef(null);

  // Set up Web3
  const web3 = new Web3(window.ethereum);
  const [account, setAccount] = useState(null); // Store the user's wallet address

  useEffect(() => {
    // Request the user's Ethereum account on page load
    const loadAccount = async () => {
      const accounts = await web3.eth.requestAccounts();
      setAccount(accounts[0]); // Set the first account as the user's wallet address
    };

    loadAccount();
  }, [web3]);

  // Fetch problem data when submission is available
  useEffect(() => {
    if (submissions) {
      const fetchProblemData = async () => {
        try {
          const response = await fetch("http://localhost:3000/problems");
          if (!response.ok) throw new Error("Failed to fetch problems");
          const problems = await response.json();
          const matchingProblem = problems.find(
            (problem) => problem.problemName === submissions.problem.problemName
          );
          setProblemData(matchingProblem); // Set matching problem data
        } catch (error) {
          console.error(error);
        }
      };

      fetchProblemData();
    }
  }, [submissions]);

  useEffect(() => {
    const loadPyodide = async () => {
      pyodideRef.current = await window.loadPyodide();

      pyodideRef.current.runPython(`
        import sys
        from io import StringIO
        sys.stdout = StringIO()

        # Define a custom input function to mimic the behavior of input()
        def input(prompt=''):
            print(prompt, end='')  # Display the prompt without newline
            return user_input  # Return the input passed from React
      `);
    };
    loadPyodide();
  }, []);

  useEffect(() => {
    if (editorRef.current && submissions?.code) {
      const state = EditorState.create({
        doc: submissions.code, // Use the code from submissions
        extensions: [basicSetup, oneDark, python()],
      });

      const view = new EditorView({
        state,
        parent: editorRef.current,
      });

      editorViewRef.current = view;

      return () => view.destroy();
    }
  }, [submissions]);

  const runCode = async () => {
    setOutput("");
    if (pyodideRef.current) {
      try {
        const code = editorViewRef.current.state.doc.toString();

        pyodideRef.current.globals.set("user_input", inputValue);

        await pyodideRef.current.runPythonAsync(code);

        const output = pyodideRef.current.runPython(`
          sys.stdout.getvalue()
        `);

        setOutput(output || "No output");
      } catch (error) {
        setOutput(error.toString());
      }
    } else {
      setOutput("Pyodide is still loading...");
    }
  };

  // Handle Approve action: send the code hash to the Problem Wallet and ETH to Submission Wallet
  const handleApprove = async () => {
    if (!account) {
      alert("Please connect your wallet.");
      return;
    }

    try {
      // Step 1: Send the code hash to the Problem Wallet Address
      const codeHash = web3.utils.sha3(submissions.code); // Get the hash of the submission code
      const problemWalletAddress = problemData?.walletAddress;

      if (problemWalletAddress) {
        const tx = {
          from: account,
          to: problemWalletAddress,
          data: web3.utils.asciiToHex(codeHash), // Send the hash as data
          gas: 200000, // Set an appropriate gas limit
        };

        await web3.eth.sendTransaction(tx);
        console.log("Code hash sent to Problem Wallet Address:", problemWalletAddress);
      } else {
        console.error("Problem Wallet Address is missing.");
      }

      // Step 2: Send 0.1 ETH to the Submission Wallet Address
      const submissionWalletAddress = submissions?.problem?.walletAddress;

      if (submissionWalletAddress) {
        await web3.eth.sendTransaction({
          from: account,
          to: submissionWalletAddress,
          value: web3.utils.toWei("0.01", "ether"), // Send 0.1 ETH
          gas: 21000, // Set an appropriate gas limit for ETH transfer
        });
        console.log("0.1 ETH sent to Submission Wallet Address:", submissionWalletAddress);
      } else {
        console.error("Submission Wallet Address is missing.");
      }
    } catch (error) {
      console.error("Transaction failed:", error);
    }
  };

  return (
    <>
      <TopBar></TopBar>
      <div className="flex w-full h-full">
        <div className="flex w-1/2 flex-col h-full">
          <div className="text-xl font-bold m-2">Problem Details</div>
          <div className="border m-4 p-4 rounded border-black">
            <div className="text-xl font-bold">Problem Name:</div>
            <div className="text-lg">{submissions?.problem?.problemName}</div>
            <div className="text-xl font-bold mt-4">Stake:</div>
            <div className="text-lg">{submissions?.problem?.stake}</div>
            <div className="text-xl font-bold mt-4">Submission Wallet Address:</div>
            <div className="text-lg">{submissions?.problem?.walletAddress}</div>
            {problemData && (
              <div className="text-xl font-bold mt-4">Problem Wallet Address:</div>
            )}
            <div className="text-lg">{problemData?.walletAddress || "Not available"}</div>
          </div>

          <div>
            <div className="text-xl font-bold m-2">Example Test Cases:</div>
            {submissions?.problem?.testcases?.map((testCase, index) => (
              <div key={index} className="border m-4 p-2 rounded border-black">
                <div className="text-xl font-bold m-2">Test Case {index + 1}:</div>
                <div>
                  <div className="text-xl font-bold m-2">Input:</div>
                  <div className="border m-4 p-2 rounded border-black">{testCase.input}</div>
                </div>
                <div>
                  <div className="text-xl font-bold m-2">Output:</div>
                  <pre className="border rounded border-black h-full m-4 p-2">
                    {testCase.output}
                  </pre>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="flex w-1/2 flex-col">
          <div className="text-xl font-bold m-2">Python Code Editor</div>
          <div ref={editorRef} className="m-4"></div>
          <button onClick={runCode} className="border w-20 m-4 bg-blue-300 rounded h-10">
            Run Code
          </button>
          <div>
            <div className="text-xl font-bold m-2">Input:</div>
            <input
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              placeholder="Enter input here"
              className="border m-4 p-2 rounded w-5/6 border-black"
            />
          </div>
          <div>
            <div className="text-xl font-bold m-2">Output:</div>
            <pre className="border rounded border-black h-full m-4 p-2">{output}</pre>
          </div>
          {/* <button
            onClick={handleApprove}
            className="border w-40 m-4 bg-green-300 rounded h-10"
          >
            Approve and Submit
          </button> */}
          <div className="flex flex-row">
           <button onClick={handleApprove} className="border w-20 my-4 ml-4 bg-green-400 rounded h-10">
             Approve
           </button>
           <button className="border w-20 my-4 ml-4 bg-red-400 rounded h-10">
             Reject
           </button>
         </div>
        </div>
      </div>
    </>
  );
}
