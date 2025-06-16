'use strict';
const bcriptjs = require('bcryptjs');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
     await queryInterface.bulkInsert('users', [{
       nome: 'Rafa',
       email: 'rafa@gmail.com',
       password_hash: await bcriptjs.hash('123456', 8),
       created_at: new Date(),
       updated_at: new Date(),
     },
    {
       nome: 'Rafa2',
       email: 'rafa2@gmail.com',
       password_hash: await bcriptjs.hash('1234567', 8),
       created_at: new Date(),
       updated_at: new Date(),
     },
     {
       nome: 'Rafa3',
       email: 'rafa2@gmail.com',
       password_hash: await bcriptjs.hash('12345678', 8),
       created_at: new Date(),
       updated_at: new Date(),
     }], {});

  },

  async down (queryInterface, Sequelize) {

  }
};
