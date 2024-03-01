const crypto = require("crypto");

const queries = require("../queries/UserQueries");
const pool = require("../config/DB");
const HashPassword = require("../utils/HashPassword");
const { validatEmail, validatePassword } = require("../utils/Validator");

const getAllUsers = (req, res) => {
  pool.query(queries.getAllUsersQuery, (error, results) => {
    if (error) {
      console.error(error.stack);
      return res
        .status(500)
        .json({ Error: error.name, Message: error.message });
    } else {
      return res.status(200).json({
        success: true,
        count: results.rows.length,
        users: results.rows,
      });
    }
  });
};

const registerUser = async (req, res) => {
  const { username, email, password } = req.body;

  if (!username || !email || !password) {
    res.status(400).json("All fields are required!");
  }

  // Check if username or email exists
  pool.query(queries.getUser, [username, email], async (error, results) => {
    if (error) {
      console.error(error.stack);
      return res
        .status(500)
        .json({ Error: error.name, Message: error.message });
    } else if (results.rows.length !== 0) {
      return res.status(409).json({ Error: "User already exists!" });
    }
    //Check if password is strong
    if (!validatePassword(password)) {
      return res
        .status(400)
        .json(
          "Please use a strong password. (minLength: 8, minLowercase: minUppercase: 1, minNumbers: 1, minSymbols: 2,"
        );
    }
    // Hash password
    const hashedPassword = await HashPassword(password);

    //check if email is valid
    if (!validatEmail(email)) {
      return res.status(400).json("Please enter a valid email");
    }

    //Generate e-mail token, used in email verification process
    const emailToken = crypto.randomBytes(20).toString("hex");
    console.log(emailToken);
    // If email or username does not exist create new user
    pool.query(
      queries.createNewUserQuery,
      [username, email, hashedPassword, emailToken],
      (error, results) => {
        if (error) {
          console.error(error.stack);
          return res
            .status(500)
            .json({ Error: error.name, Message: error.message });
        } else {
          return res.status(201).json({
            success: true,
            user: {
              username: username,
              email: email,
              password: hashedPassword,
              email_token: emailToken
            },
          });
        }
      }
    );
  });
};

const verifyEmail = (req, res) => {
  // Get email token from client
  const emailToken = req.params.emailToken;
  console.log(emailToken);
  // Check if email token exists in database
  pool.query(queries.getUserByEmailToken, [emailToken], (error, results) => {
    if (results.rows.length === 0) {
      res
        .status(404)
        .json(
          "Email token not found. This could be because the email is not registered"
        );
    } else {
      return res
        .status(500)
        .json("An error occurred when verifying the email");
    }

    // Nullify the email token and change the verification status to true in the db.
    pool.query(
      queries.updateEmailVerificationStatus,
      [results.rows[0].username],
      (error, results) => {
        if (error) {
          res.status(500).json({ Error: error.name, Message: error.message });
        } else {
          return res
            .status(200)
            .json({ success: true, message: "Email verified successfully" });
        }
      }
    );
  });
};

module.exports = { getAllUsers, registerUser, verifyEmail };
