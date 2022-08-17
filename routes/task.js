const router = require("express").Router();
// const { userController } = require("../controllers");
const taskController = require("../controllers/task");

router.get("/", taskController.allTasks);

router.get("/:id", taskController.taskById);

router.post("/", taskController.createTask);

router.put("/:id", taskController.updateTask);

router.delete("/:id", taskController.deleteTask);

module.exports = router;
