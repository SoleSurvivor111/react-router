import React from 'react';
import PropTypes from 'prop-types';

const Content = ({
  name,
  aliases,
  imageUrl,
  childrenArr,
  id,
  ...item
}) => (
  <React.Fragment>
    <img
      alt={aliases || name}
      className="person-image"
      src={imageUrl}
      title={aliases || name}
    />
    <div className="card-body">
      <h4>{aliases || name}</h4>
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
