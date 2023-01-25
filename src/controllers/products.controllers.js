
const ObtenerProductos = (req, res) => res.send('Obteniendo productos')

const CrearProducto = (req, res) => res.send('Creando Producto')

const ActualizarPrdocuto = (req, res) => res.send('Actualizando Producto')

const BorrarProducto = (req, res) => res.send('Borrando Producto')

module.exports = {
    ObtenerProductos,
    CrearProducto,
    ActualizarPrdocuto,
    BorrarProducto
}