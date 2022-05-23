import React from 'react';
import Banner from './Banner';
import Business from './Business';
import Extrasection from './Extrasection';
import Fotter from './Fotter';
import Revew from './Revew';
import Services from './Services';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Services></Services>
            <Revew></Revew>
            <Business></Business>
            <Extrasection></Extrasection>
            <Fotter></Fotter>
        </div>
    );
};

export default Home;