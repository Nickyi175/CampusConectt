'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Comentario extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    Comentario.belongsTo(models.Usuario, {
        foreignKey: 'id_usuario',
        as: 'usuario'
      });
      Comentario.belongsTo(models.Publicacion, {
        foreignKey: 'id_publicacion',
        as: 'publicacion'
      });
    }
  }
  Comentario.init({
    texto: DataTypes.TEXT,
    id_publicacion: DataTypes.INTEGER,
    id_usuario: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Comentario',
    tableName: 'Comentarios',
  });
  return Comentario;
};