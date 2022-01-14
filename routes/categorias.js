// Rutas para Autenticar Clientes
const express = require('express');
const router = express.Router();
/* const { check } = require('express-validator'); */
const categoriaController = require('../controllers/categoriaController');
/* const categoriaController = require('../controllers/categoriaController'); */

// Consultar una ruta
// api/categorias
router.get('/', categoriaController.regresaCategorias );

// Productos
// api/productos
//router.get('/', productoController.regresaProductos );

module.exports = router;