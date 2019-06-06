import React from 'react';
import PropTypes from 'prop-types';
import { sortableHandle, sortableElement } from 'react-sortable-hoc';

const DragHandle = sortableHandle(() => <span className="drag-handle">::</span>);

const SortableItem = sortableElement(({
  id,
  index,
  lable,
  onItemSelected,
  onDeleteItem,
}) => (
  <li
    key={id}
    className="d-flex"
  >
    <div
      className="list-group-item d-flex align-items-center justify-content-start"
      role="menuitem"
      tabIndex={index}
      onClick={onItemSelected}
    >
      <div style={{ paddingRight: '15px' }}><DragHandle /></div>
      <span>{lable}</span>
    </div>
    <button
      type="button"
      className="btn btn-outline-danger"
      onClick={onDeleteItem}
    >
      Delete
    </button>
  </li>
));
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
      <SortableItem
        id={id}
        index={index}
        lable={lable}
        onItemSelected={this.handleItemSelected}
        onDeleteItem={this.handleDeleteItem}
      />
    );
  }
}

Item.propTypes = {
  id: PropTypes.string.isRequired,
  index: PropTypes.number.isRequired,
  lable: PropTypes.string.isRequired,
  onItemSelected: PropTypes.func.isRequired,
  onDeleteItem: PropTypes.func.isRequired,
};
