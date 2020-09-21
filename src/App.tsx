import React from 'react';

import { ThemeProvider } from 'styled-components';
import defaultTheme from '@common/themes/default';
import Chat from '@components/Chat';

const App: React.FC = () => {
  return (
    <ThemeProvider theme={defaultTheme}>
      <Chat />
    </ThemeProvider>
  );
};

export default App;
