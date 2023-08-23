import axios from 'axios';

const API_URI = 'http://localhost:8000';

export const getList = async (req, res) => {
    try {
        const response = await axios.get(`${API_URI}/list`);
        return response.data;
    } catch (error) {
        console.log("Error while calling APIi", error.message);
    }
};

export const getProblemDetails = async (problemId) => {
    try {
        console.log("problemId: ", problemId);
        const response = await axios.get(`${API_URI}/problem/${problemId}`);
        return response.data;
    } catch (error) {
        console.log("Error while calling APIp", error.message);
    }
};

export const submitCode = async (payload) => {
    try {
        console.log("payload: ", payload);        
        const response = await axios.post(`${API_URI}/submit`, payload);
        console.log("response: ", response);
        return response.data;
    } catch (error) {
        console.log("Error while calling APIs", error.message);
    }
}

export const runCode = async (payload) => {
    try {
        const response = await axios.post(`${API_URI}/run`, payload);
        return response.data;
    } catch (error) {
        console.log("Error while calling APIr", error.message);
    }
}

export const userRegister = async (payload) => {
    try {
        console.log("userRegister payload: ", payload);
        const response = await axios.post(`${API_URI}/register`, payload);
        return response.data;
    } catch (error) {
        if (error.response) {
            throw new Error(error.response.data.error); // Throw the error message from the API response
        } else {
            throw new Error("Network error. Unable to connect to the server.");
        }
    }
};

export const userLogin = async (payload) => {
    try {
        console.log("userRegister payload: ", payload);
        const response = await axios.post(`${API_URI}/login`, payload);
        return response.data;
    } catch (error) {
        if (error.response) {
            throw new Error(error.response.data.error); // Throw the error message from the API response
        } else {
            throw new Error("Network error. Unable to connect to the server.");
        }
    }
};

export const checkAuth = async () => {
    try {
        const response = await axios.post(`${API_URI}/checkAuth`);
        return response.data;
    } catch (error) {
        console.log("Error while checking authentication", error.message);
    }
};

