import React from 'react';
import Banner from './Banner';
import Business from './Business';
import Extrasection from './Extrasection';
import Fotter from './Fotter';
import LetestProduct from './LetestProduct';
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
            <LetestProduct></LetestProduct>
            <Business></Business>
            <Extrasection></Extrasection>
            <Fotter></Fotter>
        </div>
    );
};

export default Home;