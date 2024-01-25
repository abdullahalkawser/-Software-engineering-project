import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './componanats/root.jsx';
import Home from './componanats/home.jsx';
import Login from './componanats/Login.jsx';
import Signup from './componanats/Registar.jsx';
import Provider from './provider/Provider.jsx';
import Order from './componanats/Order.jsx';
import PrivateRoute from './route/privateRoute.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,

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
        element: <Signup></Signup>,
      },
      {
        path: "/ordar",
        element: <PrivateRoute><Order></Order></PrivateRoute>,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
<Provider>
<RouterProvider router={router} />
</Provider>
  </React.StrictMode>,
)
