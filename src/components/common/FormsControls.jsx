import React from "react";
import './FormControls.css'

export const TextArea = ({input, meta, ...props}) => {
    return (
        <div>
            <textarea {...input} {...props} />
        </div>
    )
};

export const Input = ({input, meta, ...props}) => {
    const hasError = meta.touched && meta.error;
    return (
        hasError
            ? <div className="controlled-input__error">
                <input  {...input} {...props} />
                {hasError && <div className="controlled-error">{meta.error}</div>}
            </div>
            : <div className="controlled-input">
                <input  {...input} {...props} />
            </div>
    )
};