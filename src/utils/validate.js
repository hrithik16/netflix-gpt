const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
const passwordRegex =
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
const nameRegex = /^[a-zA-Z]+(?:\s[a-zA-Z]+)*$/;

export const isDataValid = (email, password, name) => {
  let isValidName = true;
  if (name) isValidName = nameRegex.test(name);

  if (!isValidName) return "Please enter a valid name";

  let isValidEmail = emailRegex.test(email);
  if (!isValidEmail) return "Please enter a valid email address";
  let isValidPassword = passwordRegex.test(password);
  if (!isValidPassword) return "invalid password";
};
