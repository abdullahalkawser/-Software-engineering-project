import React from 'react';
import Header from '../sheard/Header/Header';
import Navber from '../sheard/navber/Naveber';
import RightSideNaveBer from '../sheard/RightNavber.jsx/RightSideNaveBer';
import LeftSideNaveBer from '../sheard/leftNavber/leftsidenavber';
import BrekingNews from './brekingnrws';


const Home = () => {
    return (
        <div>
          
            <Header></Header>
            <BrekingNews></BrekingNews>
            <Navber></Navber>
            

            {/* news section */}

            <div className='grid grid-cols-1 lg:grid-cols-4 gap-6'>

                <div>
                    <RightSideNaveBer></RightSideNaveBer>
                </div>
                <div className='col-span-2 border'>
                    <h2>this text news area</h2>
                </div>
                <div className='border'>
                    <LeftSideNaveBer></LeftSideNaveBer>
           
                </div>
            </div>


        </div>
    );
};

export default Home;