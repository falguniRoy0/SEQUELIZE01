const router = require("express").Router();

const userRouter = require("./user.js");
const passportRouter = require("./passport.js");
const taskRouter = require("./task.js");

router.use("/users", userRouter);
router.use("/passports", passportRouter);
router.use("/tasks", taskRouter);

module.exports = router;
