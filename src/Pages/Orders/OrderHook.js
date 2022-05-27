import React, { useEffect, useState } from 'react';

const OrderHook = () => {
    const [allorder, setAllOrder] = useState([]);
    // console.log(allorder)
    useEffect(() => {
        fetch('http://localhost:5000/orders')
            .then(res => res.json())
            .then(data => setAllOrder(data));
    }, [allorder])

    return [allorder, setAllOrder];
};

export default OrderHook;