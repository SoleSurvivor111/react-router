import React, { Component } from 'react';

import ThroneService from 'services/throne-service';
import { ThroneServiceProvider } from 'components/throne-service-context';

import Header from 'components/header';
import RandomHouse from 'components/random-house';
import PeoplePage from 'components/people-page';
import ItemDetails, { Record } from 'components/item-details/item-details';
import {
  PersonDetails,
  BookDetails,
  HouseDetails,
  PersonList,
  BookList,
  HouseList,
} from 'components/got-components';
import Row from 'components/row';

import 'components/app/app.css';

export default class App extends Component {
  throneService = new ThroneService();

  state = {
    showRandomHouse: true,
  }

  toggleRandomHouse = () => {
    this.setState(state => ({
      showRandomHouse: !state.showRandomHouse,
    }));
  };

  render() {
    const { showRandomHouse } = this.state;
    const randomHouse = showRandomHouse ? <RandomHouse /> : null;
    const { getPerson, getBook } = this.throneService;
    const personDetails = (
      <ItemDetails
        itemId={5}
        getData={getPerson}
        getImageUrl={this.throneService.getPersonImage}
      >
        <Record field="gender" label="Gender" />
        <Record field="culture" label="Culture" />
        <Record field="playedBy" label="Played by:" />
      </ItemDetails>
    );
    const bookDetails = (
      <ItemDetails
        itemId={5}
        getData={getBook}
        getImageUrl={this.throneService.getPersonImage}
      >
        <Record field="authors" label="Authors:" />
        <Record field="isbn" label="Isbn:" />
        <Record field="numberOfPages" label="Number of Pages:" />
        <Record field="publisher" label="Publisher:" />
        <Record field="country" label="Country:" />
        <Record field="mediaType" label="Media type:" />
        <Record field="released" label="Released:" />
      </ItemDetails>
    );
    return (
      <div className="container">
        <ThroneServiceProvider value={this.thrineService}>
          <Header />
          {randomHouse}
          <button
            type="button"
            className="toggle-planet btn btn-warning btn-lg"
            onClick={this.toggleRandomHouse}
          >
            Toggle Random Planet
          </button>

          <PersonList>
            {({ name }) => (<span>{name}</span>)}
          </PersonList>

          <Row
            left={personDetails}
            right={bookDetails}
          />
        </ThroneServiceProvider>
      </div>
    );
  }
}
