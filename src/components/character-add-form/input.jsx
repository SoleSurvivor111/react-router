import React from 'react';
import PropTypes from 'prop-types';

const Input = ({
  input,
  placeholder,
  label,
  type,
  meta: {
    touched,
    error,
    warning,
  },
}) => (
  <div className="form-group">
    <label
      htmlFor={input.name}
    >
      {label}
      <input
        {...input}
        id={input.name}
        placeholder={placeholder}
        className="form-control"
        type={type}
      />
    </label>
    {touched
      && ((error || warning) && (
      <div
        className="invalid-feedback"
      >
        {error || warning}
      </div>
      ))}
  </div>
);
export default Input;

Input.propTypes = {
  input: PropTypes.object.isRequired,
  placeholder: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  meta: PropTypes.shape({
    touched: PropTypes.bool,
    error: PropTypes.string,
    warning: PropTypes.string,
  }).isRequired,
};
