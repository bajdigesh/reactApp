export default function validation(formState) {
  let errors = {};

  if (!formState.email) {
    errors.email = "This field is required.";
  } else if (!/\S+@\S+\.\S+/.test(formState.email)) {
    errors.email = "Email is invalid.";
  }

  if (!formState.username) {
    errors.username = "This field is required.";
  } else if (formState.username < 3) {
    errors.username = "Username cannot be less than 3 characters.";
  }

  if (!formState.address) {
    errors.address = "This field is required.";
  }

  if (!formState.full_name) {
    errors.full_name = "This field is required.";
  }

  if (!formState.contact) {
    errors.contact = "This field is required.";
  } else if (!/^\d*$/.test(formState.contact)) {
    errors.contact = "Contact is invalid.";
  }

  return errors;
}
