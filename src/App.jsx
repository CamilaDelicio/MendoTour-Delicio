// src/App.jsx
import React from 'react';
import { useState, useEffect } from 'react';
import Header from './components/header';
import Inicio from "./pages/inicio";
import Footer from './components/footer';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Excursiones from "./pages/excursiones";  
import Contacto from "./pages/contacto"; 
import Descubri from "./pages/Descubri"; 
import FormularioRegister from "./pages/register";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(localStorage.getItem("isLoggedIn") === "true");
  const onLogin = () => {
    console.log("onLogin llamado");
    setIsLoggedIn(true); 
    localStorage.setItem("isLoggedIn", "true"); 
  };
  const onLogout = () => {
    console.log("onLogout llamado");
    setIsLoggedIn(false); 
    localStorage.removeItem("isLoggedIn"); 
  };
  return (
    <div>
      <BrowserRouter>
      <Header isLoggedIn={isLoggedIn} onLogout={onLogout} />
        <Routes>
            <Route path='/' element={<Inicio />} />
            <Route path='/descubri' element={<Descubri />} />
            <Route path='/excursiones' element={<Excursiones />} />
            <Route path='/contacto' element={<Contacto onLogin={onLogin} />} />
            <Route path='/register' element={<FormularioRegister />} />

  
            
        </Routes>
        <Footer/>
        </BrowserRouter>
    </div>
  );
}

export default App;

