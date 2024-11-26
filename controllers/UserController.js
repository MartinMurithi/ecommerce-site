const crypto = require("crypto");

const UserModel = require("../models/user");

const { HashPassword, ComparePassword } = require("../utils/PasswordManager");
const { validateEmail, validatePassword } = require("../utils/Validator");
const { generateToken, removeToken } = require("../utils/jsonwebtokens");

const getAllUsers = async (req, res) => {
  try {
    const users = await UserModel.find();

    return res.status(200).json({
      success: true,
      count: users.length,
      users,
    });
  } catch (error) {
    console.error(error.stack);
    return res.status(500).json({
      Error: error.name,
      Message: error.message,
    });
  }
};

const registerUser = async (req, res) => {
  const { username, email, password } = req.body;

  if (!username, !email || !password) {
    return res.status(400).json({ error: "All fields are required!" });
  }

  try {
    
    if (!validateEmail(email)) {
      return res.status(400).json({ error: "Please use a valid email" });
    }
    
    if (!validatePassword(password)) {
      return res.status(400).json({
        error:"Please use a strong password."});
    }

    const existingUser = await UserModel.findOne({
      $or: [{ username }, { email }],
    });
    
    
    if (existingUser) {
      return res.status(409).json({ error: "User already exists!" });
    }

    const hashedPassword = await HashPassword(password, 10);

    // Generate an email verification token
    const emailToken = crypto.randomBytes(20).toString("hex");

    const newUser = new UserModel({
      username,
      email,
      password: hashedPassword,
      emailToken
    });

    await newUser.save();

    // generateToken(res, username);

    return res.status(201).json({
      success: true,
      user: {
        username,
        email
      },
    });
  } catch (error) {
    console.error(error.stack);
    return res.status(500).json({
      error: error.name,
      message: error.message,
    });
  }
};


// const verifyEmail = (req, res) => {
//   // Get email token from client
//   const emailToken = req.params.email_token;
//   console.log("Req.params " + req.params.email_token);
//   console.log(emailToken);
//   // Check if email token exists in database
//   pool.query(queries.getUserByEmailToken, [emailToken], (error, results) => {
//     if (error) {
//       console.error("Get user by email token " + error);
//       return res
//         .status(500)
//         .json({ Error: error.name, Message: error.message });
//     }

//     // These checks if there's an unverified email
//     if (results.rows.length === 0) {
//       return res.status(404).json("Email already verified!");
//     }

//     const user = results.rows[0];

//     // Nullify the email token and change the verification status to true in the db.
//     pool.query(
//       queries.updateEmailVerificationStatus,
//       [user.username],
//       (error, results) => {
//         if (error) {
//           return res
//             .status(500)
//             .json({ Error: error.name, Message: error.message });
//         } else {
//           return res
//             .status(200)
//             .json({ success: true, message: "Email verified successfully" })
//             .redirect("/athena/api/v1/home");
//         }
//       }
//     );
//   });
// };

const logIn = async (req, res) => {
  const { username, email, password } = req.body;

  try {

    if (!validateEmail(email)) {
      return res.status(400).json({ error: "Please use a valid email" });
    }

    const user = await UserModel.findOne({email});

    if (!user) {
      return res.status(404).json({ error: "User does not exist. Please create an account and try logging in." });
    }

    const isPasswordMatch = await ComparePassword(password, user.password);

    if (!isPasswordMatch) {
      return res.status(401).json({ error: "Invalid credentials" });
    }

    // Login successful, generate JWT token
    generateToken(res, user.email);

    return res.status(200).json({
      success: true,
      message: "Signed in successfully",
    });
  } catch (error) {
    console.error(error.stack);
    return res.status(500).json({
      error: error.name,
      message: error.message,
    });
  }
};

const logOut = async (req, res) => {
  const { email } = req.body;

  try {

    const user = await UserModel.findOne({email});

    if (!user) {
      return res.status(404).json({ error: "User does not exist" });
    }

    // Remove token or perform any session invalidation logic
    removeToken(res);

    return res.status(200).json({ message: "Successfully logged out." });
  } catch (error) {
    console.error(error.stack);
    return res.status(500).json({
      error: "Internal server error",
      message: error.message,
    });
  }
};
module.exports = { getAllUsers, registerUser, logIn, logOut };
