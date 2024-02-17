import React, { useEffect, useState } from 'react';
import { Navigate } from 'react-router-dom';

function ProtectedRoutes({ component: Component }) {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    useEffect(() => {
        const checkLoginStatus = async () => {
            try {
                const userToken = localStorage.getItem('userToken');
                setIsLoggedIn(userToken !== null);
            } catch (error) {
                console.error('Error checking login status:', error);
                setIsLoggedIn(false);
            }
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
