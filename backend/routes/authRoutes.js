import express from 'express';
import { registerUsuario, loginUsuario } from "../controllers/authController.js";
import { logoutUsuario } from '../controllers/authController.js';

const router = express.Router();

router.post('/register', registerUsuario);
router.post('/login', loginUsuario);
router.post('/logout', logoutUsuario);

export default router;