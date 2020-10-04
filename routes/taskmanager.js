const express = require("express");


const router = express.Router();

// Routes
router.get("/", (req, res) => {

    res.status(200).json({
        success: true,
        data: "hello iam Backend"
    })
})

router.post("/", (req, res) => {

    res.status(200).json({
        success: true,
        data: "POST request to task manager successfull"
    })
})

module.exports = router;