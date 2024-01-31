const { db } = require("../database/db-config");
const productivityModel = require("../models/productivityModel");

module.exports = {
    getAllTasks: async (req, res) => {
        // catches error
        productivityModel.queryAllTasks(function (err, result) {
            if (err) res.status(500).json("Cannot fetch tasks");
            res.status(200).json(result);
        })
    },

    getOneTask: async (req, res) => {
        let id = req.params.id;
        productivityModel.queryOneTask(id, function (err, result) {
            if (err) {
                res.status(500).json(`Cannot find task with id: ${id}`);
            } else {
                res.status(200).json(result);
            }
        })
    },

    createNewTask: async (req, res) => {
        let taskInfo = req.body;
        productivityModel.queryNewTask(taskInfo, function (err, result) {
            if (err) res.status(400).json("Failed to create task");
            res.status(201).json(result);
        })
    },

    deleteTask: async (req, res) => {
        let id = req.params.id;
        productivityModel.queryDeleteTask(id, function (err, result) {
            if (err) res.status(400).json(err);
            res.status(200).json(`Successfully deleted task: ${id}`);
        })
    }
}
