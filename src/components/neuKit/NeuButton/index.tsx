import React from 'react';
import { NeuView } from '@components/neuKit';
import styles from './styles';

interface neuButtonProps {
  children?: React.ReactNode;
  style?: React.CSSProperties;
  onPress: () => void;
}

const neuButton = ({ children, style, onPress, ...rest }: neuButtonProps) => {
  return (
    <NeuView
      onPress={onPress}
      styles={{ ...styles.neuButton, ...style }}
      {...rest}
    >
      {children}
    </NeuView>
  );
};

export default neuButton;
