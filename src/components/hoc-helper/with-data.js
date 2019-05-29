import React from 'react';
import Spinner from 'components/spinner';
import ErrorIndicator from 'components/error-indicator';

const withData = (View, getData) => class extends React.Component {
  state = {
    data: null,
  };

  componentDidMount() {
    getData()
      .then((data) => {
        this.setState({
          data,
        });
      });
  }

  render() {
    const { data } = this.state;

    if (!data) {
      return <Spinner />;
    }
    return (
      <View
        {...this.props}
        data={data}
      />
    );
  }
};
export default withData;
