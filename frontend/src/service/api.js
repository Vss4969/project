import axios from 'axios';

const API_URI = 'http://localhost:8000';

export const getList = async (req, res) => {
    try {
        const response = await axios.get(`${API_URI}/list`);
        return response.data;
    } catch (error) {
        console.log("Error while calling APIi", error.message)
    }
};