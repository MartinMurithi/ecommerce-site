const bcrypt = require("bcrypt");
const SALT_ROUNDS = 10;
async function HashPassword(password){
    const hashedPwd = await bcrypt.hash(password, SALT_ROUNDS);
    return hashedPwd;
}

module.exports = HashPassword