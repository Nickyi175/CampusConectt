const { Usuario } = require('../models');

const createNewUser = async (request, response) => {
    try{
        console.log(request.body.length == 0)
        if (!request.body || Object.keys(request.body).length === 0) {
            response.status(400).json({
                status: "Bad Request",
                message: "Request body is missing"
            })
        
        }else{        
            const repeatEmail = await Usuario.findOne({
                where: {correo: request.body.correo}

            })  //busco si el correo ya existe()
            if(!repeatEmail){
            const newUser = await Usuario.create(request.body) //creo un nuevo usuario con los datos del request
            response.status(201).json({
                status: "success: User Created",    
                data: newUser
                })
            }else{
                response.status(409).json({
                    status: "Email Conflict",//si el correo ya existe, envio un error
                    message: "Email already exists, please use another one"
                }) 
    
            }
        }
    }catch(error){
        response.status(500).json({
            status: "Error", 
            message: error.message
        })
    }
};

const getAllUsers = async (request, response) => {
                try {
                    const users = await Usuario.findAll();
                    return response.status(200).json({
                        status: 'success',
                        data: users,
                    });
                } catch (error) {
                    return response.status(500).json({
                        status: 'Error',
                        message: error.message,
                    });
                }
            };

module.exports = { createNewUser, 
                    getAllUsers,

};