import { Link } from "react-router-dom";

function Notpages() {
    return ( 
        <>

        <div className="flex items-center justify-center min-h-screen bg-gray-50">
            <div className="text-center p-8 bg-white rounded-lg shadow-lg border border-gray-300 w-full max-w-lg">
                <h1 className="text-6xl font-bold text-red-600 mb-4">🚫 404</h1>
                <h2 className="text-3xl font-semibold text-gray-800 mb-6">โอ๊ะ! หน้านี้ไม่พบ 😢</h2>
                <p className="text-gray-600 mb-6">
                    ดูเหมือนว่าหน้าที่คุณค้นหาไม่พบหรืออาจจะถูกย้ายแล้ว 🕵️‍♂️
                </p>
                <img
                    src="https://via.placeholder.com/150?text=404" // ใช้ URL ของรูปภาพที่เกี่ยวข้องที่แท้จริง
                    alt="ไม่พบหน้า"
                    className="mx-auto mb-6"
                />
                <Link to="/" className="inline-block px-6 py-3 bg-green-600 text-white rounded-lg shadow-md hover:bg-green-500 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50 transition">
                    กลับไปหน้าแรก 🏠
                </Link>
            </div>
        </div>

        </>
     );
}

export default Notpages;