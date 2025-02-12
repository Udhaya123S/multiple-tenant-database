const { DataTypes } = require("sequelize");

const defineStaffModel = (sequelize,schemaName) => {
  return sequelize.define("Staff", {
    id: { type: DataTypes.INTEGER, primaryKey: true },
    name: { type: DataTypes.STRING, allowNull: false },
    role: { type: DataTypes.STRING, allowNull: false }
  }, { 
    tableName: "Staffs",
    schema: schemaName,
   });
};

module.exports = defineStaffModel;
