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
    return arr.map((item, index) => {
      const { children, onItemSelected } = this.props;
      const { id } = item;
      const lable = children(item);
      return (
        <li
          key={id}
          className="list-group-item"
        >
          <div
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
  getData: PropTypes.func.isRequired,
  children: PropTypes.func.isRequired,
  onItemSelected: PropTypes.func.isRequired,
};
