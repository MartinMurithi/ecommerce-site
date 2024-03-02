const { getAllUsers, registerUser, verifyEmail, logIn } = require("../controllers/UserController");

const userRouter = require("express").Router();

userRouter.get("/users", getAllUsers);
userRouter.post("/register-user", registerUser);
userRouter.get("/verify-email/:email_token", verifyEmail);
userRouter.post("/login", logIn);

module.exports = userRouter;