import { useEffect, useRef, useState } from "react";
import { EditorView, basicSetup } from "@codemirror/basic-setup";
import { EditorState } from "@codemirror/state";
import { python } from "@codemirror/lang-python";
import { oneDark } from "@codemirror/theme-one-dark";

export default function CodeMirrorEditor() {
  const editorRef = useRef(null);
  const [output, setOutput] = useState("");
  const [inputValue, setInputValue] = useState("");
  const pyodideRef = useRef(null);
  const editorViewRef = useRef(null);

  let testInput = "1 2 3 4 5 6 7 8 9 10";
  let testOutput = "55";

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

    if (editorRef.current) {
      const state = EditorState.create({
        doc: "num = [int(e) for e in input().split()]\nans = sum(num)\nprint(ans)",
        extensions: [basicSetup, oneDark, python()],
      });

      const view = new EditorView({
        state,
        parent: editorRef.current,
      });

      editorViewRef.current = view;

      return () => view.destroy();
    }
  }, []);

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
    <div className="flex w-full h-full">
      <div className="flex w-1/2 flex-col h-full">
        <div className="text-xl font-bold m-2">Python Code Editor</div>
        <div className="flex flex-col h-full">
          <div ref={editorRef} className="m-4"></div>
          <button
            onClick={runCode}
            className="border w-20 m-4 bg-blue-300 rounded h-10"
          >
            Run Code
          </button>
        </div>
        <div>
          <div className="text-xl font-bold m-2">Example Test Case:</div>
          <div>
            <div className="text-xl font-bold m-2">Input:</div>
            <div className="border m-4 p-2 rounded border-black">
              {testInput}
            </div>
          </div>
          <div>
            <div className="text-xl font-bold m-2">Output:</div>
            <pre className="border rounded border-black h-full m-4 p-2">
              {testOutput}
            </pre>
          </div>
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
        <div className="flex flex-row">
          <button className="border w-20 my-4 ml-4 bg-green-400 rounded h-10">
            Approve
          </button>
          <button className="border w-20 my-4 ml-4 bg-red-400 rounded h-10">
            Reject
          </button>
        </div>
      </div>
    </div>
  );
}
