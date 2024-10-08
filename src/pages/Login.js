import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../AuthProvider";
import axios from "axios";

function Login() {
    const { login } = useAuth();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault(); // ป้องกันการ refresh หน้า
        try {
            const res = await axios.post('http://localhost:4000/login', {
                email: email,
                password: password
            }, {
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            
            // เก็บ token ไว้ถ้าจำเป็น
            // localStorage.setItem('token', res.data.token);

            // เรียกฟังก์ชัน login และเก็บ token
            login(res.data.token);
            
            // แสดงข้อความล็อกอินสำเร็จ
            alert('ล็อกอินสำเร็จ');
            
            // นำทางไปที่หน้า home หรือหน้าอื่น ๆ
            navigate('/'); // หรือคุณสามารถเปลี่ยนเป็นหน้าที่ต้องการ
        } catch (err) {
            setError(err.response ? err.response.data.message : 'ล็อกอินไม่สำเร็จ');
            console.error(err.response ? err.response.data : err);
        }
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-50">
            <div className="p-8 bg-white mt-6 rounded-lg shadow-lg border border-gray-300 w-full max-w-md">
                <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">
                    🔒 กู้เงินลัลล้าาา 💸
                </h2>
                <form onSubmit={handleSubmit} className="space-y-6"> {/* ย้ายฟังก์ชัน handleSubmit เข้าไปในฟอร์มนี้ */}
                    <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                        <input
                            type="email"
                            id="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="block w-full p-4 rounded-lg bg-gray-200 border border-gray-300 focus:border-green-500 focus:ring focus:ring-green-500 focus:ring-opacity-50"
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
                        <input
                            type="password"
                            id="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="block w-full p-4 rounded-lg bg-gray-200 border border-gray-300 focus:border-green-500 focus:ring focus:ring-green-500 focus:ring-opacity-50"
                            required
                        />
                    </div>
                    {error && <p className="text-red-500">{error}</p>} {/* แสดงข้อความผิดพลาด */}
                    <button type="submit" className="w-full p-4 bg-green-600 text-white rounded-lg shadow-md hover:bg-green-500 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50 transition">
                        เข้าสู่ระบบ
                    </button>
                </form>
                <p className="mt-6 text-center text-gray-600">
                    ยังไม่มีบัญชีใช่ไหม? <Link to="/register" className="text-green-600 hover:underline">สมัครสมาชิก</Link>
                </p>
            </div>
        </div>
    );
}

export default Login;
