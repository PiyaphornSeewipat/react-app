function Header() {
    return ( 
    <>
<div className="min-h-screen flex flex-col">
      {/* Header Section */}
      <header className="bg-gradient-to-r from-blue-600 to-purple-600 p-6 shadow-md">
        <nav className="container mx-auto flex justify-between items-center">
          <div className="text-white text-3xl font-bold">
            <span role="img" aria-label="logo">💰</span> เงินลัลล้าาาา
          </div>
          <div className="space-x-4">
            <a href="#" className="text-white hover:underline">หน้าแรก</a>
            <a href="#" className="text-white hover:underline">ข้อมูลเกี่ยวกับการกู้</a>
            <a href="#" className="text-white hover:underline">ขอคำแนะนำ</a>
            <a href="#" className="text-white hover:underline">ติอต่อเจ้าหน้าที่</a>
          </div>
        </nav>
      </header>


    </div>


    </>

     );
}

export default Header;