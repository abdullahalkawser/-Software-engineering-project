import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Main from './Componant/main/main';
import Home from './Componant/Home/home';
import Login from './Componant/Login/login';
import GitLogin from './Componant/Login/Gitlogin';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,

    children: [
      {
        path: "/",
        element:<Home></Home>
      },
      // {
      //   path: "/login",
      //   element:<Login></Login>
      // },
      {
        path: "/login",
        element:<GitLogin></GitLogin>
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <RouterProvider router={router} />
  </React.StrictMode>,
)
