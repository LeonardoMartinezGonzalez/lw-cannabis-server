const Cliente = require('../models/Cliente');
const bcryptjs = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { validationResult } = require('express-validator');


exports.crearCliente = async  (req, res) => {
    // revisar si hay erores
    const  errores = validationResult(req);
    if ( !errores.isEmpty() ){
        return res.status(400).json({ errores: errores.array() });
    }

    //Aplicamos destructuring
    const { correo, clave } = req.body;

    try{
        // Revisa que no exista el Cliente
        const existeCliente = await Cliente.findOne( { correo });
        if (existeCliente)
            return res.status(400).json({ msg: 'El cliente ya existe' });
        // Creamos el nuevo Cliente
        const cliente = new Cliente(req.body);

        // Hashear la clave del Cliente
        const salt = await bcryptjs.genSalt(10);
        cliente.clave = await bcryptjs.hash(clave, salt)

        // Guardar el Cliente
        await cliente.save()

        // Crear y firmar el JWT
        const payload = {
            cliente: {
                id: cliente.id
            }
        };

        // Firmar el JWT
        jwt.sign(payload, process.env.SECRETA, {
            expiresIn: 3600 // Durará 1 hora el token 
        }, (error, token) => {
            if (error) throw error;

            // Mensaje de confirmación
            res.json({ token });
        });

    }catch (error){
        console.log(error);
        res.status(400).send('Hubo un error: ' + error);
    }
    

}