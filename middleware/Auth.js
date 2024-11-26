require("dotenv").config();
const jwt = require("jsonwebtoken");
const UserModel = require("../models/user");

// checks if user is logged in
async function protectRoute(req, res, next) {
  try {
    let token = req.cookies.jwt; // Access token from cookies
    console.log(token);

    if (!token) {
      return res.status(401).json({ error: "Unauthorized!" });
    }

    // Verify the JWT
    const decoded = jwt.verify(token, process.env.ACCESS_JWT_TOKEN);
    console.log(decoded);

    // Fetch user data from the database using the email from the token
    const user = await UserModel.findOne({ email: decoded.email });

    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }

    // Attach user data to the `req` object for further use
    req.user = user;
    console.log(user);

    // Proceed to the next middleware or route handler
    next();
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: error.message });
  }
}

module.exports = protectRoute;