// Fetching USERS INFO and perform operation such as delete ,update and find.
const express = require("express");
const User = require("../models/User.js");

//Merge the route from tasks
const tasks = require('./tasks.js');

const router = express.Router();

// Reroute to other routes Here to Tasks wrt Users
router.use('/:usersId/tasks', tasks)

// @desc     Get users
// @route    GET /api/v1/users
// @access   private by admin
router.get("/", async (req, res, next) => {
    try {

        const user = await User.find()

        if (user) {
            res.status(201).json(user)
            console.log("users from data base", user)
        } else {
            res.status(401).json({
                success: false,
                data: "No data Found"
            })
        }

    } catch (err) {
        console.log(`Error findind Users from database at auth.js ${err.message}`.red.underline)
        res.status(401).json({
            success: false,
            data: err.message
        })
    }
    next();
})


// @desc     Get single user by id
// @route    GET /api/v1/users/:id
// @access   private by admin
router.get("/:id", async (req, res, next) => {
    try {

        console.log(req.params.id);

        const user = await User.findById(req.params.id);

        console.log("user info by id", user);

        if (user) {
            res.status(201).json(user)
            console.log("users from data base", user)
        } else {
            res.status(401).json({
                success: false,
                data: "No data Found"
            })
        }

    } catch (err) {
        console.log(`Error findind Users from database at auth.js ${err.message}`.red.underline)
        res.status(401).json({
            success: false,
            data: err.message
        })
    }
    next();
})


// @desc     Update single user by Id
// @route    PUT /api/v1/users/:id
// @access   private by admin

router.put("/:id", async (req, res, next) => {
    try {

        console.log(req.params.id);

        const user = await User.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });

        console.log("user info by id", user);

        if (user) {
            res.status(201).json(user)
            console.log("users from data base", user)
        } else {
            res.status(401).json({
                success: false,
                data: "No data Found"
            })
        }

    } catch (err) {
        console.log(`Error findind Users from database at auth.js ${err.message}`.red.underline)
        res.status(401).json({
            success: false,
            data: err.message
        })
    }
    next();
})


// @desc     Create User
// @route    POST /api/v1/users
// @access   private by admin
router.post("/", async (req, res, next) => {
    try {

        const { name, email, password, role } = req.body;

        const user = await User.create({
            name,
            email,
            password
        })

        if (user) {
            res.status(201).json(user)
            console.log("users from data base", user)
        }

    } catch (err) {
        console.log(`Error findind Users from database at auth.js ${err.message}`.red.underline)
        res.status(401).json({
            success: false,
            data: err.message
        })
    }
    next();
})


// @desc     Delete user by id
// @route    DELETE /api/v1/users/:id
// @access   private by admin
router.delete("/:id", async (req, res, next) => {
    try {

        const user = await User.findByIdAndDelete(req.params.id)

        if (user) {
            res.status(201).json(user)
            console.log("users deleted from data base", user)
        } else {
            res.status(401).json({
                success: false,
                data: "No data Found"
            })
        }

    } catch (err) {
        console.log(`Error findind Users from database at auth.js ${err.message}`.red.underline)
        res.status(401).json({
            success: false,
            data: err.message
        })
    }
    next();
})


module.exports = router;