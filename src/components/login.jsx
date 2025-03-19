import React, { useState } from "react";
import "../../src/index.css"; 
import axios from "axios";
import { Link , useNavigate} from "react-router-dom";


const FormularioLogin = ({onLogin}) => {
    const [username, setUsername] = useState(''); 
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:4000/login', {
                username,
                password
            });
            if (response.status === 200) {
                onLogin();
                localStorage.setItem("isLoggedIn", "true");
                alert('Inicio de sesión exitoso.');
                navigate('/excursiones');
                
            }

        } catch (error) {
            if (error.response && error.response.status === 400) {
                alert('Error al ingresar Usuario');
            } 
        }
    };
    return (
        <form className="formularioLogin" onSubmit={handleLogin}>
            <div className="formLoginContainer">
                <h2>Iniciar Sesión</h2>
                <label htmlFor="username" className="sr-only">Usuario</label>
                <input
                type="text" 
                name="username" 
                id="username" 
                placeholder="Nombre de Usuario"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
            />
                <label htmlFor="password" className="sr-only">Contraseña</label>
                <input 
                    type="password" 
                    name="password" 
                    id="password" 
                    placeholder="Ingrese contraseña"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
            />
                <button type="submit">Iniciar Sesión</button>
                <p>¿No tenes cuenta?<Link to = "/register"> Registrate</Link></p>
            </div> 
        </form>

            
);
};
export default FormularioLogin
