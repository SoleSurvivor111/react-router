import React from 'react';
import ItemDetails, { Record } from '../item-details';
import ThroneService from '../../services/throne-service';

const throneService = new ThroneService();

const {
  getPerson,
  getPersonImage,
  getBook,
  getBookImage,
  getHouse,
  getHouseImage,
} = throneService;

const PersonDetails = ({ itemId }) => {
  return (
    <ItemDetails
      itemId={itemId}
      getData={getPerson}
      getImageUrl={getPersonImage}
    />
  );
};
const BookDetails = () => {};
const HouseDetails = () => {};

export {
  PersonDetails,
  BookDetails,
  HouseDetails,
};
