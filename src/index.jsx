import React from 'react';
import ReactDOM from 'react-dom/client';
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import Home from './pages/Home/Home';
import About from './pages/About/About';
import ErrorPage from "./pages/Error/Error";
import Apartment from './pages/Apartment/Apartment';
import "./assets/styles/index.css";

const router = createBrowserRouter([ // fonction qui crée un objet de routage contenant toutes les routes
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/home",
    element: <Home />,
  },
  {
    path: "/about",
    element: <About />
  },
  {
    path: "/Apartment/:id",
    element: <Apartment />
  },
  {
    path: "*",
    element: <ErrorPage />
  }
])

ReactDOM.createRoot(document.getElementById("root")).render( // Crée un point d'entrée dans l'arbre DOM en utilisant la méthode createRoot de ReactDOM
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

 // composant qui sert à gérer le routage dans notre application React