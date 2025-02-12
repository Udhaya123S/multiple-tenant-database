
const { Sequelize } = require("sequelize");
const {sequelize} = require("../config/db");
const { Student, Teacher, Class } = require("../models"); 

const { QueryTypes } = require("sequelize");


async function createSchema(schemaName) {
  try {
    await sequelize.query(`CREATE SCHEMA IF NOT EXISTS "${schemaName}"`);
    console.log(`✅ Schema "${schemaName}" created successfully.`);
  } catch (error) {
    console.error(`❌ Error creating schema "${schemaName}":`, error);
    throw error;
  }
}

module.exports = { createSchema };

  

async function createTablesForSchool(schoolName) {
  try {
    console.log(`🔄 Checking schema: "${schoolName}"...`);

    if (!sequelize) throw new Error("❌ Sequelize instance is not initialized.");

    // ✅ Check if Schema Exists
    const [schemaExists] = await sequelize.query(
      `SELECT schema_name FROM information_schema.schemata WHERE schema_name = :schoolName`,
      { replacements: { schoolName }, type: Sequelize.QueryTypes.SELECT }
    );

    if (!schemaExists) {
      throw new Error(`❌ Schema "${schoolName}" does not exist.`);
    }

    console.log(`✅ Schema "${schoolName}" exists. Creating tables...`);

    // ✅ Assign Schema to Models and Sync Tables
    const Student = StudentModel(sequelize, Sequelize, schoolName);
    const Teacher = TeacherModel(sequelize, Sequelize, schoolName);
    const Class = ClassModel(sequelize, Sequelize, schoolName);

    await Student.sync();
    await Teacher.sync();
    await Class.sync();

    console.log(`✅ Tables successfully created in schema "${schoolName}".`);
    return true;
  } catch (error) {
    console.error(`❌ Error creating tables in schema "${schoolName}":`, error);
    throw error;
  }
}
  
  



    

module.exports = { createSchema, createTablesForSchool };
