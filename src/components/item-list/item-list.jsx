import React, { Component } from 'react';
import Spinner from 'components/spinner';
import PropTypes from 'prop-types';

import 'components/item-list/item-list.css';

export default class ItemList extends Component {
  state = {
    itemList: null,
  };

  componentDidMount() {
    const { getData } = this.props;

    getData()
      .then((itemList) => {
        this.setState({
          itemList,
        });
      });
  }

  renderItems(arr) {
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
          key={id}
        >
          <div
            className="list-group-item"
            role="menuitem"
            tabIndex={index}
            onClick={() => onItemSelected(id)}
          >
            {lable}
          </div>
        </li>
      );
    });
  }

  render() {
    const { itemList } = this.state;

    if (!itemList) {
      return <Spinner />;
    }

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
  getData: PropTypes.func.isRequired,
  children: PropTypes.func.isRequired,
  onItemSelected: PropTypes.func.isRequired,
};
