const User = require('../models').User;
console.log('user');

class UserService {
  async fetchAllUsers() {
    const user = await User.findAll({
      attributes:{ exclude: ['password'] },
      include:[ { association: 'passport'},
               { association: 'task' } 
      ]  //passport depends on as passport in file user(services)
    });  //select * from users;
    return user;
  }

 async findByID(id) {
    const user = await User.findOne();
    return this.user.find((usr) => usr.id === +id);
  }

 async createUser(payload) {
    const newUser = await User.create(payload);
    return newUser;
  }
  // update user
 async updateUser(id, payload) {
    const user = await User.findByPk(id);
    if (!user) {
      return null;
    }
    await user.update(payload);
    return user;
  }

  // delete user
  async deleteUser(id) {
    const user = await User.destroy({
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
    console.log(user);
    return user;
  }
}

module.exports = new UserService();
