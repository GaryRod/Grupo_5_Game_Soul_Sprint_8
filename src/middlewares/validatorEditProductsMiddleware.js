const {body} = require('express-validator');
const path = require('path')

const validaciones = [
    body('nombre')
        .notEmpty().withMessage("Debes completar con un nombre")
        .isLength({min: 5}).withMessage("El nombre debe tener al menos 5 caracteres"),
    body('descripcion')
        .notEmpty().withMessage("Debes completar con una despcripción")
        .isLength({min: 50}).withMessage("La descripción debe tener al menos 20 caracteres"),
    body('genero')
        .notEmpty().withMessage("Debes elegir un género"),
    body('edicion')
        .notEmpty().withMessage("Debes elegir una edición"),
    body('consola')
        .notEmpty().withMessage("Debes elegir una consola"),
    body('video')
        .notEmpty().withMessage("Debes agregar una URL")
        .custom((value, {req}) => {
            let video = req.body.video
            let regexEmail = /(https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|www\.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9]+\.[^\s]{2,}|www\.[a-zA-Z0-9]+\.[^\s]{2,})/gi;
                if (!regexEmail.test(video)) {
                    throw new Error ("URL inválida");
                }
            return true
        }),
    body('precio')
        .notEmpty().withMessage("Debes completar con un precio")
        .isNumeric().withMessage("Sólo se permiten números")
        .custom((value, {req})=> {
            if (value <= 0) {
                throw new Error ('Solo se admiten valores mayores 0')
            }
            return true
        }),
    body('imagen').custom((value, {req})=>{
        let file = req.file
        let acceptedExtensions = ['.jpg', '.png', '.gif', '.jpeg']
        if(file){
            let fileExtension = path.extname(file.originalname)
            if (!acceptedExtensions.includes(fileExtension)){
            throw new Error ('Las extensiones permitidas son .jpg, .png, .gif, .jpeg')
            }
        }
        return true;
    })
]

module.exports = validaciones;