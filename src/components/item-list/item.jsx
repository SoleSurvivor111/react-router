import React from 'react';
import PropTypes from 'prop-types';

export default class Item extends React.Component {
  handleItemSelected= () => {
    const { onItemSelected, index } = this.props;
    onItemSelected(index + 1);
  }

  handleDeleteItem = () => {
    const { id, onDeleteItem } = this.props;
    onDeleteItem(id);
  };

  render() {
    const { id, index, lable } = this.props;
    return (
      <li
        key={id}
        className="d-flex"
      >
        <div
          className="list-group-item d-flex align-items-center justify-content-between"
          role="menuitem"
          tabIndex={index}
          onClick={this.handleItemSelected}
        >
          <span>{lable}</span>
        </div>
        <button
          type="button"
          className="btn btn-outline-danger"
          onClick={this.handleDeleteItem}
        >
          Delete
        </button>
      </li>
    );
  }
}

Item.propTypes = {
  id: PropTypes.number.isRequired,
  index: PropTypes.number.isRequired,
  lable: PropTypes.string.isRequired,
  onItemSelected: PropTypes.string.isRequired,
};
