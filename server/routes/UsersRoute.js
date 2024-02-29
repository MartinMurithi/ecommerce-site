const { getAllUsers, registerUser } = require("../controllers/UserController");

const userRouter = require("express").Router();

userRouter.get("/users", getAllUsers);
userRouter.post("/register-user", registerUser);

module.exports = userRouter;