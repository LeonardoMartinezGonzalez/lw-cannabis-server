// Rutas para Clientes
const express = require('express');
const router = express.Router();
const clienteController = require('../controllers/clienteController');
const { check } = require('express-validator');

// Crear un Cliente
// api/clientes
router.post('/', 
    [
        check('correo', 'El correo es obligatorio y debe ser válido').isEmail(),
        check('clave', 'La clave debe tener al menos 6 caracteres').isLength({ min: 6 })
    ],
    clienteController.crearCliente
);

module.exports = router;
