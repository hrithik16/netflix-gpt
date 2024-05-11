const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
const passwordRegex =
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

export const isPasswordValid = (password1, password2) => {


  
  let isValidPassword = passwordRegex.test(password1);

  if (!isValidPassword) return 0

  if (password1 !== password2) return 1

  return -1
};

export const isEmailValid = (email) => {
  return emailRegex.test(email);
  // if (!isValidEmail) return "Please enter a valid email address";

  // return true
}
// "Sorry, the password you entered is invalid. Please ensure your password meets the required criteria

// "Uh-oh! The passwords you entered don't match."