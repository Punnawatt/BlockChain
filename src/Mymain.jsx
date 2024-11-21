import React from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { WalletProvider } from "./module/WalletContext/page.jsx";
import HomePage from "./module/HomePage/page.jsx";
import CreateProblem from "./module/CreateProblem/page.jsx";
import SubmitCode from "./module/SubmitCode/page.jsx";
import Grader from "./module/Grader/page.jsx";
import ProblemDetail from "./module/ProblemDetail/page.jsx";
import GraderHome from "./module/GraderHome/page.jsx";
import GraderDetail from "./module/GraderDetail/page.jsx";
import "./index.css";

// Define routes
const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/problems",
    element: <HomePage />,
  },
  {
    path: "/CreateProblem",
    element: <CreateProblem />,
  },
  {
    path: "/graderhome",
    element: <GraderHome />,
  },
  {
    path: "/grader",
    element: <Grader />,
  },
  {
    path: "/graders/:id",
    element: <GraderDetail />,
  },
  {
    path: "/problems/:id",
    element: <ProblemDetail />,
  },
  {
    path: "/problems/submit/:id",
    element: <SubmitCode />,
  },
]);

// Render application
createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <WalletProvider>
      {" "}
      {/* Wrap with WalletProvider */}
      <RouterProvider router={router} />
    </WalletProvider>
  </React.StrictMode>
);
