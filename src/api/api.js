import axios from 'axios';

const axiosInstance = axios.create({
    baseURL: 'https://my.api.mockaroo.com',
    headers: {
        'X-API-Key': '7c1f2420',
    },
});

export const getAllEvents = async () => {
    try {
        const response = await axiosInstance.get(`/event_mockapi`);
        return response.data;
    } catch (error) {
        console.error("Get events error:", error);
        return { error: error.response?.data || "Failed to fetch events" };
    }
};

export const loginUser = async (credentials) => {
    try {
        const response = await axiosInstance.post('/login_mockapi', credentials);
        console.log("Server response:", response.data);

        if (response.data && response.data.error) {
            console.error("Login error:", response.data.error);
            return null;
        }

        return response.data;
    } catch (error) {
        console.error("Login error:", error);
        return null;
    }
};


export const registerUser = async (credentials) => {
    try {
        const response = await axiosInstance.post('/register_mockapi', credentials);
        return response.data;
    } catch (error) {
        console.error("Registration error:", error);
        return { error: error.response?.data || "Failed to register" };
    }
};
