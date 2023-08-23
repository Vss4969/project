import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { userRegister } from '../service/api';

export function Register() {
    const [userId, setUserId] = useState('');
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [registrationError, setRegistrationError] = useState(null);

    const navigate = useNavigate();

    const handleSubmit = async (event) => {
        event.preventDefault();

        const payload = { userId, name, email, password };

        try {
            const response = await userRegister(payload);

            if (response.success) {
                // Redirect to login page on successful registration
                navigate('/login');
            }
        } catch (error) {
            console.error('Error during registration:', error.message);

            // Set the specific error message from the API response
            setRegistrationError(error.message);
        }
    };

    return (
        <div className="main-wrapper">
            <h1>Register</h1>
            <form>
                <label htmlFor="name">Full Name:</label>
                <input type="text" id="name" value={name} onChange={(e) => setName(e.target.value)} required />

                <label htmlFor="userId">User Id:</label>
                <input type="text" id="userId" value={userId} onChange={(e) => setUserId(e.target.value)} required/>

                <label htmlFor="email">Email:</label>
                <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} required/>

                <label htmlFor="password">Password:</label>
                <input type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} required/>

                <button onClick={handleSubmit}>Register</button>
            </form>
            {registrationError && (
                <div className="registration-error">
                    <p>{registrationError}</p>
                </div>
            )}
        </div>
    );
}
