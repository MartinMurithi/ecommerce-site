const { getAllUsers, registerUser, verifyEmail, logIn, logOut } = require("../controllers/UserController");
const protectRoute = require("../middleware/Auth");
const userRouter = require("express").Router();

userRouter.get("/users", protectRoute, getAllUsers);
userRouter.post("/register-user", registerUser);
userRouter.get("/verify-email/:email_token", verifyEmail);
userRouter.post("/login", logIn);
userRouter.post("/logout", logOut);

module.exports = userRouter;