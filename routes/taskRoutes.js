const express = require("express");
const router = express.Router();

const {
    getTasks,
    createTask,
    updateTask,
    deleteTask,
    getAllTasksForAdmin
} = require("../controllers/taskController");

const { protect } = require("../middleware/authMiddleware");
const { authorize } = require("../middleware/roleMiddleware");

router.get("/", protect, getTasks);
router.post("/", protect, createTask);
router.put("/:id", protect, updateTask);
router.delete("/:id", protect, deleteTask);

router.get("/admin/all", protect, authorize("admin"), getAllTasksForAdmin);

module.exports = router;