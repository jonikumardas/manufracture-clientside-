import React from 'react';

const Totalorder = ({ deshorder }) => {
    const { name, price, quantity, email } = deshorder;
    return (
        <div className="overflow-x-auto">
            <table className="table table-zebra w-full">
                <thead>
                    <tr>
                        <th>Product name</th>
                        <th>Quantity</th>
                        <th>Email</th>
                        <th>Price</th>
                    </tr>
                </thead>
                <tbody>
                    <th>{name}</th>
                    <td>{quantity}</td>
                    <td>{email}</td>
                    <td>{price}</td>
                </tbody>
            </table>
        </div>
    );
};

export default Totalorder;