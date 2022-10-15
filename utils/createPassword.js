const alpha = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
const numbers = "0123456789";
const symbols = "!@#$%^&*_-+=";

const createPassword = (
  length = 8,
  hasNumbers = true,
  hasSymbols = true,
  keyword = ""
) => {
  let chars = alpha;
  hasNumbers ? (chars += numbers) : "";
  hasSymbols ? (chars += symbols) : "";
  keyword;
  return generatePassword(Math.max(length, keyword.length), chars, keyword);
};
const generatePassword = (length, chars, keyword) => {
  let rem_length = length - keyword.length;
  let password = "";
  for (let i = 0; i < rem_length; i++) {
    password += chars.charAt(Math.floor(Math.random() * chars.length));
  }

  password = password.split("");
  password.splice(Math.random() * rem_length, 0, keyword);
  password = password.join("");

  return password;
};
module.exports = createPassword;
