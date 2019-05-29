import React from 'react';
import ItemList from 'components/item-list';
import ItemDetails from 'components/item-details';
import withData from 'components/hoc-helper';
import ThroneService from 'services/throne-service';

const throneService = new ThroneService();

const {
  getAllPeople,
  getAllBooks,
  getAllHouses,
} = throneService;

const PersonList = withData(ItemList, getAllPeople);
const BookList = withData(ItemList, getAllBooks);
const HouseList = withData(ItemList, getAllHouses);

export {
  PersonList,
  BookList,
  HouseList,
};
