import React, { useState } from 'react';
import OrderModal from '../Home/OrderModal';
import Hooks from '../Hooks/Hooks';
import SingleService from './SingleService';

const Services = () => {
    const [secvices] = Hooks();
    const [order, setOrder] = useState(null);
    return (
        <div>
            <h1 className='text-amber-500 text-4xl text-center p-4 font-bold'>Our holl stookd abailable </h1>
            <div className=' grid grid-cols-1 lg:grid-cols-3 gap-4'>

                {
                    secvices.map(service => <SingleService key={service._id}
                        service={service}
                        order={order}
                        setOrder={setOrder}></SingleService>)
                }


            </div>
            {
                order && <OrderModal
                    order={order}></OrderModal>
            }
        </div>
    );
};

export default Services;