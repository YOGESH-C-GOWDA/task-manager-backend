const express = require("express");
const User = require("../models/User.js")

const router = express.Router();


// @desc     Register user
// @route    POST /api/v1/auth/Register
// @access   public
router.post("/register", async (req, res, next) => {
    try {

        const { name, email, password, role } = req.body;

        const user = await User.create({
            name,
            email,
            password,
            role
        })

        if (user) {
            res.status(201).json({
                success: true,
                data: "User registered to datatbase successfull"
            })
        }
    } catch (err) {
        console.log(`Error in registering user in auth.js ${err.message}`.red.underline)
        res.status(400).json({
            success: false,
            data: err.message
        })
    }
})

// @desc     login user user
// @route    POST /api/v1/auth/login
// @access   public
router.post("/login", async (req, res, next) => {
    try {

        const { email, password } = req.body;



        // Checking if email or password is empty
        if (!email || !password) {
            res.status(400).json({
                success: false,
                data: "Invalid Email or password"
            })

            return next()
        }

        const user = await User.findOne({ email: email, password: password }).select("+password")


        // Search for valid user in database via email and password
        if (user) {
            res.status(201).json({
                success: true,
                data: `User Login successfull - ${user}`
            })
        } else {
            res.status(400).json({
                success: false,
                data: "Invalid Email or password"
            })

            return next()

        }
    } catch (err) {
        console.log(`Error in logginin user in auth.js ${err.message}`.red.underline)
        res.status(400).json({
            success: false,
            data: err.message
        })
    }
})





module.exports = router;