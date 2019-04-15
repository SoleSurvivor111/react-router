import React, { Component } from 'react';
import 'components/random-house/random-house.css';
import Spinner from 'components/spinner';
import ThroneService from 'services/throne-service';
import ErrorIndicator from 'components/error-indicator';
import images from 'images';

export default class RandomHouse extends Component {
throneService = new ThroneService();

  state = {
    house: {},
    loading: true,
    error: false,
  }

  constructor() {
    super();
    this.updateHouse();
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
  })
}

updateHouse() {
  const id = Math.floor(Math.random() * (10 - 1)) + 1;;
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
  const content = hasData ? <HouseView house={house} /> : null;

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
const HouseView = ({ house }) => {
  const {
    id, name, region, coatOfArms, seats,
  } = house;
  return (
    <React.Fragment>
      <img
        alt=""
        className="house-image"
        src={images[id - 1]}
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
};
