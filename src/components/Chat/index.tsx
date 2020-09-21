import React from 'react';
import Header from './Header';
import { SearchWrapper } from './styles';
import { NeuScreenContainer, NeuSearch } from '@components/neuKit';

const Chat: React.FC = () => {
  return (
    <NeuScreenContainer>
      <Header />
      <SearchWrapper>
        <NeuSearch placeholder="Buscar" />
      </SearchWrapper>
    </NeuScreenContainer>
  );
};

export default Chat;
