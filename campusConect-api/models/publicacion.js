'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Publicacion extends Model {
    static associate(models) {
      this.belongsTo(models.Usuario, { foreignKey: 'id_usuario' });
      this.hasMany(models.Comentario, { foreignKey: 'id_publicacion' });
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