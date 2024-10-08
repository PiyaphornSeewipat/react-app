import LogoutButton from "../pages/Logout";

/* eslint-disable react/jsx-no-undef */
function Header() {
    return (
      <>
        <header className="bg-gradient-to-r from-blue-600 to-purple-600 p-6 shadow-md w-full">
          <nav className="container mx-auto flex justify-between items-center">
            <div className="text-white text-3xl font-bold">
              <span role="img" aria-label="logo">💰</span> เงินลัลล้าาาา
            </div>
            <div className="space-x-4">
              <a href="#" className="text-white hover:underline">หน้าแรก</a>
              <a href="#" className="text-white hover:underline">ข้อมูลเกี่ยวกับการกู้</a>
              <a href="#" className="text-white hover:underline">ขอคำแนะนำ</a>
              <a href="#" className="text-white hover:underline">ติดต่อเจ้าหน้าที่</a>
              <LogoutButton/>
            </div>
          </nav>
        </header>
      </>
    );
}

export default Header;
