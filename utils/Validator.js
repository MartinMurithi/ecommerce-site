const validate = require("validator");

function validateEmail(email) {
  return validate.isEmail(email);
}

function validatePassword(password) {
  return validate.isStrongPassword(password, {
    minLength: 5,
    minLowercase: 1,
    minUppercase: 1,
    minNumbers: 1,
    minSymbols: 1,
    returnScore: false,
    pointsPerUnique: 1,
    pointsPerRepeat: 0.5,
    pointsForContainingLower: 10,
    pointsForContainingUpper: 10,
    pointsForContainingNumber: 10,
    pointsForContainingSymbol: 10,
  });
}

module.exports = { validateEmail, validatePassword };
