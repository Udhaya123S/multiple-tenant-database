const { sequelize } = require("../config/db.js"); 
const { Sequelize, DataTypes } = require("sequelize");



const Student = require("./student.model")(sequelize, DataTypes);
const Teacher = require("./staff.model.js")(sequelize, DataTypes);
const Class = require("../models/attendance.model.js")(sequelize, DataTypes);

module.exports = { sequelize, Student, Teacher, Class };
