const mongoose = require('mongoose');

const CategoriasSchema = mongoose.Schema({

    idVariedad: {
        type: Number,
        trim: true,
        unique: true
    }, 
    idCategoria: {
        type: Number,
        trim: true
    }, 
    nombreVariedad:{
        type: String,
        trim: true
    }, 
    descripcionVariedad: {
        type: String,
        trim: true
    }, 
    ofertaVariedad: {
        type: Number,
        default: 0,
        trim: true
    },
    descuentoVariedad: {
        type: Number,
        default: 0,
        trim: true
    },
    imagenVariedad: {
        type: String,
        default: 'https://res.cloudinary.com/itesz-lweb-cannabis/image/upload/v1642092705/samples/cannabis/img/defaultCannabis_p2z7be.jpg',
        trim: true
    },
    estado: {
        type: Number,
        default: 1,
        trim: true
    }
});

module.exports = mongoose.model('Categoria', CategoriasSchema);