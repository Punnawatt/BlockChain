import React from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider, Route } from 'react-router-dom';
//import MyApp from './MyApp.jsx';

import HomePage from './module/HomePage/page.jsx';
import CreateProblem from './module/CreateProblem/page.jsx';
import SubmitCode from './module/SubmitCode/page.jsx';
import Grader from './module/Grader/page.jsx';
import './index.css';
//import ProblemDetail from './module/ProblemDetail/page.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage/>,
  },
  {
    path: "/HomePage",
    element: <HomePage/>,
  },
  {
    path: "/CreateProblem",
    element: <CreateProblem/>,
  },
  {
    path: "/SubmitCode",
    element: <SubmitCode/>,
  },
  {
    path: "grader",
    element: <Grader />
  }
  }
  // {
  //   path: "/problem/:id",
  //   element: <ProblemDetail/>,
  // },
  
  
  // Add more routes here as needed
]);

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
