import React from 'react';
import PropTypes from 'prop-types';
import { Field, reduxForm } from 'redux-form';
import { required } from 'const/validate';
import 'components/character-add-form/character-add-form.css';

const Input = ({
  input,
  name,
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
      htmlFor={name}
    >
      {label}
      <input
        {...input}
        id={name}
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
const Select = ({
  input,
  name,
  placeholder,
  label,
  type,
  value,
  meta: {
    touched,
    error,
    warning,
  },
}) => (
  <div className="form-group">
    <div
      htmlFor={name}
    >
      Gender
      <select
        {...input}
        value={value}
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


const CharacterAddForm = () => (
  <form className="d-flex flex-column align-content-center">
    <fieldset className="border border-success rounded">
      <legend className="text-center">Add character</legend>
      <div className="form-group d-flex flex-column align-content-center flex-wrap">
        <Field
          name="name"
          component={Input}
          type="text"
          placeholder="Enter name"
          label="Name"
          validate={[required]}
        />
        <Field
          name="gender"
          component={Select}
          type="text"
          placeholder="Enter name"
          label="Gender"
          value="Male"
          validate={[required]}
        />
        <Field
          name="culture"
          component={Input}
          type="text"
          placeholder="Enter culture"
          label="Culture"
          validate={[required]}
        />
        <Field
          name="playeBby"
          component={Input}
          type="text"
          placeholder="Played by:"
          label="Played by:"
          validate={[required]}
        />
        <Field
          name="characterPicture"
          component={Input}
          type="text"
          placeholder="Enter URl"
          label="Character picture"
          validate={[required]}
        />
        <button
          type="button"
          className="btn btn-success"
          // onClick={onSubmit}
          disabled={false}
        >
          Submit
        </button>
      </div>
    </fieldset>
  </form>
);
export default reduxForm({ form: 'characterAddForm' })(CharacterAddForm);
