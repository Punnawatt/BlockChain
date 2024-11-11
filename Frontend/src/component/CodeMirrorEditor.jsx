import { useEffect, useRef, useState } from "react";
import { EditorView, basicSetup } from "@codemirror/basic-setup";
import { EditorState } from "@codemirror/state";
import { python } from "@codemirror/lang-python";
import { oneDark } from "@codemirror/theme-one-dark";

export default function CodeMirrorEditor() {
  const editorRef = useRef(null);
  const [output, setOutput] = useState("");
  const pyodideRef = useRef(null);
  const editorViewRef = useRef(null);

  useEffect(() => {
    const loadPyodide = async () => {
      pyodideRef.current = await window.loadPyodide();
      pyodideRef.current.runPython(`
        import sys
        from io import StringIO
        sys.stdout = StringIO()
      `);
    };
    loadPyodide();

    if (editorRef.current) {
      const state = EditorState.create({
        doc: 'print("Hello, World!")',
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
    if (pyodideRef.current) {
      try {
        const code = editorViewRef.current.state.doc.toString();
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
    <div>
      <h1>Python Code Editor</h1>
      <div
        ref={editorRef}
        style={{ border: "1px solid #ccc", padding: "10px" }}
      ></div>
      <button onClick={runCode} style={{ marginTop: "10px" }}>
        Run Code
      </button>
      <div>
        <h3>Output:</h3>
        <pre>{output}</pre>
      </div>
    </div>
  );
}
