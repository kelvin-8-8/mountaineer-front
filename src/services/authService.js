// services/authService.js

import axios from "axios";

const API_BASE_URL = "http://localhost:8080";

export const checkLoginStatus = async () => {
    try {
        const response = await axios.get(`${API_BASE_URL}/user`,
        { withCredentials: true, });
    }
    catch (error) {
        console.error("Error checking login status:", error);
    }
}