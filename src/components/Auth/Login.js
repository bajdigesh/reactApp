import React from "react";
import { useHistory } from "react-router-dom";
import useFormValidator from "../../utils/useFormValidator";

const Login = () => {
  const history = useHistory();

  let initialFormData = {
    email: "",
    password: "",
  };

  const { onHandleSubmit, onHandleChange, formData } = useFormValidator(
    initialFormData
  );

  return (
    <div className='container d-flex align-items-center h-100'>
      <div className='w-100 card p-5 shadow'>
        <h2 className='mb-4 text-center'>Sign In</h2>
        <form className='w-100' onSubmit={onHandleSubmit}>
          <div className='mb-4'>
            <label className='form-label'>Email</label>
            <input
              type='text'
              className='form-control'
              placeholder='Enter your email'
              name='email'
              value={formData.email}
              onChange={onHandleChange}
            />
          </div>
          <div className='mb-4'>
            <label className='form-label'>Password</label>
            <input
              type='password'
              className='form-control'
              placeholder='Enter your password'
              name='password'
              value={formData.password}
              onChange={onHandleChange}
            />
          </div>
          <button className='btn btn-secondary w-100'>Login</button>
        </form>
      </div>
    </div>
  );
};

export default Login;
