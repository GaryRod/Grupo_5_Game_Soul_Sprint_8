const {validationResult} = require('express-validator');
const db = require('../../database/models')
const {Op} = require('sequelize');
const methodOverride = require('method-override');


const usersAPIControler ={
    list: (req, res)=>{
        db.User.findAll()
        .then(user=> {
            return res.status(200).json({
                meta:{
                    status: 200,
                    count: user.length,
                    url: '/api/users'
                },
                data:
                    {
                    user
                }
            
            })
        })
    },
    detail: (req, res) => {
        db.User.findByPk(req.params.id)
            .then(user => {
                return res.status(200).json({
                    meta: {
                        url: req.headers.host + `/api/users/${req.params.id}`,
                        status: 200
                    },
                    data: {
                        id: user.id,
                        name: user.first_name,
                        email: user.email,
                        avatar: user.avatar,
                        typeUser: user.type_user
                    },
                })
            })
    }


}
module.exports = usersAPIControler