import React, { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import About from './About.jsx'
import Feature from './Feature.jsx'
import Signup from './Signup.jsx'
import NotFound from './NotFound.jsx'
import AppLayout from './AppLayout.jsx'
import Canvas from './Canvas.jsx'
import User from './User.jsx'


import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <App />
      },
      {
        path:"about",
        element:<About/>
      },
      {
        path: "features",
        element: <Feature/>
      },
      {
        path:"signup",
        element:<Signup/>
      },
      {
        path:"canvas",
        element:<Canvas/>
      },
      {
        path:"users",
        element:<User/>
      },
      {
        path:"*",
        element: <NotFound/>
      }
    ]
  }
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);

