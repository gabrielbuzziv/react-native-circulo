import React from 'react';
import { Provider } from 'react-redux';
import { View, Text } from 'react-native';

import 'config/ReactotronConfig';

import Store from 'store';
import Routes from 'routes';

const App = () => (
  <Provider store={Store}>
    <Routes />
  </Provider>
);

export default App;
