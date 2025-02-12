const { DataTypes } = require("sequelize");

const defineStudentModel = (sequelize) => {
  return sequelize.define("Student", {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    age: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  });
};

module.exports = defineStudentModel;
