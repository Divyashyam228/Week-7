const express = require("express");
const router = express.Router();
const Task = require("../models/Task");

// Show all tasks
router.get("/", async (req, res) => {
  const tasks = await Task.find();
  res.render("index", { tasks });
});

// Add task page
router.get("/add", (req, res) => {
  res.render("add");
});

// Create task
router.post("/add", async (req, res) => {
  const newTask = new Task(req.body);
  await newTask.save();
  res.redirect("/");
});

// Edit page
router.get("/edit/:id", async (req, res) => {
  const task = await Task.findById(req.params.id);
  res.render("edit", { task });
});

// Update task
router.post("/edit/:id", async (req, res) => {
  await Task.findByIdAndUpdate(req.params.id, req.body);
  res.redirect("/");
});

// Delete task
router.get("/delete/:id", async (req, res) => {
  await Task.findByIdAndDelete(req.params.id);
  res.redirect("/");
});

module.exports = router;