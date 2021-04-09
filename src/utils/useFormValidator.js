import { useEffect, useState } from "react";

const useFormValidator = (initialFormData, callback, validate) => {
  const [formData, setFormData] = useState(initialFormData);
  const [formSubmitting, setFormSubmitting] = useState(false);

  const { errors } = formData;

  const onHandleChange = (e) => {
    const { name, value } = e.target;
    validate(name, value, errors);

    console.log(errors);
    setFormData({
      ...formData,
      errors,
      [name]: value,
    });
  };

  const onHandleSubmit = (e) => {
    e.preventDefault();
    setFormSubmitting(true);
    console.log(formSubmitting);
    // Object.keys(errors).forEach((error) => {
    //   console.log(error);
    // });
    // if (formSubmitting) {
    //   return callback();
    // }
  };

  useEffect(() => {}, []);

  return {
    onHandleSubmit,
    onHandleChange,
    formData,
  };
};

export default useFormValidator;
