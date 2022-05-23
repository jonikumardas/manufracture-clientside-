import React from 'react';
import { Link } from 'react-router-dom';
import Hooks from '../Hooks/Hooks';
import Secervice from './Secervice';
const Services = () => {
    const [secvices] = Hooks();
    // console.log(secvices);
    if (secvices) {
        secvices.length = 6;
    }
    return (
        <div>
            <hr />
            <p className='text-amber-500 text-4xl text-center p-4 font-bold'>Our Exclusive tools Service</p>
            <div className=' grid grid-cols-1 lg:grid-cols-3 gap-4'>
                {
                    secvices.map(secvice => <Secervice key={secvice._id}
                        secvice={secvice}
                    ></Secervice>)
                }
            </div>
            <p className='text-center btn-outline btn-success'><Link to="/service my-5">To see more ..... </Link></p>


        </div>
    );
};

export default Services;