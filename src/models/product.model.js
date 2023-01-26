const mongoose = require('mongoose')

const ProductSchema = mongoose.Schema({
    image:{
        public_id: String,
        secure_url: String
    },
    nombre: {
        type: String,
        require: true,
        trim: true,
        unique: true
    },
    descripcion: {
        type: String,
        trim: true
    },
    precio: {
        type: String
    }
},
{
    timestamps: true
})

module.exports = mongoose.model('Product', ProductSchema)