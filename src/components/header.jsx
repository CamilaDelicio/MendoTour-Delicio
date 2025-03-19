import React from "react";
import "../../src/index.css"; 
import logo from "../assets/logo-mendoza.png";
import { Link } from "react-router-dom";


const Header = ({ isLoggedIn, onLogout }) => {
  console.log("isLoggedIn en Header:", isLoggedIn);
  return (
    <header className="header">
      <div className="logo">
        <Link to="/">
          <img src={logo} alt="Logo MendoTour" />
        </Link>
      </div>
      <nav>
        <ul>
          <li><Link to="/">Inicio</Link></li>
          <li><Link to="/descubri">Descubrí</Link></li>
          <li><Link to="/excursiones">Excursiones</Link></li>
          <li><Link to="/contacto">Contacto</Link></li>
          {isLoggedIn ? (
           <li>
           <button onClick={onLogout} className="boton-sesion">
             Cerrar sesión
           </button>
           </li>
          ) : (
            null
          )}
          </ul>
      </nav>
    </header>
  );
};

export default Header;