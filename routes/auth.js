// Rutas para Autenticar Clientes
const express = require('express');
const router = express.Router();
const { check } = require('express-validator');
const authController = require('../controllers/authController');

// Crear un Cliente
// api/auth
router.post('/', 
    [
        check('correo', 'El correo es obligatorio y debe ser válido').isEmail(),
        check('clave', 'La clave debe tener al menos 6 caracteres').isLength({ min: 6 })
    ],
    authController.autenticarCliente
);

module.exports = router;