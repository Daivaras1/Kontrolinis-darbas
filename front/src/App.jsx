import { useState } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import Signup from './components/Signup';
import Login from './components/Login';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainPage from './components/MainPage';

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path ="/" element={<MainPage/>} />
        <Route path="/registration" element={<Signup />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;