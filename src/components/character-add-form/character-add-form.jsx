import React from 'react';
import PropTypes from 'prop-types';
import {
  Field,
} from 'redux-form';
import {
  required,
  url,
  length,
} from 'redux-form-validators';
import Input from 'components/character-add-form/input';
import Select from 'components/character-add-form/select';
import 'components/character-add-form/character-add-form.css';

const CharacterAddForm = ({
  isValid,
  values,
  onSubmit,
  reset,
}) => (
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
          validate={[required(), length({ minimum: 5 })]}
        />
        <Field
          name="gender"
          component={Select}
          label="Gender"
          value="Male"
          validate={[required()]}
        />
        <Field
          name="culture"
          component={Input}
          type="text"
          placeholder="Enter culture"
          label="Culture"
          validate={[required()]}
        />
        <Field
          name="playedBy"
          component={Input}
          type="text"
          placeholder="Played by:"
          label="Played by:"
          validate={[required()]}
        />
        <Field
          name="characterPicture"
          component={Input}
          type="text"
          placeholder="Enter URl"
          label="Character picture"
          validate={[required(), url()]}
        />
        <button
          type="button"
          className="btn btn-success"
          onClick={() => {
            onSubmit(values);
            reset();
          }}
          disabled={!isValid}
        >
          Submit
        </button>
      </div>
    </fieldset>
  </form>
);

export default CharacterAddForm;

CharacterAddForm.propTypes = {
  values: PropTypes.object,
  isValid: PropTypes.bool,
  onSubmit: PropTypes.func.isRequired,
  reset: PropTypes.func.isRequired,
};

CharacterAddForm.defaultProps = {
  isValid: null,
  values: null,
};
