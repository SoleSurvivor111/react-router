import React, { Component } from 'react';
import ThroneService from 'services/throne-service';
import 'components/item-details/item-details.css';
import Spinner from 'components/spinner';

export const Record = ({ item, field, label }) => (
  <li className="list-group-item">
    <span className="term">{label}</span>
    <span>{item[field]}</span>
  </li>
);


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
    const {
      item,
      loading,
      image,
    } = this.state;
    if (!item) {
      return <span>Select a person from the list</span>;
    }
    const content = !loading ? (
      <Content
        {...item}
        itemId={this.props.itemId}
        imageUrl={image}
        children={this.props.children}
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
  name,
  aliases,
  imageUrl,
  children,
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
            children, child => React.cloneElement(child, { item })
          )
        }
      </ul>
    </div>
  </React.Fragment>
);
