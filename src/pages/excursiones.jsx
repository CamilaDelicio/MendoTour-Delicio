import React, {useState} from 'react';
import "../../src/index.css"; 
import rafting from "../assets/rafting.jpg";
import caballo from "../assets/cabballo.jpg";
import cuatri from "../assets/cuatriciclo.jpg";

const Excursiones = () => {
  
  const excursiones = [
    {
      nombre: "Rafting",
      descripcion: "Excursión en balsa por el río Mendoza. Es una actividad deportiva y recreativa que consiste en recorrer el río en la dirección de la corriente",
      imagen: rafting,
      lista: ["Ropa de agua", "Calzado cerrado", "Protector solar", "Muda de ropa"]
    },
    {
      nombre: "Cabalgar",
      descripcion: "Paseo a caballo por los senderos de la montaña. Disfruta de los paisajes, la armonia y naturaleza de Mendoza",
      imagen: caballo,
      lista: ["Casco", "Pantalones largos", "Botas", "Protector solar","Botella de agua"]
    },
    {
      nombre: "Cuatriciclo",
      descripcion: "Sumérgete en una emocionante aventura explorando las impresionantes rutas a bordo de un cuatriciclo. Descubre vistas espectaculares y vive una experiencia inolvidable en contacto directo con la naturaleza.",
      imagen: cuatri,
      lista: ["Casco", "Gafas protectoras", "Ropa cómoda", "Botella de agua", "Protector solar"]
    }
  ];

  const [elementosCompletados, setElementosCompletados] = useState(excursiones.map(excursion => (
    new Array(excursion.lista.length).fill(false)
  )));
  const reservaExcursion = (index) => {
    const checkList = elementosCompletados[index].every(elemento => elemento);
    if (checkList) {
      alert(`¡Reservado con éxito! Pronto nos pondremos en contacto contigo para realizar la actividad: ${excursiones[index].nombre}`);
      
    } else {
      alert("Para reservar necesitas marcar todos los elementos necesarios para la excursión");
    }
  };

  const handleElementoChange = (excursionIndex, elementoIndex) => {
    const newArray = [...elementosCompletados];
    newArray[excursionIndex][elementoIndex] = !newArray[excursionIndex][elementoIndex];
    setElementosCompletados(newArray);
  };
  


  return (
    <div className="body-excursiones">
      <h1>Excursiones disponibles:</h1>
      {excursiones.map((excursion, index) => (
        <div key={index} className="excursion">
          <h2>{excursion.nombre}</h2>
          <p>{excursion.descripcion}</p>
          <img src={excursion.imagen} alt={excursion.nombre} />
          <h3>Elementos para llevar:</h3>
          <ul>
            {excursion.lista.map((elemento, idx) => (
              <li key={idx}>
                <label>
                  <input
                    type="checkbox"
                    checked={elementosCompletados[index][idx]}
                    onChange={() => handleElementoChange(index, idx)}
                  />
                  {elemento}
                </label>
              </li>
            ))}
          </ul>
             <button onClick={() => reservaExcursion(index)} className='bton-excursion'>Reservar</button>
          
        </div>
      ))}
    </div>
  );
};


export default Excursiones;
