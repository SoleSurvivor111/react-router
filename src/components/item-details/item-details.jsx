import React, { Component } from 'react';
import ThroneService from 'services/throne-service';
import 'components/item-details/item-details.css';
import Spinner from 'components/spinner';

export default class PersonDetails extends Component {
  throneService = new ThroneService();

  state ={
    item: null,
    loading: true,
    image: null,
  };

  componentDidMount() {
    this.updateItem();
  }

  componentDidUpdate(prevProps) {
    if (this.props.itemId !== prevProps.itemId) {
      this.updateItem();
    }
  }

  updateItem() {
    const {
      itemId,
      getData,
      getImageUrl,
    } = this.props;

    if (!itemId) {
      return;
    }

    this.setState({
      loading: true,
    });

    getData(itemId)
      .then((item) => {
        this.setState({
          item,
          image: getImageUrl(item),
          loading: false,
        });
      });
  }

  render() {
    const { item, loading, image } = this.state;
    if (!item) {
      return <span>Select a person from the list</span>;
    }
    const content = !loading ? (
      <Content
        {...item}
        itemId={this.props.itemId}
        image={image}
      />
    )
      : null;
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
  id,
  name,
  aliases,
  gender,
  born,
  culture,
  playedBy,
  itemId,
  image,
}) => (
  <React.Fragment>
    <img
      alt={aliases[0] || name}
      className="person-image"
      src={image}
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
