const {model, Schema} = require('mongoose');

const inmuebleSchema = new Schema({
    piso: Number,
    letra: String,
    extensión: Number,
    numero_habitaciones: Number,
    alquilado: Boolean,
    nombre_propietario: String,
    mail: String
}, {timestamps: true, versionKey: false});

module.exports = model('inmueble',inmuebleSchema);