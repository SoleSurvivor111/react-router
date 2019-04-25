import React, { Component } from 'react';
import ItemList from 'components/item-list';
import PersonDetails from 'components/item-details';
import ErrorIndicator from 'components/error-indicator';
import ThroneService from 'services/throne-service';
import 'components/people-page/people-page.css';
import ErrorBoundry from 'components/error-boundry';
import Row from 'components/row';
import { Record } from 'components/item-details/item-details';
import { withRouter } from 'react-router-dom';

class HousePage extends Component {
  throneService = new ThroneService();

  state = {
    hasError: null,
  }

  onHouseSelected = (itemId) => {
    const { history } = this.props;
    history.push(itemId);
  }

  render() {
    const {
      hasError,
    } = this.state;
    const {
      getHouse,
      getHouseImage,
    } = this.throneService;
    const { match } = this.props;
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
        itemId={match.params.id}
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
        <h2>Houses</h2>
        <Row
          left={itemList}
          right={personDetails}
        />
      </ErrorBoundry>
    );
  }
}
export default withRouter(HousePage);
