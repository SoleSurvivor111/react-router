import React, { Component } from 'react';
import ThroneService from 'services/throne-service';
import 'components/person-details/person-details.css';
import { imagesPerson } from 'images';
import Spinner from 'components/spinner';

export default class PersonDetails extends Component {
  throneService = new ThroneService();

  state ={
    person: null,
    loading: true,
  };

  componentDidMount() {
    this.updatePerson();
  }

  componentDidUpdate(prevProps) {
    if (this.props.personId !== prevProps.personId) {
      this.updatePerson();
    }
  }

  async getImage() {
    const res = await this.getResource('/characters/');
    return res.map(this._transformPerson);
  }

  updatePerson() {
    const { personId } = this.props;
    if (!personId) {
      return;
    }

    this.setState({
      loading: true,
    });

    this.throneService
      .getPerson(personId)
      .then((person) => {
        this.setState({
          person,
          loading: false,
        });
      });
  }

  render() {
    const { person, loading } = this.state;
    if (!person) {
      return <span>Select a person from the list</span>;
    }
    const content = !loading ? <Content {...person} personId={this.props.personId} /> : null;
    const spinner = loading ? <Spinner /> : null;
    return (
      <div className="person-details card">
        {content}
        {spinner}
      </div>
    );
  }
}

const Content = ({
  id, name, aliases, gender, born, culture, playedBy, personId,
}) => (
  <React.Fragment>
    <img
      alt={aliases[0] || name}
      className="person-image"
      src={imagesPerson[personId - 1]}
      title={aliases[0] || name}
    />
    <div className="card-body">
      <h4>{aliases[0] || name}</h4>
      <ul className="list-group list-group-flush">
        <li className="list-group-item">
          <span className="term">Gender:</span>
          <span>{gender}</span>
        </li>
        <li className="list-group-item">
          <span className="term">Birth Year:</span>
          <span>{born || 'no'}</span>
        </li>
        <li className="list-group-item">
          <span className="term">Culture:</span>
          <span>{culture || 'no'}</span>
        </li>
        <li className="list-group-item">
          <span className="term">Played by:</span>
          <span>{playedBy[0] || 'no'}</span>
        </li>
      </ul>
    </div>
  </React.Fragment>
);
