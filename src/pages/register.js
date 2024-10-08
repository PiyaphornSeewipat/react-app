import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from 'axios';

function Register() {
    const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [name, setName] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const handleSubmit = async (event) => {
    event.preventDefault();
    if(password != confirmPassword) {
      setError('รหัสผ่านไม่ตรงกัน กรุณากรอกใหม่');
      return;
    } else {
    try {
      const response = await axios.post('http://localhost:4000/register', {
        email,
        password,
        name
     });

      console.log('User registered:', response.data);
      // Redirect or clear form here after success
      alert('สมัครสมาชิก : ' + response.data);
      setEmail('');
      setPassword('');
      setName('');
      navigate('/login');
    } catch (error) {
      setError(error.response.data);
      console.error('Registration error:', error.response.data);
    }
  }
  };
    return ( 
        <>
<div className="flex items-center justify-center min-h-screen bg-gray-50">
            <div className="max-w-lg w-full mx-auto p-6">
                <div className="text-4xl font-bold text-gray-800 mt-6 text-center">
                    💸 กู้เงินลัลล้าาา 💰
                </div>
                <div className="p-8 bg-white mt-6 rounded-lg shadow-lg border border-gray-300">
                    <form onSubmit={handleSubmit}>
                        <div className="mb-6">
                            <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-700">Email</label>
                            <input
                                type="email"
                                id="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className="block w-full p-4 rounded-lg bg-gray-200 border border-gray-300 focus:border-green-500 focus:ring focus:ring-green-500 focus:ring-opacity-50"
                                required
                            />
                        </div>
                        <div className="mb-6">
                            <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-700">Password</label>
                            <input
                                type="password"
                                id="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                className="block w-full p-4 rounded-lg bg-gray-200 border border-gray-300 focus:border-green-500 focus:ring focus:ring-green-500 focus:ring-opacity-50"
                                required
                            />
                        </div>
                        <div className="mb-6">
                            <label htmlFor="confirm-password" className="block mb-2 text-sm font-medium text-gray-700">Confirm Password</label>
                            <input
                                type="password"
                                id="confirm-password"
                                value={confirmPassword}
                                onChange={(e) => setConfirmPassword(e.target.value)}
                                className="block w-full p-4 rounded-lg bg-gray-200 border border-gray-300 focus:border-green-500 focus:ring focus:ring-green-500 focus:ring-opacity-50"
                                required
                            />
                        </div>
                        <div className="mb-6">
                            <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-700">Full Name</label>
                            <input
                                type="text"
                                id="name"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                className="block w-full p-4 rounded-lg bg-gray-200 border border-gray-300 focus:border-green-500 focus:ring focus:ring-green-500 focus:ring-opacity-50"
                                required
                            />
                        </div>
                        <button type="submit" className="w-full p-4 mt-4 bg-green-600 text-white rounded-lg shadow-md hover:bg-green-500 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50 transition">
                            สมัครสมาชิก
                        </button>
                        <p className="mt-6 text-center text-gray-600">
                            ยังไม่มีบัญชีใช่ไหม? <Link to="/login" className="text-green-600 hover:underline">เข้าสู่ระบบ</Link>
                        </p>
                    </form>
                </div>
            </div>
        </div>

        </>
     );
}

export default Register;