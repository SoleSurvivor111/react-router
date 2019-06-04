import React from 'react';
import PropTypes from 'prop-types';

const Select = ({
  input,
  label,
  meta: {
    touched,
    error,
    warning,
  },
}) => (
  <div className="form-group">
    <div
      htmlFor={input.name}
    >
      {label}
      <select
        {...input}
        value={input.value}
        className="form-control"
        component="select"
      >
        <option value="Male">Male</option>
        <option value="Female">Female</option>
        <option value="Dragon">Dragon</option>
      </select>
      {touched
        && ((error || warning) && (
        <div
          className="invalid-feedback"
        >
          {error || warning}
        </div>
        ))}
    </div>
  </div>
);
export default Select;

Select.propTypes = {
  input: PropTypes.object.isRequired,
  label: PropTypes.string.isRequired,
  meta: PropTypes.shape({
    touched: PropTypes.bool,
    error: PropTypes.string,
    warning: PropTypes.string,
  }).isRequired,
};
