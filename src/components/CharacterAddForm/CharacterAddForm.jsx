import React from 'react';
import PropTypes from 'prop-types';

const CharacterAddForm = ({
  genderValue,
  nameValue,
  cultureValue,
  playedByValue,
  onChangeFormValue,
  onSubmit,
}) => (
  <form className="d-flex flex-column align-content-center">
    <fieldset className="border border-success rounded">
      <legend className="text-center">Add character</legend>
      <div className="form-group d-flex flex-column align-content-center flex-wrap">
        <div className="form-group">
          <label
            htmlFor="name"
          >
            Name
          </label>
          <input
            name="name"
            type="text"
            value={nameValue}
            className="form-control"
            id="name"
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
            value={genderValue}
            onChange={onChangeFormValue}
          >
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Dragon">Dragon</option>
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
            value={cultureValue}
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
            value={playedByValue}
            className="form-control"
            id="playeBby"
            placeholder="Played by:"
            onChange={onChangeFormValue}
          />
        </div>
        <button
          type="button"
          className="btn btn-success"
          onClick={onSubmit}
          disabled={false}
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
