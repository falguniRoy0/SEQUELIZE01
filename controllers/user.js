const userService = require("../services/user");

class UserController {
  async allUsers(req, res, next) {
    let users = await userService.fetchAllUsers();
    return res.send(users);
  }

  userById(req, res, next) {
    const id = req.params.id;
    const user = userService.findByID(id);
    if (!user) {
      return res.send({
        message: "user not found",
      });
    }
    return res.send({ user });
  }

 async createUser(req, res, next) {
    let payload = req.body;
    const user = await userService.createUser(payload);
    return res.send({
      user,
    });
  }

  async updateUser(req, res, next) {
    const id = req.params.id;
    const payload = req.body;
    const user =await userService.updateUser(id, payload);
    if (!user) {
      return res.send({
        message: "user not found",
      });
    }
    return res.send({
      message: 'updated'
    });
  }

 async deleteUser(req, res, next) {
    const id = req.params.id;
    const user = await userService.deleteUser(id);
    if (!user) {
      return res.send({
        message: "user not found",
      });
    }
    return res.send({ message: 'user deleted'});
  }
}

module.exports = new UserController();
