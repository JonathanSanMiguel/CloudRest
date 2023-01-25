const { Router } = require('express')
const { ObtenerProductos, ObtenerUnProducto, CrearProducto, ActualizarProducto, BorrarProducto } = require('../controllers/products.controllers') 

const router = Router()

router.get('/products', ObtenerProductos)

router.get('/oneProduct/:id', ObtenerUnProducto)

router.post('/create', CrearProducto)

router.put('/upDate/:id', ActualizarProducto)

router.delete('/delete/:id', BorrarProducto)

module.exports = router