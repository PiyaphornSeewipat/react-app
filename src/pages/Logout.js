import React from 'react';
import { useAuth } from '../AuthProvider';
import { useNavigate } from 'react-router-dom';

const LogoutButton = () => {
  const { logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    if (window.confirm("คุณต้องการออกจากระบบหรือไม่?")) {
      logout();
      navigate('/login');
    }
  };

  return (
    <button
      onClick={handleLogout}
      className="bg-green-600 text-white px-4 py-2 rounded-lg shadow-md hover:bg-green-500 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50 transition"
    >
      ออกจากระบบ
    </button>
  );
};

export default LogoutButton;
