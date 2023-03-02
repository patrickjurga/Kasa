import React from 'react';
import ReactDOM from 'react-dom/client';
import {createBrowserRouter, RouterProvider,} from "react-router-dom";
import Home from './pages/Home/Home';
import About from './pages/About/About';
import ErrorPage from "./pages/Error/Error";
import Apartment from './pages/Apartment/Apartment';
import "./styles/index.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/about",
    element: <About />
  },
  {
    path: "/Apartment/:id",
    element: <Apartment />
  }
])

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);