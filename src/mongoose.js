const mongoose = require('mongoose')
const { Mongo_Uri } = require('../config')

// Mongoose: the `strictQuery` option will be switched back to `false` by default in Mongoose 7
// Use `mongoose.set('strictQuery', false);` if you want to prepare for this change.
mongoose.set('strictQuery', false)

const MongoUrl = Mongo_Uri

const ConectToDb = async() => {
    try {
        await mongoose.connect(MongoUrl)
        console.log('Base de Datos Conectada')
    } catch (error) {
        console.log(error)
    }
}

module.exports = {
    ConectToDb
}