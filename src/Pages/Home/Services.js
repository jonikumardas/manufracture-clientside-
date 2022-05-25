import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Hooks from '../Hooks/Hooks';
import OrderModal from './OrderModal';
import Secervice from './Secervice';
const Services = () => {
    const [secvices] = Hooks();
    const [order, setOrder] = useState(null);
    if (secvices) {
        secvices.length = 3;
    }
    console.log(order);
    return (
        <div>
            <hr />
            <p className='text-amber-500 text-4xl text-center p-4 font-bold'>Our Exclusive tools Service</p>
            <div className=' grid grid-cols-1 lg:grid-cols-3 gap-4'>
                {
                    secvices.map(secvice => <Secervice key={secvice._id}
                        secvice={secvice}
                        setOrder={setOrder}
                    ></Secervice>)
                }
            </div>
            <p className='text-center btn-outline btn-success pb-2 my-5 font-bold'><Link to="/services">To see more ..... </Link></p>

            <hr />
            {
                order && <OrderModal
                    order={order}
                    setOrder={setOrder}
                >
                </OrderModal>
            }
        </div>
    );
};

export default Services;