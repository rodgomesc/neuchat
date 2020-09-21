import React from 'react';

import { NeuView } from '@components/neuKit';
import styles from './styles';

interface neuButtonProps {
  children?: React.ReactNode;
  onPress: () => void;
}

const neuButton = ({ children, onPress }: neuButtonProps) => {
  return (
    <NeuView onPress={onPress} styles={styles.neuButton}>
      {children}
    </NeuView>
  );
};

export default neuButton;
