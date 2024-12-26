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



// 修改
export const changeEquipment = async () => {
  try {
    const response = await api.get('/change');
    return response.data;
  } catch (error) {
    throw error;
  }
}

// 刪除
export const deleteEquipment = async () => {
  try {
    const response = await api.get('/delete');
    return response.data;
  } catch (error) {
    throw error;
  }
}