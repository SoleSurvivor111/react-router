import React from 'react';
import PropTypes from 'prop-types';

const CharacterAddForm = ({
  genderValue,
  nameValue,
  cultureValue,
  playedByValue,
  onChangeFormValue,
  characterPictureValue,
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
            <input
              name="name"
              type="text"
              value={nameValue}
              className="form-control"
              id="name"
              placeholder="Enter name"
              onChange={onChangeFormValue}
            />
          </label>
        </div>
        <div className="form-group">
          <div
            htmlFor="gender"
          >
            Gender
            <select
              name="gender"
              className="form-control"
              id="gender"
              value={genderValue}
              onChange={onChangeFormValue}
            >
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Dragon">Dragon</option>
            </select>
          </div>
        </div>
        <div className="form-group">
          <label
            htmlFor="culture"
          >
            Culture
            <input
              name="culture"
              type="text"
              value={cultureValue}
              className="form-control"
              id="culture"
              placeholder="Enter culture"
              onChange={onChangeFormValue}
            />
          </label>
        </div>
        <div className="form-group">
          <label
            htmlFor="playeBby"
          >
            Played by

            <input
              name="playedBy"
              type="text"
              value={playedByValue}
              className="form-control"
              id="playeBby"
              placeholder="Played by:"
              onChange={onChangeFormValue}
            />
          </label>
        </div>
        <div className="form-group">
          <label
            htmlFor="characterPicture"
          >
            Character picture
            <input
              name="characterPicture"
              type="text"
              value={characterPictureValue}
              className="form-control"
              id="characterPicture"
              placeholder="Enter URl"
              onChange={onChangeFormValue}
            />
          </label>
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
  genderValue: PropTypes.string.isRequired,
  nameValue: PropTypes.string.isRequired,
  cultureValue: PropTypes.string.isRequired,
  playedByValue: PropTypes.string.isRequired,
  characterPictureValue: PropTypes.string.isRequired,
  onChangeFormValue: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
};
