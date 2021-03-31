const validate = (name, value, errors) => {
  switch (name) {
    case "email":
      errors.email = value.length < 0 ? "Email is required" : "";
      errors.email = !/\S+@\S+\.\S+/.test(value) ? "Email is invalid" : "";
      break;
    case "password":
      errors.password =
        value.length < 8 ? "Password must be at least 8 characters. " : "";
      break;
    default:
      break;
  }
};

export default validate;
