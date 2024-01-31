const express = require("express");
const router = express.Router();
const { db } = require("../database/db-config");
const productivityController = require("../controllers/productivityController");

// get all tasks
router.get("/", productivityController.getAllTasks);

// Creating one
router.post("/newTask", productivityController.createNewTask);

// Get one
router.get("/task/:id", productivityController.getOneTask);

// deleting one
router.delete("/removetask/:id", productivityController.deleteTask);

module.exports = router;