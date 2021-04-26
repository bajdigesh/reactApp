import { useEffect, useState } from "react";

const useFormValidator = (initialState, validate, callback) => {
  const [formState, setFormState] = useState(initialState);
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    setFormState(initialState);
  }, [initialState]);

  const onInputChange = (e) => {
    //e.preventDefault();
    const { name, value } = e.target;
    setFormState({
      ...formState,
      [name]: value,
    });
    console.log("FORM VALIDATOR => ", formState);
  };

  const onSubmitForm = (e) => {
    e.preventDefault();
    setErrors(validate(formState));
    setIsSubmitting(true);
  };

  useEffect(() => {
    if (Object.keys(errors).length === 0 && isSubmitting) {
      callback();
    }
  }, [errors]);

  return {
    onInputChange,
    onSubmitForm,
    formState,
    errors,
  };
};

export default useFormValidator;
