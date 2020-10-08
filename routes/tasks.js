// Fetching TASKS info and perform operation such as delete ,update and find.
const express = require("express");
const Task = require("../models/Task.js")

const router = express.Router({ mergeParams: true });

// @desc     Get tasks
// @route    GET /api/v1/tasks
// @access   private by admin
router.get("/", async (req, res, next) => {
    try {

        const tasks = await Task.find()

        if (tasks) {
            res.status(201).json(tasks)
            console.log(" Tasks from data base Get reqest all the data of tast -", tasks)
        }
        // else {
        //     res.status(401).json({
        //         success: false,
        //         data: "No data Found"
        //     })
        // }

    } catch (err) {
        console.log(`Error findind tasks from database at auth.js ${err.message}`.red.underline)
        res.status(401).json({
            success: false,
            data: err.message
        })
    }
    next();
})

// @desc     Get single tasks by id
// @route    GET /api/v1/tasks/:id
// @access   private by admin
router.get("/:id", async (req, res, next) => {
    try {

        console.log(req.params.id);

        const task = await Task.findById(req.params.id);

        console.log("Task info by id Get Request", task);

        if (task) {
            res.status(201).json(task)
            console.log("Tasks from data base", task)
        } else {
            res.status(401).json({
                success: false,
                data: "No data Found"
            })
        }

    } catch (err) {
        console.log(`Error findind Tasks from database at auth.js ${err.message}`.red.underline)
        res.status(401).json({
            success: false,
            data: err.message
        })
    }
    next();
})


// @desc     Update single task by Id
// @route    PUT /api/v1/tasks/:id
// @access   private by admin

router.put("/:id", async (req, res, next) => {
    try {

        console.log(req.params.id);

        const task = await Task.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });

        console.log("Task info by id To edit Out request", task);

        if (task) {
            res.status(201).json(task)
            console.log("Tasks from data base", task)
        } else {
            res.status(401).json({
                success: false,
                data: "No data Found"
            })
        }

    } catch (err) {
        console.log(`Error findind Tasks from database at auth.js ${err.message}`.red.underline)
        res.status(401).json({
            success: false,
            data: err.message
        })
    }
    next();
})


// @desc     Add task
// @route    POST /api/v1/tasks
// @access   private by admin
router.post("/", async (req, res, next) => {
    try {

        // Changes created due to Dev express data sets;


        const { name, email, role, title, description,
            createdOn, deadLineOn, status, review, user,
            startDate, endDate, location } = req.body;



        const task = await Task.create({
            name,
            email,
            role,
            title,
            description,
            createdOn,
            deadLineOn,
            status,
            review,
            user,
            startDate,
            endDate,
            location

        })

        if (task) {
            res.status(201).json(task)
            console.log("Tasks from data base", task)
        }

    } catch (err) {
        console.log(`Error findind Tasks from database at auth.js ${err.message}`.red.underline)
        res.status(401).json({
            success: false,
            data: err.message
        })
    }
    next();
})


// @desc     Delete task by id
// @route    DELETE /api/v1/tasks/:id
// @access   private by admin
router.delete("/:id", async (req, res, next) => {
    try {

        const task = await Task.findByIdAndDelete(req.params.id)

        if (task) {
            res.status(201).json({
                success: true,
                data: task
            })
            console.log("Tasks deleted from data base", task)
        } else {
            res.status(401).json({
                success: false,
                data: "No data Found"
            })
        }

    } catch (err) {
        console.log(`Error findind Tasks from database at auth.js ${err.message}`.red.underline)
        res.status(401).json({
            success: false,
            data: err.message
        })
    }
    next();

})


// extremenly important To get task related to a user


// @desc     Get single tasks by id
// @route    GET /api/v1/users/:usersid/tasks
// @access   private by admin
router.get("/", async (req, res, next) => {
    try {

        console.log(req.params.usersid);

        const task = await Task.find({ user: req.params.usersid });

        console.log("Task info by id", task);

        if (task) {
            res.status(201).json(task)
            console.log("Tasks from data base", task)
        } else {
            res.status(401).json({
                success: false,
                data: "No data Found"
            })
        }

    } catch (err) {
        console.log(`Error findind Tasks from database at auth.js ${err.message}`.red.underline)
        res.status(401).json({
            success: false,
            data: err.message
        })
    }
    next();
})


module.exports = router;