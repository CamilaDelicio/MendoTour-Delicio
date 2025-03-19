import React from 'react';
import { useNavigate} from 'react-router-dom';
import "../../src/index.css"; 

const CerrarSesion = ( ) => {
    const navigate = useNavigate();
    const cerrarSesion = async () => {
    try {
      localStorage.setItem("isLoggedIn", "false");
      alert('Cerraste sesión con éxito.');
      navigate('/contacto');

    } catch (error) {
      console.error('Error al cerrar sesión', error);
    }
  };

  return (
    <div className='boton-sesion'>
      <button onClick={cerrarSesion}>Cerrar sesión</button>
    </div>
  );
};

export default CerrarSesion;