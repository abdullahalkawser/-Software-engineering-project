import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import Root from './componanats/Root/Root.jsx';
import Home from './componanats/Home/Home.jsx';
import Stataric from './componanats/Routingfile/Statics.jsx';
import Jobdetails from './componanats/FetureJob/JobDetail.jsx';
import AppliedJob from './componanats/AplitedJob/Applidjob.jsx';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
   
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
    
      {
        path: "/Applied",
        element: <AppliedJob></AppliedJob>,
        loader:()=> fetch(`/jobs.json`) // waring onliy load adata you need
      },
      {
        path: "/Statites",
        element: <Stataric></Stataric>,
      },
      {
        path: "/job/:id",

        element: <Jobdetails></Jobdetails>,
        loader:()=> fetch(`/jobs.json`)
      },

    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
