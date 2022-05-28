import React from 'react';
import HooksEmail from '../../Firebase/HooksEmail';
import ClientEmail from './ClientEmail';

const Allclient = () => {
    const [clientEmil, setClientEmil] = HooksEmail();
    // console.log(clientEmil);
    return (
        <div>
            <h1 className='text-4xl text-center text-amber-500 p-5 font-bold'>My all client here </h1>


        </div>
    );
};

export default Allclient;