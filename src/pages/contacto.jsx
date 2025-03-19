import React from "react";
import "../../src/index.css"; 
import FormularioLogin from "../components/login";




const Contacto = ({ onLogin }) => {
    return (
        <div>
            <FormularioLogin onLogin={onLogin} />
        </div>
    );
};

  
export default Contacto;