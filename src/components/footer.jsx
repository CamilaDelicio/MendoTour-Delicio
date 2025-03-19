import React from "react"; 
import "../../src/index.css"; 
import logoWhatsApp from "../assets/logoWs.png";
import logoGmail from "../assets/email.png";
import MapaGoogle from "./maps";
import { Link } from "react-router-dom";
const Footer =() => {
    return (
    <footer className="Footer">
      <div className="seccion-footer">
        <p>Secciones:</p>
          <ul>
            <li><Link to="/">Inicio</Link></li>
            <li><Link to="/descubri">Descubrí</Link></li>
            <li><Link to="/excursiones">Excursiones</Link></li>
            <li><Link to="/contacto">Contacto</Link></li>
          </ul>
      </div>
        <div className="Contacto">
          <p>Contacto:</p>
          <a href="https://wa.me/2614717079" target="_blank" >
            <img src={logoWhatsApp} alt="WhatsApp"className="ws" />
          </a>
          <a href="mailto:camiladelicio@gmail.com">
            <img src={logoGmail} alt="Gmail" className="gm"/>
          </a>
        </div>
        <div className="mapa-footer">
            <MapaGoogle />
        </div>
    </footer>
    );
}

export default Footer; 