const validate = (name, value, errors) => {
  switch (name) {
    case "name":
      errors.name = value.length === 0 ? "Name is required." : "";
      break;
    case "address": {
      errors.address = value.length === 0 ? "Address is required." : "";
      break;
    }
    default:
      break;
  }
  return errors;
};
export default validate;
