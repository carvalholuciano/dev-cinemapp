import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
Icon.loadFont();

import {Provider as StoreProvider} from 'react-redux';
import {Provider as PaperProvider} from 'react-native-paper';

import AppNavigator from './navigation/AppNavigator';
import store from './store';

const App = () => {
  return (
    <StoreProvider store={store}>
      <PaperProvider>
        <AppNavigator />
      </PaperProvider>
    </StoreProvider>
  );
};

export default App;
