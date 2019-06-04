import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { required, url } from 'redux-form-validators';
import Input from 'components/character-add-form/input';
import Select from 'components/character-add-form/select';
import 'components/character-add-form/character-add-form.css';

const getInitialValues = {
  name: '',
  gender: 'Male',
  culture: '',
  playedBy: '',
  characterPicture: '',
};
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
          validate={[required()]}
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
          name="playeBby"
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
          // onClick={onSubmit}
          disabled={false}
        >
          Submit
        </button>
      </div>
    </fieldset>
  </form>
);
export default reduxForm({
  form: 'characterAddForm',
  initialValues: getInitialValues,
})(CharacterAddForm);
