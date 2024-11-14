// import React from 'react';
// import ReactDOM from 'react-dom';
import React from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider, Route } from "react-router-dom";
//import './index.css';
//import App from './App';
//import Test from './Test';
import HomePage from "./module/HomePage/page";
import Home from "./module/Home/page";
import CreateBlog from "./module/CreateBlog/page";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },

  {
    path: "/create",
    element: <CreateBlog />,
  },
]);
createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
