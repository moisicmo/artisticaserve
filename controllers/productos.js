const { response } = require('express');
const jwt = require('jsonwebtoken');

const Usuario = require('../models/usuario');
const { Producto } = require('../models');
const cloudinary = require('cloudinary').v2
cloudinary.config( process.env.CLOUDINARY_URL );


const obtenerProductos = async(req, res = response ) => {

    //const { limite = 10, desde = 0 } = req.query;
    //const query = { estado: true, categoria: '61fc69b3365927569845980f' };
    const token = req.header('x-token');

    const { uid } = jwt.verify( token, process.env.SECRETORPRIVATEKEY );

        // leer el usuario que corresponde al uid
        //const usuario = await Usuario.findById( uid );

    const query = { estado: true, usuario: uid };

    const [ total, productos, fechas ] = await Promise.all([
        Producto.countDocuments(query),
        Producto.find(query)
            .populate('usuario', 'nombre')
            .populate('categoria', 'nombre'),
        Producto.find(query).select(['updatedAt'])
            //.populate({ path: 'usuario', name: { $ne: 'David Asturizaga' } })
            //.skip( Number( desde ) )
            //.limit(Number( limite ))
            
    ]);

    res.json({total,productos,id:JSON.stringify(fechas)});
}
const obtenerProductosTienda = async(req, res = response ) => {


    const { idUser } = req.params;

        // leer el usuario que corresponde al uid
        //const usuario = await Usuario.findById( uid );

    const query = { estado: true, usuario: idUser };

    const [ total, productos, fechas ] = await Promise.all([
        Producto.countDocuments(query),
        Producto.find(query)
            .populate('usuario', 'nombre')
            .populate('categoria', 'nombre'),
        Producto.find(query).select(['updatedAt'])
            //.populate({ path: 'usuario', name: { $ne: 'David Asturizaga' } })
            //.skip( Number( desde ) )
            //.limit(Number( limite ))
            
    ]);

    res.json({total,productos,id:JSON.stringify(fechas)});
}
/*
const obtenerProductos = async(req, res = response ) => {

    //const { limite = 10, desde = 0 } = req.query;
    const query = { estado: true };

    const [ total, productos ] = await Promise.all([
        Producto.countDocuments(query),
        Producto.find(query)
            .populate('usuario', 'nombre')
            .populate('categoria', 'nombre')
            //.skip( Number( desde ) )
            //.limit(Number( limite ))
    ]);

    res.json(productos);
}
*/

const obtenerProducto = async(req, res = response ) => {

    const { id } = req.params;
    const producto = await Producto.findById( id )
                            .populate('usuario', 'nombre')
                            .populate('categoria', 'nombre');

    res.json( producto );

}

const crearProducto = async(req, res = response ) => {

    const { estado, usuario, ...body } = req.body;
try {
    const token = req.header('x-token');
    const { uid } = jwt.verify( token, process.env.SECRETORPRIVATEKEY );
    const productoDB = await Producto.findOne({ nombre: body.nombre , usuario: uid});

    
    /*if ( productoDB ) {
        return res.status(400).json({
            msg: `El producto ${ productoDB.nombre }, ya existe`
        });
    }*/

    if ( productoDB ) {
        return res.status(400).json({
            msg: `El producto ${ productoDB.nombre }, ya existe`
        });
    }



    //agregar ubicación de la imagen
    const { tempFilePath } = req.files.archivo
    const { secure_url } = await cloudinary.uploader.upload( tempFilePath, {folder: 'productos'} );
    //customer.cus_img = secure_url;

    // Generar la data a guardar
    const data = {
        ...body,
        nombre: body.nombre,
        usuario: req.usuario._id,
        precio: body.precio,
        descripcion: body.descripcion,
        cantidad: body.cantidad,
        codbarras: body.codbarras,
        vendidos: body.vendidos,
        img: secure_url
    }
console.log(body.descripcion);
    const producto = new Producto( data );

    // Guardar DB
    const nuevoProducto = await producto.save();
    await nuevoProducto
        .populate('usuario', 'nombre')
        .populate('categoria', 'nombre')
        .execPopulate();

    res.json( nuevoProducto );
} catch (error) {
    res.status(500).json( error );
}
    

}

const actualizarProducto = async( req, res = response ) => {

    const token = req.header('x-token');

    const { id } = req.params;
    const { estado, usuario, ...data } = req.body;

    const { uid } = jwt.verify( token, process.env.SECRETORPRIVATEKEY );

    data.usuario = uid;
    let producto = await Producto.findById( id );

    const nombreArr = producto.img.split('/');
    const nombre    = nombreArr[ nombreArr.length - 1 ];
    const [ public_id ] = nombre.split('.');
    await cloudinary.uploader.destroy( 'productos/'+public_id );
    //
    //agregar ubicación de la imagen
    const { tempFilePath } = req.files.archivo
    const { secure_url } = await cloudinary.uploader.upload( tempFilePath, {folder: 'productos'} );
    //
    data.img = secure_url;

    producto = await Producto.findByIdAndUpdate(id, data, { new: true });

    await producto
        .populate('usuario', 'nombre')
        .populate('categoria', 'nombre')
        .execPopulate();
        
    res.json( producto );

}

const borrarProducto = async(req, res = response ) => {

    const { id } = req.params;
    let producto = await Producto.findById( id );

    const nombreArr = producto.img.split('/');
    const nombre    = nombreArr[ nombreArr.length - 1 ];
    const [ public_id ] = nombre.split('.');
    await cloudinary.uploader.destroy( 'productos/'+public_id );
    //
    const productoBorrado = await Producto.findByIdAndUpdate( id, { estado: false }, {new: true });

    res.json( productoBorrado );
}

module.exports = {
    crearProducto,
    obtenerProductos,
    obtenerProductosTienda,
    obtenerProducto,
    actualizarProducto,
    borrarProducto
}