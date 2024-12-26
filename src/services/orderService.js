import { API_BASE_URL, api } from "../config/api";

export const addOrder = async (orderRequest) => {
    try {
        const response = await api.post("/order/checkout", orderRequest)
        return response.data;
    } catch (error) {
        console.error("Error in addOrder:", error.response?.data || error.message);
        throw error;
    }
}

export const getAll = async () => {
    try {
        const response = await api.get("/order/all")
        return response.data;
    } catch (error) {
        console.error("Error in getAllOrder:", error.response?.data || error.message);
        throw error;
    }
}