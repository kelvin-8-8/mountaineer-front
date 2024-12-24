
import { API_BASE_URL, api } from "../config/api";


// 取得所有裝備
export const getAllEquipment = async () => {
    try {
      const response = await api.get('/equip');
      return response.data;
    } catch (error) {
      throw error;
    }
  }

export const changeProfile = async (username, trueName, email, password, newPassword) => {
    try {
        const response = await api.post("/change", {
            username,
            password,
            trueName,
            email,
            newPassword,
        });
        return response.data;
    } catch (error) {
      // （?.）鏈結運算符
      // 伺服器有回應使用 error.response.data ; 沒有回應使用 error.message(axios提供)
        console.error("Error in changeProfile:", error.response?.data || error.message);
        throw error;
    }
};

export const addOrder = async (orderRequest) => {
  try {
    const response = await api.post("/checkout", {orderRequest})
    return response.data;
  } catch (error) {
    console.error("Error in addOrder:", error.response?.data || error.message);
    throw error;
  }
}