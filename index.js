const app = require('./app')
const { ConectToDb } = require('./src/mongoose')

const Main = async() => {
    await ConectToDb()
    app.listen(5000, () => {
        console.log('Servidor en el puerto 5000')
    })
}

try {
    Main()
} catch (error) {
    error
}