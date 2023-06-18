const { Router } = require('express');
const { check } = require('express-validator');


const { validarCampos, validarJWT } = require('../middlewares');


const { login, googleSignin, validarTokenUsuario } = require('../controllers/auth');


const router = Router();

router.post('/login', [
    check('cliente.usuario', 'El correo es obligatorio').not().isEmpty(),
    check('cliente.nit', 'El correo es obligatorio').not().isEmpty(),
    check('cliente.password', 'La contraseña es obligatoria').not().isEmpty(),
    validarCampos
], login);

router.post('/google', [
    check('id_token', 'El id_token es necesario').not().isEmpty(),
    validarCampos
], googleSignin);


router.get('/', [
    validarJWT
], validarTokenUsuario);



module.exports = router;