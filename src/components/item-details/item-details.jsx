import React from 'react';
import PropTypes from 'prop-types';
import Content from 'components/item-details/Content';
import 'components/item-details/item-details.css';

export class Record extends React.Component {
  state = {
    isEditInput: false,
  }

  handleAddEditInput = () => {
    this.setState({
      isEditInput: true,
    });
  }

  handleDeleteItem = (e) => {
    const {
      onChangeProperty,
      field,
      item,
    } = this.props;
    onChangeProperty(e, field, item.id);
    this.setState({
      isEditInput: false,
    });
  }

  render() {
    const {
      item,
      field,
      label,
    } = this.props;
    const { isEditInput } = this.state;
    const value = !isEditInput && (
    <span>{item[field]}</span>
    );
    const editInput = isEditInput
      && (
      <input
        type="text"
        className="form-control form-control-sm"
        defaultValue={item[field]}
        autoFocus
        onBlur={this.handleDeleteItem}
      />
      );
    return (
      <li
        className="list-group-item"
        onDoubleClick={this.handleAddEditInput}
        key={item.id}
      >
        <span
          className="term"
        >
          {label}
        </span>
        {value}
        {editInput}
      </li>
    );
  }
}

Record.propTypes = {
  item: PropTypes.object,
  field: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  onChangeProperty: PropTypes.func.isRequired,
};

Record.defaultProps = {
  item: null,
};
const ItemDetails = ({ children, getData, onChangeProperty }) => (
  <div className="person-details card">
    <Content
      {...getData}
      childrenArr={children}
      onChangeProperty={onChangeProperty}
    />
  </div>
);
export default ItemDetails;

ItemDetails.propTypes = {
  getData: PropTypes.object.isRequired,
  children: PropTypes.node,
  onChangeProperty: PropTypes.func.isRequired,
};

ItemDetails.defaultProps = {
  children: null,
};
