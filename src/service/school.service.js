const School = require("../models/school.model");
const { sequelize } = require("../config/db");
const { createSchema, createTablesForSchool } = require("../ulits/schema");

exports.addSchoolService = async (schoolData) => {
  const transaction = await sequelize.transaction(); // Start a transaction

  try {
    if (!schoolData || typeof schoolData !== "object") {
      throw new Error("Invalid school data received.");
    }

    const { schoolName, details, status } = schoolData;

    if (!schoolName) {
      throw new Error("❌ schoolName is required.");
    }

    const schemaName = schoolName.toLowerCase().replace(/\s+/g, "_");

    // ✅ Check if the school already exists
    const existingSchool = await School.findOne({ where: { schemaName } });
    if (existingSchool) {
      throw new Error(`❌ School '${schoolName}' already exists.`);
    }

    // ✅ Create Schema in Database
    await createSchema(schemaName);

    // ✅ Insert School Record in DB
    const school = await School.create(
      {
        schoolName,
        schemaName,
        details,
        status: status || "active",
      },
      { transaction }
    );

    // ✅ Create Tables in the new Schema
    await createTablesForSchool(schemaName);

    await transaction.commit(); // Commit transaction

    return school;
  } catch (error) {
    await transaction.rollback(); // Rollback if error occurs
    console.error("❌ Error adding school:", error.message);
    throw error;
  }
};
