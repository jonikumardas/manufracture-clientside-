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
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQIbfDzNPtnPQF6u02N9c4z9QvRUPlIFGu91A&usqp=CAU",
        },
        {
            id: 2,
            name: "Petter",
            about: "Service quality is setisfy me  awesome and outstanding product",
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYH_VDaGfxQ_cPhkgDPyoxXJgnnKHzEw7kdg&usqp=CAU",
        },
        {
            id: 3,
            name: "Angey le",
            about: " Outstanding product and something spacial extra carrig setisfing all ",
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfTxm162UJ9zWAc5SneLPzsEJ6S6JhU-tU4g&usqp=CAU",
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
                <div style={{ boxShadow: "0px 4px 24px 1px rgba(0, 0, 0, 0.28)", backdropFilter: "blur(5px)" }} className="stat place-items-center ">
                    <div className="stat-title text-lime-500 font-bold">Downloads</div>
                    <div className="stat-value text-amber-500 font-bold">31K</div>
                    <div className="stat-desc text-lime-500 font-bold">From January 1st to February 1st</div>
                </div>

                <div style={{ boxShadow: "0px 4px 24px 1px rgba(0, 0, 0, 0.28)", backdropFilter: "blur(5px)" }} className="stat place-items-center">
                    <div className="stat-title text-lime-500 font-bold ">Users</div>
                    <div className="stat-value  text-amber-500 font-bold">4,200</div>
                    <div className="stat-desc text-lime-500 font-bold">↗︎ 40 (2%)</div>
                </div>

                <div style={{ boxShadow: "0px 4px 24px 1px rgba(0, 0, 0, 0.28)", backdropFilter: "blur(5px)" }} className="stat place-items-center">
                    <div className="stat-title text-lime-500 font-bold">New Registers</div>
                    <div className="stat-value text-amber-500 font-bold">1,200</div>
                    <div className="stat-desc text-amber-500 font-bold">↘︎ 90 (14%)</div>
                </div>
            </div>

            <hr />
        </div>
    );
};

export default Revew;