export const checkValidData = (name, email, password) => {
  const isNameValid = /^[A-Z][a-zA-Z]*(?:\s[A-Za-z]+){0,5}$/.test(name);

  const isEmailValid =
    /^([a-zA-Z0-9_%+-]+(\.[a-zA-Z0-9_%+-]+)?@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/.test(
      email
    );

  const isPasswordValid =
    /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);

  if (!isNameValid) return "Full name is not valid";
  if (!isEmailValid) return "Email id is not valid";
  if (!isPasswordValid) return "Password is not valid";
};
