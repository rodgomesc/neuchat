import React from 'react';
import { NeuView, NeuText } from '@components/neuKit';
import styles, { Container } from './styles';

interface MessageProps {
  message?: string | undefined;
  style?: React.CSSProperties;
  self?: boolean;
}

const Message = ({ message, self, style, ...rest }: MessageProps) => {
  return (
    <Container pullRight={self}>
      <NeuView
        styles={{
          ...styles.message,
          ...style,
          backgroundColor: self ? '#1DBCDF' : '#E8E9ED',
        }}
        {...rest}
      >
        <NeuText
          style={{ ...styles.messageText, color: self ? '#fff' : '#5D6679' }}
        >
          {message}
        </NeuText>
      </NeuView>
    </Container>
  );
};

export default Message;
