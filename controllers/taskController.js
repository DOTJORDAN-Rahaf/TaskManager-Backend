const Task = require("../models/Task");

const getTasks = async (req, res) => {
    try {
        const tasks = await Task.find({ user: req.user.id });

        res.status(200).json({
            message: "Tasks fetched successfully",
            tasks
        });
    } catch (error) {
        res.status(500).json({
            message: "Server error",
            error: error.message
        });
    }
};

const createTask = async (req, res) => {
    try {
        const { title, description, status, priority } = req.body;

        const task = await Task.create({
            title,
            description,
            status,
            priority,
            user: req.user.id
        });

        res.status(201).json({
            message: "Task created successfully",
            task
        });
    } catch (error) {
        res.status(500).json({
            message: "Server error",
            error: error.message
        });
    }
};

const updateTask = async (req, res) => {
    try {
        const task = await Task.findOne({
            _id: req.params.id,
            user: req.user.id
        });

        if (!task) {
            return res.status(404).json({
                message: "Task not found"
            });
        }

        task.title = req.body.title || task.title;
        task.description = req.body.description || task.description;
        task.status = req.body.status || task.status;
        task.priority = req.body.priority || task.priority;

        const updatedTask = await task.save();

        res.status(200).json({
            message: "Task updated successfully",
            task: updatedTask
        });
    } catch (error) {
        res.status(500).json({
            message: "Server error",
            error: error.message
        });
    }
};

const deleteTask = async (req, res) => {
    try {
        const task = await Task.findOne({
            _id: req.params.id,
            user: req.user.id
        });

        if (!task) {
            return res.status(404).json({
                message: "Task not found"
            });
        }

        await task.deleteOne();

        res.status(200).json({
            message: "Task deleted successfully"
        });
    } catch (error) {
        res.status(500).json({
            message: "Server error",
            error: error.message
        });
    }
};

const getAllTasksForAdmin = async (req, res) => {
    try {
        const tasks = await Task.find().populate("user", "name email role");

        res.status(200).json({
            message: "All tasks fetched successfully",
            tasks
        });
    } catch (error) {
        res.status(500).json({
            message: "Server error",
            error: error.message
        });
    }
};

module.exports = {
    getTasks,
    createTask,
    updateTask,
    deleteTask,
    getAllTasksForAdmin
};