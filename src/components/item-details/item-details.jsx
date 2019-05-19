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
    } = this.props;
    onChangeProperty(e, field);
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
};

Record.defaultProps = {
  item: null,
};
const PersonDetails = ({ children, getData, onChangeProperty }) => (
  <div className="person-details card">
    <Content
      {...getData}
      childrenArr={children}
      onChangeProperty={onChangeProperty}
    />
  </div>
);
export default PersonDetails;

PersonDetails.propTypes = {
  getData: PropTypes.object.isRequired,
  children: PropTypes.node,
};

PersonDetails.defaultProps = {
  children: null,
};
