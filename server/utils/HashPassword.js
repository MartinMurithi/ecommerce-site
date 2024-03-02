const bcrypt = require("bcrypt");
const SALT_ROUNDS = 10;

async function HashPassword(password) {
  try {
    const hashedPwd = await bcrypt.hash(password, SALT_ROUNDS);
    return hashedPwd;
  } catch (error) {
    console.error(error);
  }
}

async function ComparePassword(password, hash) {
  try {
    const isPasswordMatch = await bcrypt.compare(password, hash);
    console.log("Password match : " + isPasswordMatch);
    return isPasswordMatch;
  } catch (error) {
    console.error(error);
  }
}

module.exports = { HashPassword, ComparePassword };
