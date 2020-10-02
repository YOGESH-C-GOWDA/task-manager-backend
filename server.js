const express = require("express");
const dotenv = require("dotenv")

// Load enviroment variable from the .env folder
dotenv.config({
    path: './config/config.env'
});

const app = express();

// Routes
// app.

const PORT = process.env.PORT || 5000;

// app.listen(process.env.PORT, () => { console.log(`Server runnning at port ${process.env.PORT} in environment ${process.env.NODE_ENV}`) })
app.listen(5000, () => { console.log("server running in 5000") })