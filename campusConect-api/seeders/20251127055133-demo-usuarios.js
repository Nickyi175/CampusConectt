'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Usuarios', [
      {
        nombre: 'Juan Perez',
        correo: 'juan@example.com',
        password: '12345678',
        carrera: 'Ingeniería',
        foto: 'juan.jpg',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nombre: 'Ana Gómez',
        correo: 'ana@example.com',
        password: 'abcdefgh',
        carrera: 'Medicina',
        foto: 'ana.jpg',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ]);
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Usuarios', null, {});
  }
};
