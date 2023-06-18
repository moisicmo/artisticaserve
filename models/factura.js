// const { Schema, model } = require('mongoose');

// const ProductoSchema = Schema({
//     categoria: {
//         type: Schema.Types.ObjectId,
//         ref: 'Categoria',
//         required: true
//     },
//     img: { type: String },
//     nombre: {
//         type: String,
//         required: [true, 'El nombre es obligatorio'],
//         unique: true
//     },
//     precio: {
//         type: Number,
//         default: 0
//     },
//     cantidad: {
//         type: Number,
//         default: 0
//     },
//     codbarras: {
//         type: String,
//         default: '0'
//     },
//     tipoproducto: {
//         type: String,
//         required: true,
//         default: 'PRODUCTO',
//         emun: ['PRODUCTO', 'SERVICIO']
//     },
//     codigoUnidadMedida: {
//         type: String,
//         default: '0'
//     },
//     vendidos: {
//         type: Number,
//         default: 0
//     },
//     codigoSin: {
//         type: String,
//         default: '0'
//     },
//     codigoActividadEconomica: {
//         type: String,
//         default: '0'
//     },
//     estado: {
//         type: Boolean,
//         default: true,
//         required: true
//     },
//     usuario: {
//         type: Schema.Types.ObjectId,
//         ref: 'Usuario',
//         required: true
//     },
//     disponible: { type: Boolean, defult: true },
// });


// ProductoSchema.methods.toJSON = function () {
//     const { __v, estado, ...data } = this.toObject();
//     return data;
// }


// module.exports = model('Producto', ProductoSchema);
