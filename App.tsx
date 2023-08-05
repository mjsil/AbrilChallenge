import React from 'react';
import { StatusBar } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { ThemeProvider } from 'styled-components/native';

import { theme } from '~/theme';
import { Routes } from '~/routes';

const App = () => {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <ThemeProvider theme={theme}>
        <StatusBar barStyle="dark-content" backgroundColor="transparent" translucent />
        <Routes />
      </ThemeProvider>
    </GestureHandlerRootView>
  );
};

export default App;
