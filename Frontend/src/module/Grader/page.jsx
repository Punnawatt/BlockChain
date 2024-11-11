import CodeMirrorEditor from "../../component/CodeMirrorEditor";

export default function Grader() {
  return (
    <div className="flex flex-row w-screen">
      <div className="w-1/2">
        Code Editor
        <CodeMirrorEditor />
      </div>
    </div>
  );
}
