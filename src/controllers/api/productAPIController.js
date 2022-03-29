const {validationResult} = require('express-validator');
const db = require('../../database/models')
const {Op} = require('sequelize');
const methodOverride = require('method-override');

const productAPIController = {
    list: async(req, res) => {
		let games = await db.Game.findAll({
                include: ["images", "genres", "editions", "consoles"]
            })
        games[0].url = '/api/products/:id'
        let genres = await db.Genre.findAll({
            include: ["games"]
        })

        let typesGenres = {
            Accion: genres[0].games.length || 0,
            Aventura: genres[1].games.length || 0,
            FPS: genres[2].games.length || 0,
            Estrategia: genres[3].games.length || 0,
            Deportes: genres[4].games.length || 0
        }
        let response = {
            meta: {
                count: games.length,
                countByGenres: typesGenres,
                url: req.headers.host + '/api/products',
                status: 200
            },
            data: {
                list: []
            },
        }

        games.forEach(game => {
            response.data.list.push({
                // game,
                id: game.id,
                name: game.name_game,
                description: game.description,
                price: game.price,
                image: game.images[0].img_url,
                video: game.video,
                genre: game.genres.name_genre,
                edition: game.editions.name_editions,
                detail: req.headers.host +  `/api/products/${game.id}`
            })
            return game
        });
        return res.json(response)
    },
    detail: (req, res) => {
        db.Game.findByPk(req.params.id, 
            {include: ["images", "genres", "editions", "consoles"]}
            )
            .then(game => {
                return res.status(200).json({
                    meta: {
                        url: req.headers.host + `/api/products/${req.params.id}`,
                        status: 200
                    },
                    data: {
                        id: game.id,
                        name: game.name_game,
                        price: game.price,
                        description: game.description,
                        image: req.headers.host + "/images/" + game.images[0].img_url,
                        video: game.video.includes('https://') ? game.video : 'hhtps://' + game.video,
                        genre: game.genres.name_genre,
                        edition: game.editions.name_editions,
                        console: game.consoles.name_console,
                        stock: game.stock,
                        stock_min: game.stock_min,
                        stock_max: game.stock_max,
                    },
                })
            })
    }
}

module.exports = productAPIController