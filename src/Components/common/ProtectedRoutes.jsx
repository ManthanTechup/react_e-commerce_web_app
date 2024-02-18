import React, { useEffect, useState } from 'react';
import { Navigate } from 'react-router-dom';

function ProtectedRoutes({ Component }) {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    useEffect(() => {
        const checkLoginStatus = async () => {
            const userToken = localStorage.getItem('userToken');
            setIsLoggedIn(userToken !== null);

        };

        checkLoginStatus();

        return () => { };
    }, []);

    return (
        <>
            {isLoggedIn ? <Component /> : <Navigate to="/" replace />}
        </>
    );
}

export default ProtectedRoutes;
