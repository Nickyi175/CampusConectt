'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Evento extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Evento.belongsTo(models.Usuario, {
        foreignKey: 'id_usuario',
        as: 'usuario'
      });

      this.hasMany(models.Asistencia, {
    foreignKey: 'id_evento'
  });
    }
  }
  Evento.init({
    tipo_evento: DataTypes.STRING,
    id_usuario: DataTypes.INTEGER,
    titulo: DataTypes.STRING,
    descripcion: DataTypes.TEXT,
    fecha: DataTypes.DATE,
    lugar: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Evento',
    tableName: 'Eventos',
  });
  return Evento;
};