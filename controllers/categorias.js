const jwt = require('jsonwebtoken');
const { response } = require('express');
const { Categoria } = require('../models');


const obtenerCategorias = async (req, res = response) => {

    // const { limite = 5, desde = 0 } = req.query;

    const token = req.header('x-token');

    const { uid } = jwt.verify(token, process.env.SECRETORPRIVATEKEY);


    const query = { estado: true, usuario: uid };

    const [total, categorias, fechas] = await Promise.all([
        Categoria.countDocuments(query),
        Categoria.find(query)
            .populate('usuario', 'nombre'),
        Categoria.find(query).select(['updatedAt'])
        // .skip( Number( desde ) )
        // .limit(Number( limite ))
    ]);

    res.json({ total, categorias, id: JSON.stringify(fechas) });
}
const obtenerCategoriasTienda = async (req, res = response) => {


    const { idUser } = req.params;

    const query = { estado: true, usuario: idUser };

    const [total, categorias, fechas] = await Promise.all([
        Categoria.countDocuments(query),
        Categoria.find(query)
            .populate('usuario', 'nombre'),
        Categoria.find(query).select(['updatedAt'])
        // .skip( Number( desde ) )
        // .limit(Number( limite ))
    ]);

    res.json({ total, categorias, id: JSON.stringify(fechas) });
}
const obtenerCategoria = async (req, res = response) => {

    const { id } = req.params;
    const categoria = await Categoria.findById(id)
        .populate('usuario', 'nombre');

    res.json(categoria);

}

const crearCategoria = async (req = request, res = response) => {

    const { nombre } = req.body;

    const categoriaDB = await Categoria.findOne({ nombre });

    if (categoriaDB) {
        return res.status(400).json({
            msg: `La categoria ${categoriaDB.nombre}, ya existe`
        });
    }

    // Generar la data a guardar
    const data = {
        nombre,
        usuario: req.usuario._id
    }

    const categoria = new Categoria(data);

    // Guardar DB
    await categoria.save();

    await categoria
        .populate('usuario', 'nombre')
        .execPopulate();

    res.status(201).json(categoria);

}

const actualizarCategoria = async (req, res = response) => {

    const { id } = req.params;
    const { usuario, ...data } = req.body;

    data.usuario = req.usuario._id;

    const categoria = await Categoria.findByIdAndUpdate(id, data, { new: true });

    res.json(categoria);

}

const borrarCategoria = async (req, res = response) => {

    const { id } = req.params;
    const categoriaBorrada = await Categoria.findByIdAndUpdate(id, { estado: false }, { new: true });

    res.json(categoriaBorrada);
}




module.exports = {
    crearCategoria,
    obtenerCategorias,
    obtenerCategoriasTienda,
    obtenerCategoria,
    actualizarCategoria,
    borrarCategoria
}