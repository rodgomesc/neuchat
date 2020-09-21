import React, { useContext } from 'react';
import { StatusBar } from 'react-native';
import { Container } from './styles';
import { ThemeContext } from 'styled-components';

interface neuScreenContainerProps {
  children?: React.ReactNode;
}

const neuScreenContainer = ({ children }: neuScreenContainerProps) => {
  const themeContext = useContext(ThemeContext);

  return (
    <>
      <StatusBar
        backgroundColor={themeContext.screenContainer}
        barStyle="dark-content"
      />
      <Container>{children}</Container>
    </>
  );
};

export default neuScreenContainer;
