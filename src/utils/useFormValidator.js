import { useState } from "react";

const useFormValidator = (initialFormData, callback, validate) => {
  const [formData, setFormData] = useState(initialFormData);
  //const [formErrors, setFormErrors] = useState({});
  const [formSubmitting, setFormSubmitting] = useState(false);

  const { errors } = formData;

  const onHandleChange = (e) => {
    const { name, value } = e.target;

    validate(name, value, errors);
    setFormData({
      ...formData,
      [name]: value,
    });
    //setFormErrors(validate(formData));
  };

  const onHandleSubmit = (e) => {
    e.preventDefault();
    setFormSubmitting(true);
    if (formSubmitting) {
      return callback();
    }
  };

  // useEffect(() => {
  //   if (formSubmitting) {
  //     return callback();
  //   }
  // }, [errors.value]);

  return {
    onHandleSubmit,
    onHandleChange,
    formData,
  };
};

export default useFormValidator;
