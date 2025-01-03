import React, { useEffect, useState } from 'react'
import { logout } from '../services/authService';

export default function LogoutButton( {updateAuthState} ) {
    
    const handleLogout = async () => {
        try {
            const result = await logout();  // 呼叫 API 登出
            console.log(result);
            updateAuthState({ isLoggedIn: false, role: null });  // 更新前端狀態
        } catch (error) {
            console.error('登出失敗:', error);
        }
    };

    return (
        <label className="btn btn-sm sm:btn-md btn-ghost btn-circle" onClick={handleLogout}>
            <svg xmlns="http://www.w3.org/2000/svg" id="Isolation_Mode" data-name="Isolation Mode" viewBox="0 0 24 24" className="w-4 h-4" width="24" height="24" fill="currentColor">
                <path d="M3,3H8V0H3A3,3,0,0,0,0,3V21a3,3,0,0,0,3,3H8V21H3Z"/>
                <path d="M22.948,9.525,18.362,4.939,16.241,7.061l3.413,3.412L5,10.5,5,13.5l14.7-.027-3.466,3.466,2.121,2.122,4.587-4.586A3.506,3.506,0,0,0,22.948,9.525Z"/>
            </svg>

        </label>
    )
}
