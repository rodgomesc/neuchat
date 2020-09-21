import React from 'react';
import { NeuView } from '@components/neuKit';
import { TextInput } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import styles from './styles';

type TextInputProps = React.ComponentProps<typeof TextInput>;

interface neuSearchProps extends Omit<TextInputProps, 'style'> {
  style?: React.CSSProperties;
}

const NeuSearch = ({ style, ...rest }: neuSearchProps) => {
  return (
    <LinearGradient
      colors={['#E8E9ED', '#FFFFFF']}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 0 }}
      style={{ borderRadius: styles.neuSearch.borderRadius }}
    >
      <NeuView
        inner
        darkShadowColor="#A5AABC"
        lightShadowColor="#fff"
        styles={{ ...styles.neuSearch, ...style }}
      >
        <TextInput {...rest} />
      </NeuView>
    </LinearGradient>
  );
};

export default NeuSearch;
