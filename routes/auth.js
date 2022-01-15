// Rutas para Autenticar Clientes
const express = require('express');
const router = express.Router();
const { check } = require('express-validator');
const authController = require('../controllers/authController');
const auth = require('../middleware/auth');

// Iniciar sesion
// api/auth
router.post('/', 
    [
        check('correo', 'El correo es obligatorio y debe ser válido').isEmail(),
        check('clave', 'La clave debe tener al menos 6 caracteres').isLength({ min: 6 })
    ],
    authController.autenticarCliente
);

// Obtiene el cliente autenticado
router.get('/',
    auth,
    authController.clienteAutenticado
);

module.exports = router;