import React from "react";
import './FormControls.css'

export const TextArea = ({input, meta, ...props}) => {
    const hasError = meta.touched && meta.error;
  return (
      <div>
          <textarea {...input} {...props} />
          {hasError && <div className="control-error">{meta.error}</div>}
      </div>
  )
};

export const Input = ({input, meta, ...props}) => {
    const hasError = meta.touched && meta.error;
  return (
      <div>
          <input {...input} {...props} />
          {hasError && <div className="control-error">{meta.error}</div>}
      </div>
  )
};