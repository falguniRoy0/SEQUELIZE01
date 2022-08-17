const router = require("express").Router();
// const { userController } = require("../controllers");
const userController = require("../controllers/user");

router.get("/", userController.allUsers);

router.get("/:id", userController.userById);

router.post("/", userController.createUser);

router.put("/:id", userController.updateUser);

router.delete("/:id", userController.deleteUser);

module.exports = router;
