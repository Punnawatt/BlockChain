import { useEffect, useRef, useState } from "react";
import { EditorView, basicSetup } from "@codemirror/basic-setup";
import { EditorState } from "@codemirror/state";
import { python } from "@codemirror/lang-python";
import { oneDark } from "@codemirror/theme-one-dark";
import TopBar from "../../component/Topbar";
//import Button from "@mui/material";
import { useParams } from "react-router-dom";
import { Typography } from "@mui/material";
import useFetch from "../useFetch/page";

export default function SubmitCode() {
  const editorRef = useRef(null);
  const [output, setOutput] = useState("");
  const [inputValue, setInputValue] = useState("");
  const pyodideRef = useRef(null);
  const editorViewRef = useRef(null);
  const { id } = useParams(); // Retrieve the id from URL
  const { error, isPending, data: problems } = useFetch(`http://localhost:3000/problems/${id}`);
  const [randomTestCases, setRandomTestCases] = useState([]);

  // Ensure problems is not null and pick 1/3 random test cases
  useEffect(() => {
    if (problems && problems.testcases && problems.testcases.length > 1) {
      const totalTestCases = problems.testcases.length;
      const numberOfTestCasesToSelect = Math.floor(totalTestCases / 3); // Calculate 1/3 of the total test cases

      // Pick random indices for the 1/3 test cases
      let randomIndices = [];
      while (randomIndices.length < numberOfTestCasesToSelect) {
        const randomIndex = Math.floor(Math.random() * totalTestCases);
        if (!randomIndices.includes(randomIndex)) {
          randomIndices.push(randomIndex);
        }
      }

      // Set the selected test cases to the state
      const selectedTestCases = randomIndices.map(index => problems.testcases[index]);
      setRandomTestCases(selectedTestCases);
    }
  }, [problems]);

  useEffect(() => {
    const loadPyodide = async () => {
      console.log("Loading Pyodide...");
      pyodideRef.current = await window.loadPyodide();
      console.log("Pyodide loaded!");

      pyodideRef.current.runPython(`
        import sys
        from io import StringIO
        sys.stdout = StringIO()

        def input(prompt=''):
            print(prompt, end='')
            return user_input
      `);
    };

    loadPyodide();

    if (editorRef.current) {
      // Create the editor state
      const state = EditorState.create({
        doc: "",
        extensions: [basicSetup, oneDark, python()],
      });

      // Create the editor view and attach it to the DOM
      const view = new EditorView({
        state,
        parent: editorRef.current,
      });

      editorViewRef.current = view;

      return () => view.destroy(); // Clean up when component unmounts
    }
  }, []);

  const submitCode = () => {
    alert('Sent Code Implement On blockchain');
  };

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

  return (
    <>
    <TopBar></TopBar>
    <div className="flex w-full h-full">
      <div className="flex w-1/2 flex-col h-full">
        <div className="text-xl font-bold m-2">Python Code Editor</div>
        <div className="flex flex-col h-full">
          <div ref={editorRef} className="m-4 w-full h-96"></div> {/* Added w-full and h-96 for size */}
          <button
            onClick={runCode}
            className="border w-20 m-4 bg-blue-300 rounded h-10"
          >
            Run Code
          </button>
          <button
            onClick={submitCode}
            className="border w-20 m-4 bg-blue-300 rounded h-10"
          >
            Submit Code
          </button>
          
         
        </div>
        <div>
          {randomTestCases.length > 0 && (
            <>
              <div className="text-xl font-bold m-2">Example Test Cases:</div>
              {randomTestCases.map((testCase, index) => (
                <div key={index}>
                  <div className="text-xl font-bold m-2">Input {index + 1}:</div>
                  <div className="border m-4 p-2 rounded border-black">
                    {testCase.input}
                  </div>
                  <div className="text-xl font-bold m-2">Output {index + 1}:</div>
                  <pre className="border rounded border-black h-full m-4 p-2">
                    {testCase.output}
                  </pre>
                </div>
              ))}
            </>
          )}
        </div>
      </div>
      <div className="flex w-1/2 flex-col">
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
        <div className="pb-12">
          <div className="text-xl font-bold m-2">Output:</div>
          <pre className="border rounded border-black h-full m-4 w-5/6 p-2">
            {output}
          </pre>
        </div>
        {/* <div className="flex flex-row">
          <button className="border w-20 my-4 ml-4 bg-green-400 rounded h-10">
            Approve
          </button>
          <button className="border w-20 my-4 ml-4 bg-red-400 rounded h-10">
            Reject
          </button>
        </div> */}
      </div>
    </div>
    </>
  );
}
