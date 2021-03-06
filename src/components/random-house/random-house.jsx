import React, { Component } from 'react';
import PropTypes from 'prop-types';
import 'components/random-house/random-house.css';
import Spinner from 'components/spinner';
import ThroneService from 'services/throne-service';
import ErrorIndicator from 'components/error-indicator';
import { imagesHouse } from 'images';

export default class RandomHouse extends Component {
throneService = new ThroneService();

  state = {
    house: {},
    loading: true,
    error: false,
  }

  componentDidMount() {
    this.updateHouse();
    this.interval = setInterval(this.updateHouse, 3000);
  }

  componentWillUnmount() {
    clearInterval(this.inteval);
  }

  onHouseLoaded = (house) => {
    this.setState({
      house,
      loading: false,
    });
  }

onError = () => {
  this.setState({
    error: true,
    loading: false,
  });
}

updateHouse = () => {
  const id = Math.floor(Math.random() * (10 - 1)) + 1;
  this.throneService
    .getHouse(id)
    .then(this.onHouseLoaded)
    .catch(this.onError);
}

render() {
  const { house, loading, error } = this.state;
  const hasData = !(loading || error);
  const errorMessage = error ? <ErrorIndicator /> : null;
  const spinner = loading ? <Spinner /> : null;
  const content = hasData ? <HouseView {...house} /> : null;

  if (loading) {
    return <Spinner />;
  }

  return (
    <div className="random-house jumbotron rounded">
      {spinner}
      {content}
      {errorMessage}
    </div>

  );
}
}
const HouseView = ({
  id, name, region, coatOfArms, seats,
}) => (
  <React.Fragment>
    <img
      alt=""
      className="house-image"
      src={imagesHouse[id - 1]}
    />
    <div>
      <h4>{name}</h4>
      <ul className="list-group list-group-flush">
        <li className="list-group-item">
          <span className="term">Region:</span>
          <span>{region}</span>
        </li>
        <li className="list-group-item">
          <span className="term">Coat of Arms:</span>
          <span>{coatOfArms}</span>
        </li>
        <li className="list-group-item">
          <span className="term">Seats:</span>
          <span>{seats}</span>
        </li>
      </ul>
    </div>
  </React.Fragment>
);
HouseView.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  region: PropTypes.string.isRequired,
  coatOfArms: PropTypes.string.isRequired,
  seats: PropTypes.string.isRequired,
};
