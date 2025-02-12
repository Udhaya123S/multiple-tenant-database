const {sequelize }= require("./src/config/db"); 
const express = require("express");
const bodyParser = require("body-parser");
const schoolRoutes = require("./src/route/school.routes");

const app = express();

app.use(bodyParser.json()); 
app.use(express.json()); 
app.use(bodyParser.json());

app.use("/api/school", schoolRoutes);

sequelize.sync().then(() => {
  console.log('Database synchronized');
}).catch((error) => {
  console.error('Error synchronizing the database:', error);
});


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`🚀 Server running on port ${PORT}`);
});
