import React from "react";

const ErrorMessage = (error) => {
  return (
    <>
      <div className='text-danger small'>{error.errorMsg}</div>
    </>
  );
};

export default ErrorMessage;
