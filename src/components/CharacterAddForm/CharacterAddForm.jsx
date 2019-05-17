import React from 'react';
import PropTypes from 'prop-types';

const CharacterAddForm = ({ onChangeFormValue }) => (
  <form className="d-flex flex-column align-content-center">
    <fieldset className="border border-success rounded">
      <legend className="text-center">Add character</legend>
      <div className="form-group d-flex flex-column align-content-center flex-wrap">
        <div className="form-group">
          <label
            htmlFor="exampleInputPassword1"
          >
            Name
          </label>
          <input
            name="name"
            type="text"
            className="form-control"
            id="exampleInputPassword1"
            placeholder="Enter name"
            onChange={onChangeFormValue}
          />
        </div>
        <div className="form-group">
          <label htmlFor="exampleSelect1">
            Gender
          </label>
          <select
            name="gender"
            className="form-control"
            id="exampleSelect1"
          >
            <option>Male</option>
            <option>Female</option>
            <option>Dragon</option>
          </select>
        </div>
        <div className="form-group">
          <label
            htmlFor="culture"
          >
            Culture
          </label>
          <input
            name="culture"
            type="text"
            className="form-control"
            id="culture"
            placeholder="Enter culture"
            onChange={onChangeFormValue}
          />
        </div>
        <div className="form-group">
          <label
          htmlFor="playeBby"
          >
            Played by
          </label>
          <input
            name="playedBy"
            type="text"
            className="form-control"
            id="playeBby"
            placeholder="Played by:"
            onChange={onChangeFormValue}
          />
        </div>
        <button
          type="button"
          className="btn btn-success"
        >
          Submit
        </button>
      </div>
    </fieldset>
  </form>
);
export default CharacterAddForm;

CharacterAddForm.propTypes = {
  onChangeFormValue: PropTypes.func.isRequired,
};
