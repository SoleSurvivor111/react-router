import React, { Component } from 'react';
import PropTypes from 'prop-types';

import 'components/item-list/item-list.css';

export default class ItemList extends Component {

  renderItems(arr) {
    console.log(arr);
    const { searchValue, onItemSelected } = this.props;
    const filteredArr = arr.filter(
      (i) => {
        const value = i.aliases || i.name;
        return value.includes(searchValue);
      },
    );
    return filteredArr.map((item, index) => {
      const {
        children,
      } = this.props;
      const { id } = item;
      const lable = children(item);
      return (
        <li
          key={index + 1}
        >
          <div
            className="list-group-item"
            role="menuitem"
            tabIndex={index}
            onClick={() => onItemSelected(index + 1)}
          >
            {lable}
          </div>
        </li>
      );
    });
  }

  render() {
    const { itemList } = this.props;
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
  onItemSelected: PropTypes.func.isRequired,
};
