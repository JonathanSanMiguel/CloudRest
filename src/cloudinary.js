const cloudinary = require('cloudinary').v2
const { Cloudinary_CloudName, Cloudinary_ApiKey, Cloudinary_ApiSecret } = require('../config')

//Datos de la cuenta de cloudinary
cloudinary.config({ 
    cloud_name: Cloudinary_CloudName, 
    api_key: Cloudinary_ApiKey, 
    api_secret: Cloudinary_ApiSecret,
    secure: true
})

// Subir imagen
async function UploadImage(filePath) {
    return await cloudinary.uploader.upload(filePath)
}

// Borrar imagen
async function DeleteImage(public_id) {
    return await cloudinary.uploader.destroy(public_id)
}

module.exports = {
    UploadImage,
    DeleteImage
}