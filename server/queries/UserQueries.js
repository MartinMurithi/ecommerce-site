const getAllUsersQuery = "SELECT * FROM users";

const createNewUserQuery =
"INSERT INTO users (username, email, password, email_token) VALUES($1, $2, $3, $4)";

const getUser = "SELECT * FROM users WHERE username = $1 OR email = $2";

module.exports = { getAllUsersQuery, createNewUserQuery, getUser };
