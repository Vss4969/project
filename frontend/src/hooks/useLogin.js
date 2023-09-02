import axios from 'axios';
import { useState } from 'react';
import { useAuthContext } from './useAuthContext';

const API_URI = 'http://localhost:8000';

export const useLogin = () => {
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(false); // Initialize isLoading with false
    const { dispatch } = useAuthContext(); 

    const login = async (userId, password) => {
        setIsLoading(true);
        setError(null);
        
        try {
            const response = await axios.post(`${API_URI}/user/login`, { userId, password }, {
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

    return { login, isLoading, error };
};
