const db = require('../../database/models')
const {Op} = require('sequelize');

const usersAPIControler ={
    list: async (req, res)=>{
        let users = await db.User.findAll()
        
        let response = {
                meta:{
                    status: 200,
                    count: users.length,
                    url: req.headers.host + '/api/users'
                },
                data: {
                    list: []
                }
            }
        users.forEach(user => {
            response.data.list.push({
                id: user.id,
                name: user.first_name,
                email: user.email,
                avatar: user.avatar,
                detail: req.headers.host + `/api/users/${user.id}`
            })
            return user
        });
        return res.json(response)
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