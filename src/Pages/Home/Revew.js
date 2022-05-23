import React from 'react';
import ClientRevew from './ClientRevew';
import img1 from '../../assats/revew/autor1.jpg';
import img2 from '../../assats/revew/autor2.jpg';
import img3 from '../../assats/revew/author3.jpg';

const Revew = () => {
    const revews = [
        {
            id: 1,
            name: "Rawdi Rattur",
            about: "I a very setisfy servive quality is awesome and outstanding product",
            image: `${img1}`,
        },
        {
            id: 2,
            name: "Petter",
            about: "Service quality is setisfy me  awesome and outstanding product",
            image: `${img2}`,
        },
        {
            id: 3,
            name: "Angey le",
            about: " Outstanding product and something spacial extra carrig setisfing all ",
            image: `${img3}`,
        },

    ]
    return (
        <div className='mt-10'>
            <h1 className='text-amber-500 text-4xl text-center p-4 pb-5 font-bold'>Our client revews</h1>
            <div className='grid grid-cols-1 lg:grid-cols-3 gap-4'>
                {
                    revews.map(revew => <ClientRevew key={revew.id}
                        revew={revew}></ClientRevew>)
                }
            </div>
            <hr />
        </div>
    );
};

export default Revew;