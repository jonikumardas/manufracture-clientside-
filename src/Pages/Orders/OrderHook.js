import React, { useEffect, useState } from 'react';

const OrderHook = () => {
    const [allorder, setAllOrder] = useState([]);
    // console.log(allorder)
    useEffect(() => {
        fetch('https://ancient-scrubland-61244.herokuapp.com/orders')
            .then(res => res.json())
            .then(data => setAllOrder(data));
    }, [allorder])

    return [allorder, setAllOrder];
};

export default OrderHook;