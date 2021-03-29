export default validation = (formData) => {
  let errors = {};

  if (!email) {
    errors.email = "Email is required.";
  } else if (
    /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i.test(
      formData.email
    )
  ) {
    errors.email = "Email is invalid.";
  }

  return errors;
};
