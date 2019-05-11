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
    return arr.map((item) => {
      const { children } = this.props;
      const { id } = item;
      const lable = children(item);
      return (
        <li
          className="list-group-item"
          key={id}
          onClick={() => this.props.onItemSelected(id)}
        >
          {lable}
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
};
