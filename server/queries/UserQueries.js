const getAllUsersQuery = "SELECT * FROM users";

const createNewUserQuery =
  "INSERT INTO users (username, email, password, email_token) VALUES($1, $2, $3, $4)";

const getUser = "SELECT * FROM users WHERE username = $1 OR email = $2";
const getUserByEmailToken = "SELECT * FROM users WHERE email_token = $1";

// Create a query to null the email token and update the isEmailConfirmed to true
const updateEmailVerificationStatus =
  "UPDATE users SET is_email_verified = true, email_token = null WHERE username = $1";

module.exports = {
  getAllUsersQuery,
  createNewUserQuery,
  getUser,
  getUserByEmailToken,
  updateEmailVerificationStatus
};
