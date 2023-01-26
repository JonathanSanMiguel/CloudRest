const Product = require('../models/product.model')
const { UploadImage, DeleteImage }  = require('../cloudinary')
const fs = require('fs-extra')

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
        // Desestructuracion de los parametros del req.body.
        const { nombre, descripcion, precio } = req.body

        // Creacion de una instancia del modelo con los parametros.
        const producto = new Product({ nombre, descripcion, precio })

        // SI la peticion tiene una imagen la cargara.
        if(req.files?.image) {
            const result = await UploadImage(req.files.image.tempFilePath)
            producto.image = {
                public_id: result.public_id,
                secure_url: result.secure_url
            }
            await fs.unlink(req.files.image.tempFilePath)
        }

        // Guarda el registro en la DB.
        await producto.save()

        // Respuesta en json
        res.status(200).json({
            status: true,
            producto
        })
    } catch (error) {
        // En caso de error, res json con el error
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
            await DeleteImage(producto.image.public_id)
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