import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../Firebase/Firebase.init';

const AdminHook = () => {
    const [user] = useAuthState(auth);
    const [email, setEmail] = useState();
    console.log(email);
    if (user) {
        setEmail(user.email)
    }

};

export default AdminHook;