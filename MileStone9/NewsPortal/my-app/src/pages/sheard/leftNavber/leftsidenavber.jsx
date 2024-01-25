import React from "react";
import { FaFacebook, FaGithub, FaGoogle, FaInstagram, FaTwitter } from "react-icons/fa";

import pic1 from '../../../assets/qZone1.png';
import pic2 from '../../../assets/qZone2.png';
import pic3 from '../../../assets/qZone3.png';
import pic4 from '../../../assets/bg.png';

const LeftSideNaveBer = () => {
    const backgroundStyles = {
        backgroundImage: `url(${pic4})`,
    
      };

  return (
    <div>
      <div className="p-4 space-y-3">
        <h2 className="text-2xl">Login With</h2>
        <button className="btn btn-outline w-full">
          <FaGoogle></FaGoogle>
          Google
        </button>
        <button className="btn btn-outline w-full">
          <FaGithub></FaGithub>
          Github
        </button>
      </div>
      {/* 
            find us */}

      <div className="p-4 ">
        <h2 className="text-3xl">Find Us on</h2>
        <a  className = ' p-4  flex items-center border rounded-t-lg' href=""> <FaInstagram className="mr-2"></FaInstagram>
       
        <span> Instagram</span>
        
        </a>
        <a  className = ' p-4 flex items-center border-x' href=""> <FaTwitter className="mr-2"></FaTwitter>
        <span>Twitter</span>
        
        </a>
        <a  className = 'p-4 flex items-center border rounded-b-lg' href=""> <FaFacebook className="mr-2"></FaFacebook>
        <span>Facebook</span>
        
        </a>
        
      

      </div>

      {/* Q-zone */}
      <div className="p-4 space-y-3">
        <h2 className="text-2xl">Q-Zone</h2>
        <img src={pic1} alt="" />
        <img src={pic2} alt="" />
        <img src={pic3} alt="" />
    
      </div>

      <div className="p-10 space-y-4 text-center" style={backgroundStyles}>
      <h2 className="text-2xl text-slate-50">Create an Amazing Newspaper</h2>
      <p className=" text-slate-100">Discover thousands of options, easy to customize layouts, one-click to import demo and much more.</p>
      <button className="btn btn-success">Learn More</button>
    hiii
    </div>





    </div>
  );
};

export default LeftSideNaveBer;
