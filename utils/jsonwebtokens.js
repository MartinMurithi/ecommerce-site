require("dotenv").config();
const jwt = require("jsonwebtoken");

  // httpOnly: When set to true, the cookie is only accessible on the server side and cannot be accessed by client-side JavaScript. This enhances security by preventing XSS attacks.
  // secure: When set to false, the cookie will be sent over non-secure connections as well. Setting it to true ensures that the cookie is only sent over HTTPS connections, enhancing security.
  // sameSite: When set to 'strict', the cookie will not be sent along with cross-site requests. This helps prevent CSRF (Cross-Site Request Forgery) attacks.
  // maxAge: Specifies the maximum age of the cookie in milliseconds.

function generateToken(res, email) {
  const token = jwt.sign({ email }, process.env.ACCESS_JWT_TOKEN, {
    expiresIn: "7d",
  });

  res.cookie("jwt", token, {
    httpOnly: false,
    secure: true,
    sameSite: "strict",
    maxAge: 7 * 24 * 60 * 60 * 1000,
  });
}

function removeToken(res) {
  res.cookie("jwt", "", {
    httpOnly: false,
    secure: true,
    sameSite: "strict",
    maxAge: 0,
  });
}

module.exports = { generateToken, removeToken };
