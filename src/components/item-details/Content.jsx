import React from 'react';
import PropTypes from 'prop-types';
import { urlCheckExpression } from 'const';

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
          alt={name}
          className="person-image"
          src={characterPicture.match(urlCheckExpression) || 'https://ndab.niledutch.com/NileDutch/api_imageviewer.php?contactid=520'}
          title={name}
        />
        <div className="card-body">
          {!isEditInput && (
            <h4
              onDoubleClick={this.handleAddEditInput}
            >
              {name || 'Enter name'}
            </h4>
          )}
          {isEditInput
            && (
            <input
              type="text"
              className="form-control form-control-sm"
              defaultValue={name}
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
  name: PropTypes.string.isRequired,
  characterPicture: PropTypes.string.isRequired,
  item: PropTypes.object,
  childrenArr: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string,
    name: PropTypes.string,
    region: PropTypes.string,
    coatOfArms: PropTypes.string,
    seats: PropTypes.string,
    aliases: PropTypes.string,
    gender: PropTypes.string,
    born: PropTypes.string,
    culture: PropTypes.string,
    playedBy: PropTypes.string,
  })).isRequired,
  id: PropTypes.string.isRequired,
  onChangeProperty: PropTypes.func.isRequired,
};
Content.defaultProps = {
  item: null,
};
