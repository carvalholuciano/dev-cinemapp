import React from 'react';
import {ActivityIndicator} from 'react-native';

import {Container} from './styles';

const Loading = ({loading}) => {
  return (
    loading && (
      <Container>
        <ActivityIndicator color="black" />
      </Container>
    )
  );
};

export default Loading;
