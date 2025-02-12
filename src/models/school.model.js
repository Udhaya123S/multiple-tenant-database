const { DataTypes } = require("sequelize");
const  {sequelize } = require("../config/db");

const School = sequelize.define("School", {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    schoolName: {
        type: DataTypes.STRING,
        allowNull: false
    },
    schemaName: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    details: {
        type: DataTypes.TEXT,
        allowNull: true
    },
    status: {
        type: DataTypes.STRING,
        defaultValue: true,
        defaultValue: "active"
    }
}, {
    tableName: "schools",
    schema: "public",
    timestamps: true
});

module.exports = School;
