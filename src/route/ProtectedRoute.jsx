import React, { useEffect } from 'react'
import { isLogin, checkRole } from '../services/authService';

const ROLE_HIERARCHY = {
    user: 1,
    member: 2,
    admin: 3,
  };

const ProtectedRoute = ({ children, requireRole }) => {

    const [status, setStatus] = useState({isLoggedin: null, role: null});

    // ******* useEffect
    useEffect(() => {

        const checkAuthority = async () => {
            try {
                const isLoginResponse = await isLogin();
            } catch (error) {
                setStatus({isLoggedin: false, role: null});
            }
        }

        checkAuthority();
    }, []);
    // ******* useEffect

    if (status.isLoggedin === null) {
        return(<Navigate to="/loading" replace />;)
    }

  return (
    <div>ProtectedRoute</div>
  )
}

export default ProtectedRoute;

