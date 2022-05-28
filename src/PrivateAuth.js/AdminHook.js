import React, { useEffect, useState } from 'react';

const AdminHook = user => {
    const [token, setToken] = useState('');
    useEffect(() => {
        const email = user?.user?.email;
        const activeuser = email;
        if (user) {
            const url = `http://loaclhost:5000/user/${email}`
            fetch(url, {
                method: "PUT",
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringfy(activeuser)
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data)
                })
        }



    }, [user])
    return [token]

};

export default AdminHook;