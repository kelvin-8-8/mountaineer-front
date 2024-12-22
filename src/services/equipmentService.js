
import { API_BASE_URL, api } from "../config/api";


// 取得所有裝備
export const allEquipment = async () => {
    try {
      const response = await api.get('/equip');
      return response.data;
    } catch (error) {
      throw error;
    }
  }