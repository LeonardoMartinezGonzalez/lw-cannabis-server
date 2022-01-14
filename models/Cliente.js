const mongoose = require('mongoose');

const ClientesSchema = mongoose.Schema({

    nombreUsuario: {
        type: String,
        required: true,
        trim: true,
        unique: true
    }, 
    correo: {
        type: String,
        required: true,
        trim: true,
        unique: true
    }, 
    clave:{
        type: String,
        required: true,
        trim: true
    }, 
    telefonoCelular: {
        type: String,
        trim: true
    }, 
    nombre: {
        type: String,
        trim: true
    },
    apellidos: {
        type: String,
        trim: true
    },
    estado: {
        type: String,
        trim: true
    },
    direccion: {
        type: String,
        trim: true
    },
    ciudad: {
        type: String,
        trim: true
     },
    codigoPostal: {
        type: String,
        trim: true
    },
    telefonoCasa: {
        type: String,
        trim: true
    },
    banderaFacebook: {
        type: String,
        default: "1"
    },
    banderaGmail: {
        type: String,
        default: "1"
    },
    image_file: {
        type: String,
        default: "default.jpg",
        trim: true
    },
    estadoUsuario: {
        type: String,
        default: "1"
    },
    creado: {
        type: Date,
        default: Date.now()
    }
});

module.exports = mongoose.model('Cliente', ClientesSchema);