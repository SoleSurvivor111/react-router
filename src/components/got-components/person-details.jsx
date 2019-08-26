import React from 'react';
import PropTypes from 'prop-types';
import ItemDetails, { Record } from 'components/item-details/item-details';
import { withThroneService } from 'components/hoc-helper';

const PersonDetails = props => (
  <ItemDetails
    {...props}
  >
    <Record field="gender" label="Gender" />
    <Record field="culture" label="Culture" />
    <Record field="playedBy" label="Played by:" />
  </ItemDetails>
);

const mapMethodsToProps = throneService => ({
  getData: throneService.getPerson,
  getImageUrl: throneService.getImageUrl,
});
export default withThroneService(PersonDetails, mapMethodsToProps);

PersonDetails.propTypes = {
  throneService: PropTypes.object.isRequired,
  itemId: PropTypes.string.isRequired,
};
