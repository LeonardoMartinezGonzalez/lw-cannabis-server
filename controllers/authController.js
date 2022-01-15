const Cliente = require('../models/Cliente');
const bcryptjs = require('bcryptjs');
const jwt = require('jsonwebtoken');
/* const { validationResult } = require('express-validator'); */

exports.autenticarCliente = async (req, res) => {
    
    // revisar si hay erores
   /*  const  errores = validationResult(req);
    if ( !errores.isEmpty() ){
        return res.status(400).json({ errores: errores.array() });
    } */

    // Extraer el correo y la clave
    const { correo, clave } = req.body;
    console.log(req.body);
    try{
        // Revisar que sea un cliente registrado
        const cliente = await Cliente.findOne({ correo });
        
        if ( !cliente ){
            console.log("No existe el usuario");
            return res.json({ msg: 'El usuario no existe'});  /* .status(400) */
        }
            
        // Revisar Clave
        const claveCorrecta = await bcryptjs.compare(clave, cliente.clave);
        if( !claveCorrecta ){
            console.log("Clave incorrecta");
            return res.json({ msg: ' Clave incorrecta '}); /* .status(400) */
        }
            
        // Si todo es correcto, Crear y firmar el JWT
        const payload = {
            cliente: {
                id: cliente.id,
                nombreUsuario: cliente.nombreUsuario
            }
        };

        // Firmar el JWT
        jwt.sign(payload, process.env.SECRETA, {
            expiresIn: 3600 // Durará el token 5 minutos1 hora
        }, (error, token) => {
            if (error) throw error;

            // Mensaje de confirmación
            res.json({ token });
        });

    }catch (error) {
        console.log(error);
    }
}

// Obtiene que usuario esta autenticado
exports.clienteAutenticado = async (req, res) => {
    try {
        const cliente = await Cliente.findById(req.usuario.id);
        res.json({cliente});
    } catch (error) {
        console.log(error);
        res.status(500).json({ msg: 'Hubo un error'});
    }
}