import axios from 'axios';
import { useState } from 'react';
import { useAuthContext } from './useAuthContext';

const API_URI = 'http://localhost:8000';

export const useSignup = () => {
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(false); // Initialize isLoading with false
    const { dispatch } = useAuthContext(); 

    const signup = async (userId, name, email, password) => {
        setIsLoading(true);
        setError(null);
        
        try {
            const response = await axios.post(`${API_URI}/user/signup`, { userId, name, email, password }, {
                headers: {'Content-Type': 'application/json'},
            });

            const data = response.data;

            // save the user to local storage
            localStorage.setItem('user', JSON.stringify(data));

            // update the auth context
            dispatch({ type: "LOGIN", payload: data });

            setIsLoading(false);
        } catch (error) {
            setIsLoading(false);
            setError(error.response ? error.response.data.error : 'An error occurred.');
        }
    };

    return { signup, isLoading, error };
};
