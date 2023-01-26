const { Router } = require('express')
const { ObtenerProductos, ObtenerUnProducto, CrearProducto, ActualizarProducto, BorrarProducto } = require('../controllers/products.controllers')
const fileUpload = require('express-fileupload')


const router = Router()

router.get('/products', ObtenerProductos)

router.get('/oneProduct/:id', ObtenerUnProducto)

router.post('/create', fileUpload({useTempFiles: true, tempFileDir: './uploads'}), CrearProducto)

router.put('/upDate/:id', ActualizarProducto)

router.delete('/delete/:id', BorrarProducto)


module.exports = router