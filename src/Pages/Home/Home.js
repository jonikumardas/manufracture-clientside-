import React from 'react';
import Banner from './Banner';
import Business from './Business';
import Extrasection from './Extrasection';
import Fotter from './Fotter';
import NewstReview from './NewstReview';
import Revew from './Revew';
import Services from './Services';

const Home = () => {
    return (
        <div className='mx-3'>
            <Banner></Banner>
            <Services></Services>
            <Revew></Revew>
            <NewstReview></NewstReview>
            <Business></Business>
            <Extrasection></Extrasection>
            <Fotter></Fotter>
        </div>
    );
};

export default Home;