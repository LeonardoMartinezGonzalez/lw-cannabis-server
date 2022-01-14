// Rutas para Productos
const express = require('express');
const router = express.Router();
const productoController = require('../controllers/productoController');
/* const { check } = require('express-validator'); */

// Consultar productos de una categoria
// api/productos
router.get('/', productoController.regresaProductos );

module.exports = router;