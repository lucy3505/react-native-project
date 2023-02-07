import * as React from 'react';
import {View, Text, ActivityIndicator, LogBox} from 'react-native';

import {store} from './js/store/index';

import {Provider} from 'react-redux';
import {Provider as PaperProvider} from 'react-native-paper';
import {theme} from './js/utils/theme';

import AppNav from './js/navigator/AppNavigator';
const App = () => {
  return (
    <Provider store={store}>
      <PaperProvider theme={theme}>
        <View style={{flex: 1}}>
          <AppNav></AppNav>
        </View>
      </PaperProvider>
    </Provider>
  );
};

export default App;
