require("dotenv").config();
const jwt = require("jsonwebtoken");
const queries = require("../queries/UserQueries");
const pool = require("../config/DB");

// Verify the jwt
function protectRoute(req, res, next) {
  try {
    let token;
    token = req.cookies.jwt;
    console.log(token);

    if (token) {
      const decoded = jwt.verify(token, process.env.ACCESS_JWT_TOKEN);
      console.log(decoded);

      // Collect user data from DB and pass the data from the token to other req objects
      pool.query(
        queries.getUserByUsername,
        [decoded.username],
        (error, results) => {
          if (error) {
            return res.status(500).json("Internal, server error");
          }
          req.user = results.rows[0];
          console.log(results.rows[0]);
          next();
        }
      );
    } else {
      res.status(401).json("Unauthorized");
    }
  } catch (error) {
    console.error(error);
    return res.status(500).json(error.message);
  }
}

module.exports = protectRoute;