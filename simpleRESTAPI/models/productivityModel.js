const productivityModel = require("../models/productivityModel");
const { db } = require("../database/db-config");

module.exports = {
    queryAllTasks: function (callback) {
        const query = "SELECT * FROM tasks";
        db.query(query, function (err, data) {
            callback(err, data);
        })
    },

    // this method uses callback function
    queryOneTask: function (id, callback) {
        // ? preventts SQL injection by separating SQL command from the data being inserted into the command
        // database engine safely inserts the values
        const query = `SELECT * FROM tasks WHERE id = ?`
        // [] means array
        db.query(query, [id], function (err, data) {
            callback(err, data);
        })
    },

    queryNewTask: function (taskInfo, callback) {
        const query = `INSERT INTO tasks (name, numOfHours, completedDate) VALUES(?, ?, ?)`
        db.query(query, [taskInfo.name, taskInfo.numOfHours, taskInfo.completedDate], function (err, data) {
            callback(err, data);
        })
    },

    queryDeleteTask: function (id, callback) {
        const query = `DELETE FROM tasks WHERE id = ?`;
        db.query(query, [id], function (err, data) {
            callback(err, data);
        })
    }
}