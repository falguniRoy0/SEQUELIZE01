const Passport = require('../models').Passport;
console.log('passport');

class PassportService {
  async fetchAllPassports() {
    const passport = await Passport.findAll({
      attributes:{ exclude: ['password'] }
    });  //select * from users;
    return passport;
  }

 async findByID(id) {
    const passport = await Passport.findOne();
    return this.passport.find((usr) => usr.id === +id);
  }

 async createPassport(payload) {
    const newPassport = await Passport.create(payload);
    return newPassport;
  }
  // update user
 async updatePassport(id, payload) {
    const passport = await Passport.findByPk(id);
    if (!passport) {
      return null;
    }
    await passport.update(payload);
    return passport;
  }

  // delete user
  async deletePassport(id) {
    const passport = await Passport.destroy({
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
    console.log(passport);
    return passport;
  }
}

module.exports = new PassportService();
