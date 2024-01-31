require("dotenv").config();

const express = require("express");
const app = express();
const { db } = require("./database/db-config");
app.use(express.json());

const port = 3000;

// Routes import
const productivityRouter = require("./routes/productivityRoutes");
app.use("/productivity", productivityRouter);

db.connect(function(err) {
    if(err) console.error(err);
    console.log("Connected to database");
});

app.listen(port, () => console.log("Server started"));