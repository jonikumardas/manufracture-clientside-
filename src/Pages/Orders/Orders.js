import React, { useEffect, useState } from 'react';
import Myorder from '../Deshboard/Myorder';
import AllOrders from './AllOrders';
import OrderHook from './OrderHook';
const Orders = () => {
    const [allorder, setAllOrder] = OrderHook();
    return (
        <div className='mt-5'>
            <h1 className='text-3xl text-center'> My order Is :{allorder.length}</h1>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th>Product name</th>
                            <th>Quantity</th>
                            <th>Email</th>
                            <th>Price</th>
                        </tr>
                    </thead>
                    <tbody>

                        {
                            allorder.map(single => <AllOrders key={single._id}
                                single={single}
                            ></AllOrders>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Orders;