import React from 'react';
import ItemList from 'components/item-list';
import { withData, withThroneService } from 'components/hoc-helper';

const withChildrenFunction = (Wrapped, fn) => props => <Wrapped {...props}>{fn}</Wrapped>;

const mapMethodsToProps = throneService => ({
  getData: throneService.getAllPeople,
});

const PersonList = withThroneService(withData(withChildrenFunction(
  ItemList,
  i => `${i.name || i.aliases[0]} (${i.gender})`,
)), mapMethodsToProps);
const BookList = withData(withChildrenFunction(
  ItemList,
  i => `${i.name || i.aliases[0]} (${i.gender})`,
));
const HouseList = withData(withChildrenFunction(
  ItemList,
  i => `${i.name || i.aliases[0]} (${i.gender})`,
));

export {
  PersonList,
  BookList,
  HouseList,
};
