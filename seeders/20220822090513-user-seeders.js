"use strict";
const bcrypt = require("bcrypt");

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("users", [
      {
        name: "Windhu",
        profession: "Admin Micro",
        role: "admin",
        email: "email@mail.com",
        password: await bcrypt.hash("password123", 10),
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        name: "Aponsa",
        profession: "Front End Developer",
        role: "student",
        email: "aponsa@mail.com",
        password: await bcrypt.hash("password123", 10),
        created_at: new Date(),
        updated_at: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("users", null, {});
  },
};
