import React from 'react';

import { ThemeProvider } from 'styled-components';
import defaultTheme from '@common/themes/default';

import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import Routes from './routes/index.routes';

const App: React.FC = () => {
  return (
    <ThemeProvider theme={defaultTheme}>
      <NavigationContainer>
        <Routes />
      </NavigationContainer>
    </ThemeProvider>
  );
};

export default App;
