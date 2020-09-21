import React from 'react';
import { Alert, Text } from 'react-native';
import { ThemeProvider } from 'styled-components';
import defaultTheme from '@common/themes/default';
import NeuScreenContainer from '@components/neuKit/NeuScreenContainer';
import NeuButton from '@components/neuKit/NeuButton';

const App: React.FC = () => {
  return (
    <ThemeProvider theme={defaultTheme}>
      <NeuScreenContainer>
        <NeuButton onPress={() => alert('clicked!')}>
          <Text>Hello</Text>
        </NeuButton>
      </NeuScreenContainer>
    </ThemeProvider>
  );
};

export default App;
