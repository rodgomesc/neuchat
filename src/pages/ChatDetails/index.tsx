import React from 'react';

import { NeuScreenContainer, NeuButton, NeuText } from '@components/neuKit';
import Message from '@components/common/Message';

import arrowLeft from '@assets/images/icons/arrow-left.png';
import Phone from '@assets/images/icons/phone.png';

import { useNavigation } from '@react-navigation/native';

import { ImageIcon, HeaderWrapper, MessagesWrapper } from './styles';

const ChatDetails: React.FC = () => {
  const navigation = useNavigation();
  return (
    <NeuScreenContainer>
      <HeaderWrapper>
        <NeuButton onPress={() => navigation.goBack()}>
          <ImageIcon source={arrowLeft} />
        </NeuButton>
        <NeuText style={{ marginLeft: 18, marginRight: 'auto' }}>
          Rodrigo Gomes
        </NeuText>
        <NeuButton onPress={() => alert('cliqued from header!')}>
          <ImageIcon source={Phone} />
        </NeuButton>
      </HeaderWrapper>
      <MessagesWrapper
        contentContainerStyle={{ paddingLeft: 3, paddingRight: 3 }}
      >
        <Message self message="Hello, how are you?" />
        <Message message="Hy, Rodrigo! its ben awhyle" />
      </MessagesWrapper>
    </NeuScreenContainer>
  );
};

export default ChatDetails;
