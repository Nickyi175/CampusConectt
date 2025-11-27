'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Usuario extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.hasMany(models.Asistencia, { foreignKey: 'id_usuario' });
    this.hasMany(models.Publicacion, { foreignKey: 'id_usuario' });
    this.hasMany(models.Comentario, { foreignKey: 'id_usuario' });
    this.hasMany(models.Evento, { foreignKey: 'id_usuario' });
    }
  }
  Usuario.init({
    nombre: DataTypes.STRING,
    correo: DataTypes.STRING,
    password: DataTypes.STRING,
    carrera: DataTypes.STRING,
    foto: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Usuario',
  });
  return Usuario;
};