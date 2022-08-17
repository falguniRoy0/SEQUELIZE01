const passportService = require("../services/passport");

class PassportController {
  async allPassports(req, res, next) {
    let passports = await passportService.fetchAllPassports();
    return res.send(passports);
  }

  passportById(req, res, next) {
    const id = req.params.id;
    const passport = passportService.findByID(id);
    if (!passport) {
      return res.send({
        message: "passport not found",
      });
    }
    return res.send({ passport });
  }

 async createPassport(req, res, next) {
    let payload = req.body;
    const passport = await passportService.createPassport(payload);
    return res.send({
        passport,
    });
  }

  async updatePassport(req, res, next) {
    const id = req.params.id;
    const payload = req.body;
    const passport =await passportService.updatePassport(id, payload);
    if (!passport) {
      return res.send({
        message: "passport not found",
      });
    }
    return res.send({
      message: 'updated'
    });
  }

 async deletePassport(req, res, next) {
    const id = req.params.id;
    const passport = await passportService.deletePassport(id);
    if (!passport) {
      return res.send({
        message: "passport not found",
      });
    }
    return res.send({ message: 'passport deleted'});
  }
}

module.exports = new PassportController();
