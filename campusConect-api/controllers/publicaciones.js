const { Publicacion, Usuario } = require('../models');

const createNewPublicacion = async (request, response) => {
    try {
        if (!request.body || Object.keys(request.body).length === 0) {
            return response.status(400).json({
                status: "Bad Request",
                message: "Request body is missing"
            });
        }

        // Validar que el usuario existe
        const userExists = await Usuario.findByPk(request.body.id_usuario);
        if (!userExists) {
            return response.status(404).json({
                status: "User Not Found",
                message: "El usuario que intenta asignar a la publicación no existe"
            });
        }

        const newPublicacion = await Publicacion.create(request.body);
        response.status(201).json({
            status: "success: Publicacion creada",
            data: newPublicacion
        });

    } catch (error) {
        response.status(500).json({
            status: "Error",
            message: error.message
        });
    }
};

const getAllPublicaciones = async (request, response) => {
    try {
        const publicaciones = await Publicacion.findAll();
        return response.status(200).json({
            status: 'success',
            data: publicaciones
        });
    } catch (error) {
        return response.status(500).json({
            status: 'Error',
            message: error.message
        });
    }
};

module.exports = { createNewPublicacion, 
    getAllPublicaciones };
