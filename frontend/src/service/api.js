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