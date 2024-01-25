import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./componant/root/root.jsx";
import Home from "./componant/Home/Home.jsx";
import SingUp from "./componant/singup/singup.jsx";
import Login from "./componant/Login/login.jsx";
import Provider from "../../../MohamilonAuth/my-app/src/componanats/Provider.jsx";



const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,

    children: [
      {
        path: "/Home",
        element: <Home></Home>,
      },
      {
        path: "/Login",
        element: <Login></Login>,
      },
      {
        path: "/Register",
        element: <SingUp></SingUp>,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
