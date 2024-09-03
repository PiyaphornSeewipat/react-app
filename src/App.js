import React, { useState } from 'react';
import Button from './Button';
import './App.css';
import Header from './components/Header';
import Sibeber from './components/Sibeber';
import { Route, BrowserRouter, Routes } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import User from './pages/User';
import About from './pages/About';

function App() {
  
  return (
    
      <BrowserRouter>
        <div className='flex'>
          <Sibeber/>
          <div className='flex-1'>
            <Header/>
            <Routes>
              <Route path='/' element={<Dashboard />} />
              <Route path='/user' element={<User />} />
              <Route path='/about' element={<About />} />

            </Routes>

          </div>

        </div>
      </BrowserRouter>
      
    
  );
}

export default App;
