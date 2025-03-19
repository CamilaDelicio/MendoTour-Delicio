import bcrypt from "bcrypt"; 
import pool from "../index.js";


export const registerUsuario = async (req, res) => {
    const { username, email, password, confirmPassword} = req.body;
    if (password !== confirmPassword) {
        return res.status(400).json({ message: 'Las contraseñas no coinciden' });
    }

    try {
        const hashedPassword = await bcrypt.hash(password, 10);
        pool.query(
            'INSERT INTO usuarios (username, email, password) VALUES (?, ?, ?)',
            [username, email, hashedPassword],
            (err, results) => {
                if (err) {
                    if (err.code === 'ER_DUP_ENTRY') {
                        return res.status(400).json({ message: 'El usuario ya existe' });
                    }
                    console.error('Error al registrar usuario:', err);
                    return res.status(500).json({ message: 'Error al registrar usuario' });
                }
                res.status(201).json({ message: 'Usuario registrado' });
            }
        );
    } catch (error) {
        console.error('Error al registrar usuario:', error);
        res.status(500).json({ message: 'Error al registrar usuario' });
    }
};


export const loginUsuario = (req, res) => {
    const { username, password } = req.body;

    pool.query(
        'SELECT * FROM usuarios WHERE username = ?',
        [username],
        async (err, results) => {
            if (err) {
                console.error('Error al buscar usuario:', err);
                return res.status(500).json({ message: 'Error del servidor' });
               
            }

            if (results.length === 0) {
                return res.status(400).json({ message: 'Usuario no encontrado' });
            }

            const usuario = results[0];
            const validarPassword = await bcrypt.compare(password, usuario.password);

            if (!validarPassword) {
                return res.status(400).json({ message: 'Contraseña incorrecta' });
            }
            req.session.userId = usuario.id;
            req.session.username = usuario.username;
            res.status(200).json({ message: 'Inicio de sesión exitoso' });
        }
    );
};
export const logoutUsuario = (req, res) => {
    req.session.destroy((err)=>{
        if (err)  {
            console.error('Error al cerrar sesión:', err);
            return res.status(500).json({ message: 'Error al cerrar sesión' });
        }
        res.status(200).json({ message: 'Sesión cerrada exitosamente' });
    });
};
