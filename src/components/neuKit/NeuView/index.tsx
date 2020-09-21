import React from 'react';
import { NeomorphFlex } from 'react-native-neomorph-shadows';

import { TouchableContainer } from './styles';

interface neuViewProps {
  children?: React.ReactNode;
  styles: React.CSSProperties;
  swapShadows: boolean;
  darkShadowColor: string;
  lightShadowColor: string;
  onPress: () => void;
}

const NeuView = ({ children, styles, onPress, ...rest }: neuViewProps) => {
  const defaultStyle = {
    shadowOpacity: 1,
    shadowRadius: 6,
    shadowOffset: { width: 3, height: 3 },
  };

  return (
    <TouchableContainer onPress={onPress}>
      <NeomorphFlex style={{ ...defaultStyle, ...styles }} {...rest}>
        {children}
      </NeomorphFlex>
    </TouchableContainer>
  );
};

NeuView.defaultProps = {
  swapShadows: true,
  darkShadowColor: '#fff',
  lightShadowColor: '#A5AABC',
};

export default NeuView;
