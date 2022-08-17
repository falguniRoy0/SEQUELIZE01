const router = require("express").Router();
// const { userController } = require("../controllers");
const passportController = require("../controllers/passport");

router.get("/", passportController.allPassports);

router.get("/:id", passportController.passportById);

router.post("/", passportController.createPassport);

router.put("/:id", passportController.updatePassport);

router.delete("/:id", passportController.deletePassport);

module.exports = router;
