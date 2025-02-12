const { addSchoolService } = require("../service/school.service");

exports.addSchool = async (req, res) => {
  try {
    console.log("📥 Request body:", req.body);

    if (!req.body) {
      return res.status(400).json({ message: "Request body is missing." });
    }

    const school = await addSchoolService(req.body);

    res.status(201).json({ message: "✅ School added successfully", school });
  } catch (error) {
    console.error("❌ Error adding school:", error);
    res.status(500).json({ message: "Internal server error", error: error.message });
  }
};
