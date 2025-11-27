'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Publicacion extends Model {
    static associate(models) {
      // Cada publicación pertenece a 1 usuario
      Publicacion.belongsTo(models.Usuario, {
        foreignKey: 'id_usuario'
      });
    }
  }
  Publicacion.init({
    titulo: DataTypes.STRING,
    contenido: DataTypes.TEXT,
    categoria: DataTypes.STRING,
    fecha: DataTypes.DATE,
    id_usuario: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Publicacion',
    tableName: 'Publicaciones',
  });
  return Publicacion;
};