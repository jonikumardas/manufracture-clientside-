
import React from 'react';

const AllOrders = ({ single }) => {
    console.log(single);
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

// import React from 'react';
// const Order = ({ order }) => {
//     const { name, quantity, email, total } = order;
//     return (
//         <div>
//             <div class="overflow-x-auto">
//                 <table class="table table-zebra sm:w-50 w-full">
//                     <thead>
//                         <tr>
//                             <th></th>
//                             <th>Product ame</th>
//                             <th>Quantity</th>
//                             <th>Price</th>
//                         </tr>
//                     </thead>
//                     <tbody>

//                         <tr>
//                             <th>{name}</th>
//                             <td>{quantity}</td>
//                             <td>{email}</td>
//                             <td>{total}</td>
//                         </tr>
//                     </tbody>
//                 </table>
//             </div>
//         </div>
//     );
// };

// export default Order;