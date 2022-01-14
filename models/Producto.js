const mongoose = require('mongoose');

const ProductosSchema = mongoose.Schema({

    idProducto: {
        type: Number,
        required: true,
        trim: true
    },
    idVariedad: {
        type: Number,
        required: true,
        trim: true
    },
    productoNombreCorto: {
        type: String,
        required: true,
        trim: true
    },
    productoNombreLargo: {
        type: String,
        default: '',
        trim: true
    },
    productoDescripcion: {
        type: String,
        default: '',
        trim: true
    },
    productoPresentacion: {
        type: String,
        default: 'paquete',
        trim: true
    },
    productoImagen: {
        type: String,
        default: 'defaultCannabis.jpg',
        trim: true
    },
    productoCosto: {
        type: Number,
        required: true,
        trim: true
    },
    productoGanancia: {
        type: Number,
        default: 20,
        trim: true
    },
    productoDescuento: {
        type: Number,
        default: 0,
        trim: true
    },
    productoExistencia: {
        type: Number,
        default: 1000,
        trim: true
    },
    estado: {
        type: Boolean,
        default: true,
        trim: true
    },
    tipo: {
        type: Number,
        default: 1,
        trim: true
    }
});

module.exports = mongoose.model('Producto', ProductosSchema);