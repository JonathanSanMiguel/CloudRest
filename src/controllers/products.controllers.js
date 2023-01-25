const Product = require('../models/product.model')

// Funcion GET
const ObtenerProductos = async(req, res) => {
    try {
        const productos = await Product.find()
        res.json(productos)
    } catch (error) {
        res.status(500).json({
            status: false,
            message: error.message
        })
    }
}

//Funcion GET ONE
const ObtenerUnProducto = async(req, res) => {
    try {

        const producto = await Product.findById(req.params.id)

        if(!producto) {
            return res.status(404).json( {
                message: 'El producto no existe'
            })
        } else {
            res.send(producto)
        }
    } catch (error) {
        res.status(500).json({
            status: false,
            message: error.message
        })
    }
}

//Funcion POST
const CrearProducto = async(req, res) => {
    try {
        const { nombre, desccripcion, precio } = req.body

        const producto = new Product({ nombre, desccripcion, precio })
    
        await producto.save()
    
        res.status(200).json({
            status: true,
            producto
        })
    } catch (error) {
        res.status(500).json({
            status: false,
            message: error.message
        })
    }
}

//Funcion UPDATE
const ActualizarProducto = async(req, res) => {
    try {
        const producto = await Product.findByIdAndUpdate(req.params.id, req.body, {new: true})
    
        res.json(producto)
    } catch (error) {
        res.status(500).json({
            status: false,
            message: error.message
        })
    }
}

//Funcion DELETE
const BorrarProducto = async(req, res) => {
    try {

        const producto = await Product.findByIdAndDelete(req.params.id)

        if(!producto) {
            return res.status(404).json( {
                message: 'El producto no existe'
            })
        } else {
            res.send(producto.nombre)
        }
    } catch (error) {
        res.status(500).json({
            status: false,
            message: error.message
        })
    }
}

module.exports = {
    ObtenerProductos,
    ObtenerUnProducto,
    CrearProducto,
    ActualizarProducto,
    BorrarProducto
}