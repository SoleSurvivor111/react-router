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
const withChildrenFunction = (Wrapped, fn) => props => <Wrapped {...props}>{fn}</Wrapped>;

const PersonList = withData(withChildrenFunction(
  ItemList,
  i => `${i.name || i.aliases[0]} (${i.gender})`,
), getAllPeople);
const BookList = withData(withChildrenFunction(
  ItemList,
  i => `${i.name || i.aliases[0]} (${i.gender})`,
), getAllBooks);
const HouseList = withData(withChildrenFunction(
  ItemList,
  i => `${i.name || i.aliases[0]} (${i.gender})`,
), getAllHouses);

export {
  PersonList,
  BookList,
  HouseList,
};
