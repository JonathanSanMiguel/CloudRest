const mongoose = require('mongoose')

// Mongoose: the `strictQuery` option will be switched back to `false` by default in Mongoose 7
// Use `mongoose.set('strictQuery', false);` if you want to prepare for this change.
mongoose.set('strictQuery', false)

const Mongo_Uri = 'mongodb+srv://Jonathan:winter505@cloud.ta4ex0m.mongodb.net/?retryWrites=true&w=majority'

const ConectToDb = async() => {
    try {
        await mongoose.connect(Mongo_Uri)
        console.log('Base de Datos Conectada')
    } catch (error) {
        console.log(error)
    }
}

module.exports = {
    ConectToDb
}