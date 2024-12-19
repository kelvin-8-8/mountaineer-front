// services/authService.js
import {API_BASE_URL, api} from "../config/api";

// 確認是否登入
export const isLogin = async () => {
  try {
    const response = await api.get('/auth/check');
    return response.data;
  } catch (error) {
    throw error;
  }
}

export const checkRole = async () => {
  try {
    const response = await api.get('/auth/role');
    return response.data;
  } catch (error) {
    throw error;
  }
}

// 登入
export const login = async (username, password) => {
    // 以後端 return ResponseEntity.status(403).body(ApiResponse.error(403, "登入失敗")); 為例
    // error.response.status = 403
    // error.response.data = { status: 403, message: "登入失敗", data: null}
    try {
        const response = await api.post(`/auth/login`, 
            { username, password } );
        return response.data;
    }
    catch (error) {
        if (error.response) {
            throw error.response.data;
        }
        console.log(error);
        throw(error);
    }
}

// 登出
export const logout = async () => {
    try {
        const response = await api.get('/auth/logout');
        return response.data;
    } catch (error) {
        throw error;
    }
}

// 註冊
export const register = async (username, password, email) => {
    try {
      const response = await axiosInstance.post('/register', {
        username,
        password,
        email
      });
      return response.data;
    } catch (error) {
      if (error.response) {
        throw error.response.data;
      }
      throw error;
    }
  };