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

  handleDeleteItem = (e) => {
    const {
      onChangeProperty,
    } = this.props;
    onChangeProperty(e, 'name');
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
          src={characterPicture}
          title={name}
        />
        <div className="card-body">
          {!isEditInput && (
            <h4
              onDoubleClick={this.handleAddEditInput}
            >
              {name}
            </h4>
          )}
          {isEditInput
            && (
            <input
              type="text"
              className="form-control form-control-sm"
              defaultValue={name}
              autoFocus
              onBlur={this.handleDeleteItem}
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
  imageUrl: PropTypes.string.isRequired,
  aliases: PropTypes.string,
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
};

Content.defaultProps = {
  aliases: null,
};
