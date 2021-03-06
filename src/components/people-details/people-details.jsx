import React from 'react';
import PropTypes from 'prop-types';
import ItemDetails from 'components/item-details';
import { Record } from 'components/item-details/item-details';

const PersonDetails = ({
  itemId,
  getPerson,
  getPersonImage,
}) => (
  <ItemDetails
    itemId={itemId}
    getData={getPerson}
    getImageUrl={getPersonImage}
  >
    <Record
      label="Gender:"
      field="gender"
    />
    <Record
      label="Culture:"
      field="culture"
    />
    <Record
      label="Played by:"
      field="playedBy"
    />
  </ItemDetails>
);
export default PersonDetails;

PersonDetails.propTypes = {
  itemId: PropTypes.string.isRequired,
  getPerson: PropTypes.func.isRequired,
  getPersonImage: PropTypes.func.isRequired,
};
