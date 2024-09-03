const express = require("express");
const mongoose = require("mongoose");
const routes = require("./routes/student_routes")
require("dotenv").config();

const app = express();
const port = process.env.port || 3000

app.use(express.json());
app.use("/students",routes);

mongoose.connect(process.env.MONGO_URI)
.then(()=>console.log("Connection Sucessfully"))
.catch((error)=>console.log("Connection Failed" ,error));

app.listen(port, () => console.log(`Server is listening on port ${port}`));