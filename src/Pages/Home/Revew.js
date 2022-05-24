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
            <h1 className='text-center m-3 text-2xl text-amber-500 font-bold'>Our Prgress </h1>
            <div className='grid grid-cols-1 lg:grid-cols-3 gap-4 my-9'>
                <div style={{ boxShadow: "0px 4px 24px 1px rgba(0, 0, 0, 0.28)", backdropFilter: "blur(5px)" }} class="stat place-items-center ">
                    <div class="stat-title text-lime-500 font-bold">Downloads</div>
                    <div class="stat-value text-amber-500 font-bold">31K</div>
                    <div class="stat-desc text-lime-500 font-bold">From January 1st to February 1st</div>
                </div>

                <div style={{ boxShadow: "0px 4px 24px 1px rgba(0, 0, 0, 0.28)", backdropFilter: "blur(5px)" }} class="stat place-items-center">
                    <div class="stat-title text-lime-500 font-bold ">Users</div>
                    <div class="stat-value  text-amber-500 font-bold">4,200</div>
                    <div class="stat-desc text-lime-500 font-bold">↗︎ 40 (2%)</div>
                </div>

                <div style={{ boxShadow: "0px 4px 24px 1px rgba(0, 0, 0, 0.28)", backdropFilter: "blur(5px)" }} class="stat place-items-center">
                    <div class="stat-title text-lime-500 font-bold">New Registers</div>
                    <div class="stat-value text-amber-500 font-bold">1,200</div>
                    <div class="stat-desc text-amber-500 font-bold">↘︎ 90 (14%)</div>
                </div>
            </div>

            <hr />
        </div>
    );
};

export default Revew;