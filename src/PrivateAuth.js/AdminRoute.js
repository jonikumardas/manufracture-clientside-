import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Navigate, useLocation } from 'react-router-dom';
import auth from '../Firebase/Firebase.init';

const AdminRoute = ({ children }) => {
    // const [user, loading, error] = useAuthState(auth);
    const location = useLocation();
    const admin = true;
    if (!admin) {
        return <Navigate to="/home" state={{ from: location }} replace />;
    }

    return children;
};

export default AdminRoute;