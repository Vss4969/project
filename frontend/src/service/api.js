import axios from 'axios';

const API_URL = 'http://localhost:8000';

export const getList = async (data) => {
    try {
        const response = await axios.post(`${API_URL}/list`, data);
        return response.data;
    } catch (error) {
        console.log("Error while calling API", error.message)
    }
};