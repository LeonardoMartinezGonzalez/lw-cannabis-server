const Producto = require('../models/Producto');

exports.regresaProductos = async (req, res) => { //
    console.log("Entro a regresa productos");
    console.log("query",req.query);
    try{
        
        const resultado = await Producto.find({idVariedad: req.query.idVariedad}); // Regresa todas las categorias
        console.log(resultado);
        res.status(200).json(resultado);
    }catch (error) {
        console.log(error);
    } 
}