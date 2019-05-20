import React from 'react';
import PropTypes from 'prop-types';
import ItemDetails from 'components/item-details';
import { Record } from 'components/item-details/item-details';

const PersonDetails = ({
  getPerson,
  getPersonImage,
  recordFunctions,
  itemDetailsdFunctions,
}) => (
  <ItemDetails
    getData={getPerson}
    getImageUrl={getPersonImage}
    {...itemDetailsdFunctions}
  >
    <Record
      label="Gender:"
      field="gender"
      {...recordFunctions}
    />
    <Record
      label="Culture:"
      field="culture"
      {...recordFunctions}
    />
    <Record
      label="Played by:"
      field="playedBy"
      {...recordFunctions}
    />
  </ItemDetails>
);
export default PersonDetails;

PersonDetails.propTypes = {
  itemId: PropTypes.string.isRequired,
  getPerson: PropTypes.object.isRequired,
  recordFunctions: PropTypes.object.isRequired,
  itemDetailsdFunctions: PropTypes.object.isRequired,
  getPersonImage: PropTypes.func.isRequired,
};
