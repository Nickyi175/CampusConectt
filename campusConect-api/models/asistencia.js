'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Asistencia extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.belongsTo(models.Usuario, { foreignKey: 'id_usuario' });
      this.belongsTo(models.Evento, { foreignKey: 'id_evento' });
    }
  }
  Asistencia.init({
    id_usuario: DataTypes.INTEGER,
    id_evento: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Asistencia',
  });
  return Asistencia;
};