const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const taskRoutes = require("./routes/taskRoutes");

const app = express();

// Middleware
app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

// MongoDB connection
mongoose.connect("mongodb+srv://fsjuser:clixon037@fsj-cluster.cygstow.mongodb.net/")

  .then(() => console.log("MongoDB connected"))
  .catch(err => console.log(err));

// Routes
app.use("/", taskRoutes);

// Server
app.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});