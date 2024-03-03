const crypto = require("crypto");
const queries = require("../queries/UserQueries");
const pool = require("../config/DB");
const { HashPassword, ComparePassword } = require("../utils/PasswordManager");
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
    let hashedPassword;
    try {
      hashedPassword = await HashPassword(password, 10);
      console.log(hashedPassword);
    } catch (error) {
      console.error(error);
    }

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
              email_token: emailToken,
            },
          });
        }
      }
    );
  });
};

const verifyEmail = (req, res) => {
  // Get email token from client
  const emailToken = req.params.email_token;
  console.log("Req.params " + req.params.email_token);
  console.log(emailToken);
  // Check if email token exists in database
  pool.query(queries.getUserByEmailToken, [emailToken], (error, results) => {
    if (error) {
      console.error("Get user by email token " + error);
      return res
        .status(500)
        .json({ Error: error.name, Message: error.message });
    }

    // These checks if there's an unverified email
    if (results.rows.length === 0) {
      return res.status(404).json("Email already verified!");
    }

    const user = results.rows[0];

    // Nullify the email token and change the verification status to true in the db.
    pool.query(
      queries.updateEmailVerificationStatus,
      [user.username],
      (error, results) => {
        if (error) {
          return res
            .status(500)
            .json({ Error: error.name, Message: error.message });
        } else {
          return res
            .status(200)
            .json({ success: true, message: "Email verified successfully" })
            .redirect("/athena/api/v1/home");
        }
      }
    );
  });
};

const logIn = (req, res) => {
  const { username, password } = req.body;

  console.log("Username: " + username);
  console.log("Password: " + password);

  // Check if user exists
  pool.query(queries.getUserByUsername, [username], async (error, results) => {
    if (error) {
      return res
        .status(500)
        .json({ Error: error.name, Message: error.message });
    }

    const user = results.rows[0];
    console.log(user);

    if (!user) {
      return res.status(404).json("User does not exist");
    }

    try {
      // Compare password of user from db and password from client
      const isPasswordMatch = await ComparePassword(password, user.password);
      console.log(isPasswordMatch);

      if (!isPasswordMatch) {
        console.log("Login failed");
        return res.status(401).json("Incorrect username or password");
      }

      console.log("Login successful");
      return res
        .status(200)
        .json({ success: true, message: "Signed in successfully" });
    } catch (error) {
      console.error(error);
      return res.status(500).json("Internal server error!");
    }
  });
};

module.exports = { getAllUsers, registerUser, verifyEmail, logIn };
