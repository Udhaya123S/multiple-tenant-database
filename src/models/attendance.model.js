const { DataTypes } = require("sequelize");

const defineAttendanceModel = (sequelize) => {
  return sequelize.define("Attendance", {
    id: { type: DataTypes.UUID, defaultValue: DataTypes.UUIDV4, primaryKey: true },
    studentId: { type: DataTypes.UUID, allowNull: false },
    date: { type: DataTypes.DATEONLY, allowNull: false },
    status: { type: DataTypes.STRING, allowNull: false }
  }, { tableName: "Attendance" });
};

module.exports = defineAttendanceModel;
