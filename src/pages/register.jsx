import React ,{ useState } from "react";
import { Link,useNavigate } from "react-router-dom";
import axios from "axios";


const FormularioRegister =() =>{
    const [username, setUsername] = useState ("");
    const [email, setEmail] = useState ("");
    const [password, setPassword] = useState ("");
    const [confirmPassword, setConfirmPassword] = useState('');
    const navigate = useNavigate();

    const handleRegister = async (e) => {
        e.preventDefault();

        if (password !== confirmPassword) {
            alert('Las contraseñas no coinciden');
            return;
        }

        try {
            const response = await axios.post('http://localhost:4000/register', {
                username,
                email,
                password,
                confirmPassword
            });

            if (response.status === 201) {
                alert('El usuario ha sido registrado con éxito.');
                navigate('/contacto');
            }
            if (response.status === 400) {
                alert('El Usuario ya se encuentra registrado');
                navigate('/contacto');
            }
        }  catch (error) {
            if (error.response && error.response.status === 400) {
                alert('El usuario ya existe');
            } else {
                alert('Error al registrar usuario');
            }
        }
    };
 
  return (
    <form className="formularioRegister" onSubmit={handleRegister}>
            <div className="formRegisterContainer">
                <h2>Registrate</h2>
                <label htmlFor="username" className="sr-only">Usuario</label>
                <input
                type="text" 
                name="username" 
                id="username" 
                placeholder="Nombre de Usuario"
                value={username}
                onChange={(e) => setUsername(e.target.value)}

                />

                <label htmlFor="email" className="sr-only">Email</label>
                <input
                type="email" 
                name="email" 
                id="email" 
                placeholder="Correo Electrónico"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
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
                <label htmlFor="confirmPassword" className="sr-only">Confirmar Contraseña</label>
                <input 
                    type="password" 
                    name="confirmPassword" 
                    id="confirmPassword" 
                    placeholder="Confirme Su Contraseña"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
            />
                <button type="submit">Registrarse</button>
                <p>¿Ya tenes cuenta? <Link to = "/contacto"> Inicia Sesión</Link></p>
            </div> 
        </form>
  );
};

  export default FormularioRegister