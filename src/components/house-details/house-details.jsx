import React from 'react';
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
