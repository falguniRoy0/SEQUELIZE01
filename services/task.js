const Task = require('../models').Task;
console.log('task');

class TaskService {
  async fetchAllTasks() {
    const task = await Task.findAll({
      attributes:{ exclude: ['password'] }
    });  //select * from users;
    return task;
  }

 async findByID(id) {
    const task = await Task.findOne();
    return this.task.find((usr) => usr.id === +id);
  }

 async createTask(payload) {
    const newTask = await Task.create(payload);
    return newTask;
  }
  // update user
 async updateTask(id, payload) {
    const task = await Task.findByPk(id);
    if (!task) {
      return null;
    }
    await task.update(payload);
    return task;
  }

  // delete user
  async deleteTask(id) {
    const task = await Task.destroy({
      where: {
        id: id
      }
    });
    // if (user) {
    //   this.user = this.user.filter((usr) => usr.id !== +id);
    //   return {
    //     message: "user deleted",
    //   };
    // }
    // return null;
    console.log(task);
    return task;
  }
}

module.exports = new TaskService();
