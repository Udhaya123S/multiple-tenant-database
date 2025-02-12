const express = require("express");
const router = express.Router();
const schoolController = require("../controller/school.controller");

router.post("/add", schoolController.addSchool);

module.exports = router;
