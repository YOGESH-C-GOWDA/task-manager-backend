const express = require("express");
const dotenv = require("dotenv");
const morgan = require("morgan");
const colors = require("colors");
const connectToMongoDB = require("./config/database.js")


// Load enviroment variable from the .env folder
dotenv.config({ path: "./config/config.env" });

// Route file
const tm = require("./routes/taskmanager.js")
const auth = require("./routes/auth.js")

// Connect to Mongodb
connectToMongoDB();

const app = express();

// Middleware
app.use(express.json());
if (process.env.NODE_ENV === "development") {
    app.use(morgan('dev'));
}

/*      this is not safe , this headers will allow all requestes without authetication */
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', "*");
    res.setHeader('Access-Control-Allow-Headers', "*");
    next();
})
app.use("/api/v1/tm", tm);
app.use("/api/v1/auth", auth);




const PORT = process.env.PORT || 5000;

app.listen(PORT, () => { console.log(`Server runnning at port ${PORT} in environment ${process.env.NODE_ENV}`.yellow.bold) })


//Handling unhandled rejections

process.on("unhandledRejection", (err, promice) => {
    console.log("\nUnhandled rejection", err.message)
})