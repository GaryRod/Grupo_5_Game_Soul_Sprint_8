const {validationResult} = require('express-validator');
const db = require('../database/models')
const {Op} = require('sequelize')

const productController = {
    products: async (req, res) => {
		let productos = await db.Game.findAll({
			include: ["images"]
		})
        res.render('./products/products', {productos})
    },
    productDetails: (req, res) =>{
        db.Game.findByPk(req.params.id, 
			{include:['images', 'genres', 'consoles', 'editions']})
        .then(producto => {
            res.render('./products/productDetail', {producto})
        })
		.catch(error => res.send(error))
    },
    productCart: (req,res)=>{
        res.render('./products/productCart')
    },
    buyCart: (req, res)=>{
        res.redirect('/users/login')
    },
    createProduct: async (req,res) => {
        let allGenres = await db.Genre.findAll();
        let allEditions = await db.Edition.findAll();
        let allConsoles = await db.Console.findAll();
        res.render('./products/createProduct', {allGenres, allEditions, allConsoles})
    },
    store: async (req, res) => {
        let allGenres = await db.Genre.findAll();
        let allEditions = await db.Edition.findAll();
        let allConsoles = await db.Console.findAll();
        const errores = validationResult(req);

        if (errores.errors.length > 0 ) {
            return res.render('./products/createProduct',{
                errors: errores.mapped(),
                oldData: req.body,
                allGenres,
                allEditions,
                allConsoles
            })
        }

        let producto = await db.Game.create({
            name_game: req.body.nombre,
			description: req.body.descripcion,
			price: req.body.precio,
			video: req.body.video,
			editions_id: req.body.edicion,
			genres_id: req.body.genero,
			consoles_id: req.body.consola
        })

		await db.Image.create({
			img_url: req.file.filename,
			games_id: producto.id
		})
        res.redirect('/')
    },
    editProduct: async (req, res) => {
        let allGenres = await db.Genre.findAll();
        let allEditions = await db.Edition.findAll();
        let allConsoles = await db.Console.findAll();
        let productToEdit = await db.Game.findByPk(req.params.id,
            {include: ['images']})

        res.render('./products/editProduct', {productToEdit, allGenres, allEditions, allConsoles})
    },
    update: async (req, res) => {
        let allGenres = await db.Genre.findAll(); 
        let allEditions = await db.Edition.findAll();
        let allConsoles = await db.Console.findAll();
        let productToEdit = await db.Game.findByPk(req.params.id)
        const errores = validationResult(req);
        
        if (errores.errors.length > 0 ) {
            return res.render('./products/editProduct',{
                errors: errores.mapped(),
                oldData: req.body,
                allGenres,
                allEditions,
                allConsoles,
                productToEdit
            })
        }

        await db.Game.update({
			name_game: req.body.nombre,
			description: req.body.descripcion,
			price: req.body.precio,
			video: req.body.video,
			editions_id: req.body.edicion,
			genres_id: req.body.genero,
			consoles_id: req.body.consola
        },{
            where: {id: req.params.id}
        })
		await db.Image.destroy({
            where: {games_id: req.params.id},
			force: true
        })
		await db.Image.create({
			img_url: req.file ? req.file.filename : req.body.oldImage,
			games_id: req.params.id
		})
        res.redirect('/')
    }, 
    destroy: async (req, res)=>{
        await db.Image.destroy({
            where: {games_id: req.params.id},
            force: true
        })
        await db.Game.destroy({
            where: {id: req.params.id},
            force: true
        })
        res.redirect('/')
    },
    favoritos: (req, res) => {
        db.Game.findAll({
        include: ['images']
    })
    .then(producto => {
			res.render('./products/favoritos', {favoritos: producto})})
		.catch(error => res.send(error))
    },
	search: async (req, res) => {
		let search = req.query.search;
		let productos = await db.Game.findAll({
			where: {
				name_game: { [Op.like]: "%" + search + "%" }
			},
			include: ["images"]
		})
		res.render("products/results", {productos, search});
	}
}

module.exports=productController