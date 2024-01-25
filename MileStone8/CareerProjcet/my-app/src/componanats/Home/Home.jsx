import React from 'react';
import Banner from '../bannner/banner';
import FetureJob from '../FetureJob/FeatureJob';
import Catagorys from '../catagri/catagori';

const Home = () => {
    return (
        <div>
         <Banner></Banner>
         <Catagorys></Catagorys>
         <FetureJob></FetureJob>
        </div>
    );
};

export default Home;