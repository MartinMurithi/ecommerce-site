const { getAllUsers, registerUser, verifyEmail } = require("../controllers/UserController");

const userRouter = require("express").Router();

userRouter.get("/users", getAllUsers);
userRouter.post("/register-user", registerUser);
userRouter.get("/verify-email/:email_token", verifyEmail);

module.exports = userRouter;