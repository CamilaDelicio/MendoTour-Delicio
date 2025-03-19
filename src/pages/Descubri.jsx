import React, { useState, useEffect } from "react";
import "../../src/index.css"; 
import { Link } from 'react-router-dom';
import carrusel3 from "../assets/carrusel3.jpg";
import carrusel1 from "../assets/carrusel1.jpg"; 
import carrusel2 from "../assets/carrusel2.jpg"; 


const lugaresTuristicos = {
  Potrerillos: {
    nombre: "Embalse Potrerillos",
    ubicacion: "A 30 km al sudoeste de la Ciudad de Mendoza.",
    dimensiones: "El lago mide 12 kilómetros de largo y hasta 3 kilómetros de ancho, con una profundidad máxima de 140 metros.",
    actividades: "Kayak, Windsurf, Kitesurf y Paseos en velero.",
    imagen: carrusel3
  },
  Termas: {
    nombre: "Termas de Cacheuta",
    ubicacion: "A 39 km de la Ciudad de Mendoza.",
    dimensiones: "Piletones de piedra con agua termal + Río Lento de 270 metros + Piscina de Olas con chorro de 10 metros de altura + 3 Toboganes.",
    actividades: "Restaurante, Fábrica de Cerveza Artesanal, Supermercado.",
    imagen: carrusel2
  },
  PuenteInca: {
    nombre: "Puente Inca",
    ubicacion: "A 193 km de la Ciudad de Mendoza.",
    dimensiones: "544,6 ha.",
    actividades: "Flora, Fauna Su valor geológico, paisajístico e histórico lo convierten en un importante rasgo de identidad cultural para esta región de los Andes centrales.",
    imagen: carrusel1
  }
};


const Descubri = () => {
  const [lugarSeleccionado, setLugarSeleccionado] = useState('Potrerillos');
  const [datosLugar, setDatosLugar] = useState(lugaresTuristicos[lugarSeleccionado]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true); 

    setTimeout(() => {
      setDatosLugar(lugaresTuristicos[lugarSeleccionado]);
      setIsLoading(false); 
    }, 1000); 
  }, [lugarSeleccionado]);

  return (
    <div className="body-descubri">
      <div className="selector">
        <button onClick={() => setLugarSeleccionado('Potrerillos')}>Potrerillos</button>
        <button onClick={() => setLugarSeleccionado('Termas')}>Termas de Cacheuta</button>
        <button onClick={() => setLugarSeleccionado('PuenteInca')}>Puente Inca</button>
      </div>

      {isLoading ? (
        <p>Cargando...</p>
      ) : (
        <div className="dique">
          <img src={datosLugar.imagen} alt={datosLugar.nombre} />
          <div className="textopotre">
            <h1>{datosLugar.nombre}</h1>
            <h2>Ubicación</h2>
            <p>{datosLugar.ubicacion}</p>
            <h2>Dimensiones</h2>
            <p>{datosLugar.dimensiones}</p>
            <h2>Actividades</h2>
            <p>{datosLugar.actividades}</p>
            <Link to="/contacto">
              <button className="reservapotre">Reservar</button>
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default Descubri;