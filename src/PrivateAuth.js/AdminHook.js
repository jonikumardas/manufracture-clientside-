import React, { useEffect, useState } from 'react';

const AdminHook = user => {
    const [token, setToken] = useState('');
    useEffect(() => {
        const userEmail = user?.user?.email;
        const currentuser = { email: userEmail }
        if (userEmail) {
            const url = 'http://localhost:5000/email'
            fetch(url, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(currentuser),
            })
                .then(response => response.json())
                .then(data => {
                    console.log('Success:', data);
                })
                .catch((error) => {
                    console.error('Error:', error);
                });
        }
    }, [user])
    return [token]
};

export default AdminHook;



// if (userEmail) {
//     const url = `http://localhost:5000/user${userEmail}`
//     fetch(url, {
//         method: "PUT",
//         headers: {
//             'content-type': 'application/json'
//         },
//         body: JSON.stringify(currentuser)
//     })
//         .then(res => res.json())
//         .then(data => {
//             console.log(data)
//         })
// }
// }, [user])
// return [token]