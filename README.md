Crear react-vite 
1-Crear carpeta con nombre
2-npm create vite@latest
3-Cambiar el nombre de la carpeta 
4-Selecciona el entorno 
5-Seleccionar Lenguaje
6-cd latest
7-npm install
8-npm run dev

INICIAR EL PROYECTO
1-cd latest
2-npm install
3-npm run dev 


ROUTERS: 
1- npm install react-router-dom
2- import {BrowserRouter, Route, Routes} from "react-router-dom";
3- usar BrowserRouter , Routes, Route 

REDIRECCION:
1-import { Link } from 'react-router-dom';
2- se remplaza a = Link y href=to con la ruta / 

BACKEND: 
1-crear carpeta backend 
2- inicializar packjson npm init -y 
3- npm install express mysql2 bcrypt cors express-session

AXION:
1-npm install axios
2- import axios from"axios"





const Descubri = () => {
    return (
      <body className="body-descubri">
        <div className="dique">
            <div className="carruselpotre">
                
            </div>
            <div className="textopotre">
                <h1> Embalse Potrerillos </h1>
                <h2>Ubicación</h2>
                <p>A 30 km al sudoeste de la Ciudad de Mendoza.</p>
                <h2>Dimensiones</h2>
                <p>El lago mide 12 kilómetros de largo y hasta 3 kilómetros </p>
                <p> de ancho, con una profundidad máxima de 140 metros.</p>
                <h2>Actividades</h2>
                <p>Kayak, Windsurf, Kitesurf y Paseos en velero</p>
                <Link to="/contacto">
                    <button className="reservapotre">Reservar</button>
                </Link>
            </div>

        </div>

        
      </body>
    );
  }
  
export default Descubri;
# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

https://www.youtube.com/watch?v=jn1vllka2uw
