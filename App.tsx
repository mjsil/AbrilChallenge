import React from 'react';
import { StatusBar } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { Provider } from 'react-redux';
import { ThemeProvider } from 'styled-components/native';

import { store } from '~/redux/store';
import { theme } from '~/theme';
import { Routes } from '~/routes';

const App = () => {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <StatusBar barStyle="dark-content" backgroundColor="transparent" translucent />
          <Routes />
        </ThemeProvider>
      </Provider>
    </GestureHandlerRootView>
  );
};

export default App;
