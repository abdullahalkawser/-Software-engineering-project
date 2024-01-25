import React, { useState } from 'react';
import Rounting from './componants/Routeer/Routing';
import { IoMdMenu } from "react-icons/io";
import { RxCross1 } from "react-icons/rx";
import Priceing from './componants/priceing/Price';
import LineCgart from './componants/lineChart/LineChart';

const App = () => {
const routes = [
  { id :1, path:'/', name: 'Home'},
  { id :2, path:'/about', name: 'about'},
  { id :3, path:'/service', name: 'service'},
  { id :4, path:'/contract', name: 'contract'},
  { id :5, path:'*', name: 'No found'}

]
// state 
const [open,setOpen]=useState(false)

  
  return (
    <div>
      <div className='md:hidden' onClick={()=> setOpen(!open)}>
        {
          open === true ? <RxCross1 /> :     <IoMdMenu />
        }


      </div>
  <ul  className={`md:flex  gap-10 duration-1000 absolute md:static
  ${open ? 'top-5' : '-top-60'}
  bg-fuchsia-700 px-10 
  `}>
    {
      routes.map(route => <Rounting route={route}></Rounting>)
    }
  </ul>
  <br />

  <div>
  <h2 className='text-5xl text-center mb-10'>Pricing Options</h2>
    <Priceing></Priceing>
  </div>
  <LineCgart></LineCgart>
    </div>
  );
};

export default App;