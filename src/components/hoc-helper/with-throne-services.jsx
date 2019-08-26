import React from 'react';
import { ThroneServiceConsumer } from 'components/throne-service-context';

const withThroneService = (Wrapped, mapMethodsToProps) => props => (
  <ThroneServiceConsumer>
    {
      (throneService) => {
        const serviceProps = mapMethodsToProps(throneService);
        return (
          <Wrapped {...props} {...serviceProps} />
        );
      }
    }
  </ThroneServiceConsumer>
);
export default withThroneService;
