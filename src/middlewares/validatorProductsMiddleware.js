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
        if(!file){
            throw new Error ('Debes agregar una imagen')
        } else {
            let fileExtension = path.extname(file.originalname)
            if (!acceptedExtensions.includes(fileExtension)){
            throw new Error ('Las extensiones permitidas son .jpg, .png, .gif, .jpeg')
            }
        }
        return true;
    })
]

module.exports = validaciones;