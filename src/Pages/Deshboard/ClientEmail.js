import React from 'react';

const ClientEmail = ({ clientEma }) => {
    console.log(clientEma)
    const { _id, email } = clientEma;
    return (
        <>
            <tbody>

                <tr>
                    <th>1</th>
                    <td>{email}</td>
                    <td><button className='btn btn-success btn-outline'>delate</button></td>
                    <td><button className='btn btn-success btn-outline'>make admin</button> </td>
                </tr>
            </tbody>
        </>

    );
};

export default ClientEmail;