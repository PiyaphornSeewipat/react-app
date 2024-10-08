import React, { useState } from 'react';
import Button from './Button';
import './App.css';
import Header from './components/Header';
import Sibeber from './components/Sideber';
import { Route, BrowserRouter, Routes, Outlet, useLocation, Navigate} from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import User from './pages/User';
import About from './pages/About';
import Register from './pages/register';
import Login from './pages/Login';
import Notpages from './pages/Notpages';
import { AuthProvider, useAuth } from './AuthProvider';
import Account from './pages/Account';
import MyBlog from './pages/MyBlog';
import AddBlog from './pages/AddBlog';
import EditBlog from './pages/EditBlog';


const ProtectedRoute = ({ children }) => {
  const { user } = useAuth();
  const location = useLocation();
  console.log('User:', user);

  if (!user) {
   return <Navigate to="/login" state={{ from: location }} replace />;
  }
  return children;
 };

 const LayoutAdmin = () => {
  return (
    <ProtectedRoute>
      <div className="h-screen flex">
        {/* Sidebar อยู่ทางซ้าย */}
        <Sibeber className="w-1/4 h-full bg-gray-800" />

        {/* Main content และ Header */}
        <div className="flex-1 flex flex-col">
          {/* Header อยู่ด้านบน */}
          <Header />
          
          {/* เนื้อหาหลัก */}
          <div className="p-6 bg-gray-50 flex-1 overflow-auto">
            <Outlet />
          </div>
        </div>
      </div>
    </ProtectedRoute>
  );
};





function App() {
  
  return (
    <AuthProvider>
      <BrowserRouter>
            <Routes>
              <Route element={<LayoutAdmin />}>
              <Route path='/' element={<Dashboard />} />
              <Route path='/user' element={<User />} />
              <Route path='/about' element={<About />} />
              <Route path='/account' element={<Account />} />
              <Route path='/myblog' element={<MyBlog />} />
              <Route path='/new-post' element={<AddBlog />} />
              <Route path='/edit-post/:id' element={<EditBlog />} />
              </Route>
              <Route path='/notpages' element={<Notpages />} />
              <Route path='/register' element={<Register />} />
              <Route path='/login' element={<Login />} />
              {/* <Route path='/about' element={<About />} /> */}
            </Routes>
      </BrowserRouter>
    </AuthProvider>
    
  );
}

export default App;
