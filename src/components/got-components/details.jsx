import React from 'react';
import ItemDetails, { Record } from 'components/item-details/item-details';
import { ThroneServiceConsumer } from 'components/throne-service-context';
import ThroneService from '../../services/throne-service';

const throneService = new ThroneService();

const {
  getBook,
  getBookImage,
  getHouse,
  getHouseImage,
} = throneService;

const BookDetails = () => {};
const HouseDetails = () => {};

export {
  PersonDetails,
  BookDetails,
  HouseDetails,
};
