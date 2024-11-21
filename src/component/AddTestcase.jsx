import React, { useState } from "react";
import TodoItem from "./Todoitem";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box"; // Added import for Box component

function AddTestcase() {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      inputcase: "Doctor Appointment",
      outputcase: "OOOOO",
    },
    {
      id: 2,
      inputcase: "Meeting at School",
      outputcase: 111,
    },
  ]);

  const [inputcase, setInputcase] = useState("");
  const [outputcase, setOutputcase] = useState("");
  const [hover, setHover] = useState(false);

  function onMouseAction(event) {
    setHover(event.type === "mouseover");
  }

  function addTask() {
    if (inputcase.trim() === "" || outputcase.trim() === "") return;
    const newTask = {
      id: Date.now(),
      inputcase,
      outputcase,
    };
    setTasks([...tasks, newTask]);
    setInputcase("");
    setOutputcase("");
  }

  function deleteTask(id) {
    setTasks(tasks.filter((task) => task.id !== id));
  }

  return (
    <Box
      sx={{
        width: "100vw",
        maxWidth: "600px",
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
      <Typography variant="h6" gutterBottom sx={{ alignSelf: "flex-start" }}>
        Add Your Testcase
      </Typography>
      <div className="testcase-list" style={{ width: "100%" }}>
        {tasks.map((task) => (
          <TodoItem key={task.id} task={task} deleteTask={deleteTask} />
        ))}
        <Typography gutterBottom sx={{ alignSelf: "flex-start", mt: 2 }}>
          Input
        </Typography>
        <textarea
          value={inputcase}
          onChange={(e) => setInputcase(e.target.value)}
          rows="2"
          style={{
            width: "100%",
            padding: "8px",
            fontSize: "16px",
            resize: "vertical",
          }}
        />
        <Typography gutterBottom sx={{ alignSelf: "flex-start" }}>
          Output
        </Typography>
        <textarea
          value={outputcase}
          onChange={(e) => setOutputcase(e.target.value)}
          rows="2"
          style={{
            width: "100%",
            padding: "8px",
            fontSize: "16px",
            resize: "vertical",
          }}
        />
        <button
          onClick={addTask}
          style={{
            marginTop: "16px",
            padding: "10px 20px",
            fontSize: "16px",
            border: "2px solid black",
            boxShadow: "5px 4px #472F05",
            backgroundColor: hover ? "#ff3333" : "#F3DDD1",
            cursor: hover ? "pointer" : "default",
          }}
          onMouseOver={onMouseAction}
          onMouseOut={onMouseAction}
        >
          Add
        </button>
      </div>
    </Box>
  );
}

export default AddTestcase;
