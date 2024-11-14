import React from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider, Route } from "react-router-dom";
import MyApp from "./MyApp.jsx";
import Home from "./component/Home.jsx";
import About from "./component/About.jsx";

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <MyApp />, // Base layout component
//     children: [
//       {
//         path: "Home",
//         element: <Home />,
//       },
//       {
//         path: "About",
//         element: <About />,
//       },
//     ],
//   },
// ]);
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "Home",
    element: <Home />,
  },
  {
    path: "About",
    element: <About />,
  },
  // Add more routes here as needed
]);

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
