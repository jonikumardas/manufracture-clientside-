import React, { useEffect, useState } from 'react';
import AllOrders from './AllOrders';
const Orders = () => {
    const [allorder, setAllOrder] = useState([]);
    // console.log(allorder)
    useEffect(() => {
        fetch('http://localhost:5000/orders')
            .then(res => res.json())
            .then(data => setAllOrder(data));
    }, [])
    return (
        <div>
            <h1 className='text-3xl text-center'> My order Is :{allorder.length}</h1>
            <div class="overflow-x-auto">
                <div class="overflow-x-auto">
                    <table class="table w-full">

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
        </div>
    );
};

export default Orders;