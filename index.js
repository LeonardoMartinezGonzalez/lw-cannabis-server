const express = require('express');
const conectarDB = require('./config/db');
const cors = require('cors');

// Crear el servidor
const app = express();

// Conectar a la Base de Datos
conectarDB();

// Habilitar cors
app.use(cors());

// Habilitar express.json
app.use( express.json({ extended: true }));

// Puerto de la app
const PORT = process.env.PORT || 4000;

// Importar rutas
app.use('/api/clientes', require('./routes/clientes'));
app.use('/api/auth', require('./routes/auth'));

// Categorias
app.use('/api/categorias', require('./routes/categorias'));

// Productos
app.use('/api/productos', require('./routes/productos'));


// Arrancar la app
app.listen(PORT, () => {
    console.log(`El Servidor Cann@Bis esta funcionando en el puerto ${PORT}`);
});