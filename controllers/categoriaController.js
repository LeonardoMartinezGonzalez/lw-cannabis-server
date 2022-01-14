const Categoria = require('../models/Categoria');

exports.regresaCategorias = async (req, res) => { //
    console.log("Entro a regresa categorias");

    try{
        const resultado = await Categoria.find(); // Regresa todas las categorias
        console.log(resultado);
        res.status(200).json(resultado);
    }catch (error) {
        console.log(error);
    } 
}