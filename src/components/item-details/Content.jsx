import React from 'react';
import PropTypes from 'prop-types';

class Content extends React.Component {
  state = {
    isEditInput: false,
  }

  handleAddEditInput = () => {
    this.setState({
      isEditInput: true,
    });
  }

  handleDeleteEditInput = (e) => {
    const {
      onChangeProperty,
      id,
    } = this.props;
    onChangeProperty(e, 'name', id);
    this.setState({
      isEditInput: false,
    });
  }

  render() {
    const {
      name,
      characterPicture,
      childrenArr,
      ...item
    } = this.props;
    const { isEditInput } = this.state;
    return (
      <React.Fragment>
        <img
          alt={name.value}
          className="person-image"
          src={characterPicture.value || 'https://ndab.niledutch.com/NileDutch/api_imageviewer.php?contactid=520'}
          title={name.value}
        />
        <div className="card-body">
          {!isEditInput && (
            <h4
              onDoubleClick={this.handleAddEditInput}
            >
              {name.value || 'Enter name'}
            </h4>
          )}
          {isEditInput
            && (
            <input
              type="text"
              className="form-control form-control-sm"
              defaultValue={name.value}
              autoFocus
              onBlur={this.handleDeleteEditInput}
            />
            )}
          <ul className="list-group list-group-flush">
            {
          React.Children.map(
            childrenArr, child => React.cloneElement(child, { item }),
          )
        }
          </ul>
        </div>
      </React.Fragment>
    );
  }
}
export default Content;

Content.propTypes = {
  name: PropTypes.object.isRequired,
  characterPicture: PropTypes.object.isRequired,
  item: PropTypes.object,
  childrenArr: PropTypes.array.isRequired,
  id: PropTypes.string.isRequired,
  onChangeProperty: PropTypes.func.isRequired,
};
Content.defaultProps = {
  item: null,
};
