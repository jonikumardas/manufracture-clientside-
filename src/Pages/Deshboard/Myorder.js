import React from 'react';
import OrderHook from '../Orders/OrderHook';
import Myorders from './Myorders';
import Totalorder from './Totalorder';
const Myorder = () => {
    const [allorder, setAllOrder] = OrderHook();
    return (
        <div>
            <h1 className='text-3xl text-center my-2'> My order</h1>

            {
                allorder.map(deshorder => < Totalorder deshorder={deshorder} />)

            }
        </div>
    );
};

export default Myorder;