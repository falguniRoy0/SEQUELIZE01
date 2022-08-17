const taskService = require("../services/task");

class TaskController {
  async allTasks(req, res, next) {
    let tasks = await taskService.fetchAllTasks();
    return res.send(tasks);
  }

  taskById(req, res, next) {
    const id = req.params.id;
    const task = taskService.findByID(id);
    if (!task) {
      return res.send({
        message: "task not found",
      });
    }
    return res.send({ task });
  }

 async createTask(req, res, next) {
    let payload = req.body;
    const task = await taskService.createTask(payload);
    return res.send({
        task,
    });
  }

  async updateTask(req, res, next) {
    const id = req.params.id;
    const payload = req.body;
    const task =await taskService.updateTask(id, payload);
    if (!task) {
      return res.send({
        message: " task not found",
      });
    }
    return res.send({
      message: 'updated'
    });
  }

 async deleteTask(req, res, next) {
    const id = req.params.id;
    const task = await taskService.deleteTask(id);
    if (!task) {
      return res.send({
        message: "Task not found",
      });
    }
    return res.send({ message: 'Task deleted'});
  }
}

module.exports = new TaskController();
