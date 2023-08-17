import React from 'react';
import AboutUs from './aboutus'; // Adjust the path to match the actual path to your aboutus.js file
import './App.css';
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";

import EmailLogin from './login';
import MyRegistration from './registration';
import Contact from './contact';

function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path="/login" element={<EmailLogin />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/registration" element={<MyRegistration />} />    
    </Routes>
  </BrowserRouter>
  </>
  );
}

export default App;
