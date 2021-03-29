import { useState } from "react";

const useFormValidator = (initialFormData) => {
  const [formData, setFormData] = useState(initialFormData);
  const [errors, setErrors] = useState({});
  const onHandleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const onHandleSubmit = (e) => {
    e.preventDefault;
  };

  return {
    onHandleSubmit,
    onHandleChange,
    formData,
  };
};

export default useFormValidator;
