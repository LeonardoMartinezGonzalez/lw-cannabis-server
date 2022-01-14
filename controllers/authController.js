const Cliente = require('../models/Cliente');
const bcryptjs = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { validationResult } = require('express-validator');

exports.autenticarCliente = async (req, res) => {
    
    // revisar si hay erores
    const  errores = validationResult(req);
    if ( !errores.isEmpty() ){
        return res.status(400).json({ errores: errores.array() });
    }

    // Extraer el correo y la clave
    const { correo, clave } = req.body;
    
    try{
        // Revisar que sea un cliente registrado
        const cliente = await Cliente.findOne({ correo });
        
        if ( !cliente )
            return res.status(400).json({ msg: 'El usuario no existe'});

        // Revisar Clave
        const claveCorrecta = await bcryptjs.compare(clave, cliente.clave);
        if( !claveCorrecta )
            return res.status(400).json({ msg: ' Clave incorrecta '});

        // Si todo es correcto, Crear y firmar el JWT
        const payload = {
            cliente: {
                id: cliente.id
            }
        };

        // Firmar el JWT
        jwt.sign(payload, process.env.SECRETA, {
            expiresIn: 300 // Durará el token 5 minutos
        }, (error, token) => {
            if (error) throw error;

            // Mensaje de confirmación
            res.json({ token });
        });

    }catch (error) {
        console.log(error);
    }
}