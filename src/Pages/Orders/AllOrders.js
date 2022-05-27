
import React from 'react';
const AllOrders = ({ single }) => {
    const { name, price, quantity, email } = single;
    return (
        <tr>
            <th>{name}</th>
            <td>{quantity}</td>
            <td>{email}</td>
            <td>{price}</td>
        </tr>

    );
};

export default AllOrders;
