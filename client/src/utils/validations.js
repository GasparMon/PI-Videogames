export default function validation(input) {


  const errors = {};
  const regexPassword = /^(?=.*[A-Z])(?=.*\d)[A-Za-z\d@$!%*?&]+$/;
  const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!regexPassword.test(input.password)) {
    errors.password =
      "Password must include at least one uppercase letter and one digit.";
      errors.passwordValidation = false;
  } else if (input.password.length < 8 || input.password.length > 18) {
    errors.password = "Password must be between 8 and 18 characters.";
    errors.passwordValidation = false;
  } else {
    errors.password = "Your password is valid.";
    errors.passwordValidation = true;
  }

  if (!regexEmail.test(input.email)) {
    errors.email = "You must enter a valid email.";
    errors.emailValidation = false;
} else {
    errors.email = "Your email is valid";
    errors.emailValidation = true;
}

// if (!regexPassword.test(input.updatedPassword)) {
//   errors.password =
//     "Password must include at least one uppercase letter and one digit.";
//     errors.passwordValidation = false;
// } else if (input.updatedPassword.length < 8 || input.updatedPassword.length > 18) {
//   errors.password = "Password must be between 8 and 18 characters.";
//   errors.passwordValidation = false;
// } else {
//   errors.password = "Your password is valid.";
//   errors.passwordValidation = true;
// }

// if (!regexEmail.test(input.updatedEmail)) {
//   errors.email = "You must enter a valid email.";
//   errors.emailValidation = false;
// } else {
//   errors.email = "Your email is valid";
//   errors.emailValidation = true;
// }


  return errors;
}
