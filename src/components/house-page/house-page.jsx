import React, { Component } from 'react';
import ItemList from 'components/item-list';
import PersonDetails from 'components/item-details';
import ErrorIndicator from 'components/error-indicator';
import ThroneService from 'services/throne-service';
import 'components/people-page/people-page.css';
import ErrorBoundry from 'components/error-boundry';
import Row from 'components/row';
import { Record } from 'components/item-details/item-details';


export default class HousePage extends Component {
  throneService = new ThroneService();

  state = {
    selectedHouse: null,
  }

  onHouseSelected = (id) => {
    this.setState({
      selectedHouse: id,
    });
  }

  render() {
    const {
      selectedHouse,
      hasError,
    } = this.state;
    const {
      getHouse,
      getHouseImage,
    } = this.throneService;
    if (hasError) {
      return <ErrorIndicator />;
    }
    const itemList = (
      <ItemList
        onItemSelected={this.onHouseSelected}
        getData={this.throneService.getAllHouses}
      >
        {i => `${i.name} (${i.region})`}
      </ItemList>
    );
    const personDetails = (
      <PersonDetails
        itemId={selectedHouse}
        getData={getHouse}
        getImageUrl={getHouseImage}
      >
        <Record
          label="Region:"
          field="region"
        />
        <Record
          label="Coat of Arms:"
          field="coatOfArms"
        />
        <Record
          label="Seats:"
          field="seats"
        />
      </PersonDetails>
    );
    return (
      <ErrorBoundry>
        <Row
          left={itemList}
          right={personDetails}
        />
      </ErrorBoundry>
    );
  }
}
