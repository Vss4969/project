import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { userLogin, checkAuth } from '../service/api';

export function Login() {
    const [userId, setuserId] = useState('');
    const [password, setPassword] = useState('');
    const [loginError, setLoginError] = useState(null);
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const navigate = useNavigate();

    // Check if the user is already logged in when they visit the login page
    useEffect(() => {
        async function checkLoggedIn() {
            try {
                const response = await checkAuth();
                console.log(response);
                if (response.success) {
                    // Redirect to home page if session is live
                    setIsLoggedIn(true);
                }
            } catch (error) {
                console.error('Error while checking authentication:', error.message);
            }
        };
        checkLoggedIn();
    }, [navigate]);

    if (isLoggedIn) {
        navigate('/');
    }

    const handleSubmit = async (event) => {
        event.preventDefault();

        const payload = { userId, password };

        try {
            const response = await userLogin(payload);

            if (response.success) {
                // Redirect to home page on successful login
                navigate('/');
            }
        } catch (error) {
            console.error('Error during login:', error.message);

            // Set the specific error message from the API response
            setLoginError(error.message);
        }
    }

    return (
        <div className="main-wrapper">
            <h1>Login</h1>
            <form>
                <label htmlFor="userId">User Id:</label>
                <input type="text" id="userId" value={userId} onChange={(e) => setuserId(e.target.value)} required
                />

                <label htmlFor="password">Password:</label>
                <input type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} required
                />

            <button onClick={handleSubmit}>Login</button>    
            </form>
            {loginError && (
                <div className="login-error">
                    <p>{loginError}</p>
                </div>
            )}
        </div>
    );
}
