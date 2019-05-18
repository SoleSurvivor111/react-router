import React, { Component } from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';
import Item from 'components/item-list/item';
import 'components/item-list/item-list.css';

export default class ItemList extends Component {
  renderItems(arr) {
    const {
      searchValue,
      onItemSelected,
      checkedValues,
      itemFunctions,
    } = this.props;
    const filteredArr = arr.filter(
      (i) => {
        const values = checkedValues(i);
        return _.some(values, str => str.includes(searchValue));
      },
    );
    return filteredArr.map((item, index) => {
      const {
        children,
      } = this.props;
      const { id } = item;
      const lable = children(item);
      return (
        <Item
          onItemSelected={onItemSelected}
          id={id}
          lable={lable}
          index={index}
          {...itemFunctions}
        />
      );
    });
  }

  render() {
    const {
      itemList,
    } = this.props;
    const items = this.renderItems(itemList);
    return (
      <ul className="item-list list-group">
        {items}
      </ul>
    );
  }
}
ItemList.propTypes = {
  searchValue: PropTypes.string.isRequired,
  children: PropTypes.func.isRequired,
  checkedValues: PropTypes.func.isRequired,
  onItemSelected: PropTypes.func.isRequired,
};
const arr = ['abc', 'jbl'];

console.log(_.some(arr, 'abc'));
