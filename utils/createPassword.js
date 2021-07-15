const alpha = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
const numbers = "0123456789";
const symbols = "!@#$%^&*_-+=";
function createPassword(length = 8, hasNums = true, hasSyms = true) {
  let chars = alpha;
  hasNums ? (chars += numbers) : "";
  hasSyms ? (chars += symbols) : "";

  return generatePassword(length, chars);
}
function generatePassword(length, chars) {
  pass = "";
  for (let i = 0; i < length; i++) {
    pass += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return pass;
}
module.exports = createPassword;
