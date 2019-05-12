import React from 'react';
import PropTypes from 'prop-types';
import ItemDetails from 'components/item-details';
import { Record } from 'components/item-details/item-details';

const HouseDetails = ({
  itemId,
  getHouse,
  getHouseImage,
}) => (
  <ItemDetails
    itemId={itemId}
    getData={getHouse}
    getImageUrl={getHouseImage}
  >
    <Record
      label="Region:"
      field="region"
    />
    <Record
      label="Coat of Arms:"
      field="coatOfArms"
    />
    <Record
      label="Seats:"
      field="seats"
    />
  </ItemDetails>
);
export default HouseDetails;

HouseDetails.propTypes = {
  itemId: PropTypes.string.isRequired,
  getHouse: PropTypes.func.isRequired,
  getHouseImage: PropTypes.func.isRequired,
};
