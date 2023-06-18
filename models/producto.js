const { Schema, model } = require('mongoose');
/*var mongoose = require('mongoose')
require('mongoose-double')(mongoose);

var SchemaTypes = mongoose.Schema.Types;*/
const ProductoSchema = Schema({
    nombre: {
        type: String,
        required: [true, 'El nombre es obligatorio'],
        unique: true
    },
    estado: {
        type: Boolean,
        default: true,
        required: true
    },
    usuario: {
        type: Schema.Types.ObjectId,
        ref: 'Usuario',
        required: true
    },
    precio: {
        //type: SchemaTypes.Double,
        type: Number,
        default: 0
    },
    cantidad: {
        type: Number,
        default: 0
    },
    cantidadInit: {
        type: Number,
        default: 0
    },
    codbarras: {
        type: String,
        default: 0
    },
    vendidos: {
        type: Number,
        default: 0
    },
    categoria: {
        type: Schema.Types.ObjectId,
        ref: 'Categoria',
        required: true
    },
    disponible: { type: Boolean, defult: true },
    img: { type: String },
},
    { timestamps: true });


ProductoSchema.methods.toJSON = function () {
    const { __v, estado, ...data } = this.toObject();
    return data;
}


module.exports = model('Producto', ProductoSchema);
