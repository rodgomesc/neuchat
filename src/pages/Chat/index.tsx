import React from 'react';
import Header from './Header';
import { useNavigation } from '@react-navigation/native';
import { NeuScreenContainer, NeuSearch } from '@components/neuKit';

import geraldAvatar from '@assets/images/avatar/gerald.png';

import {
  SearchWrapper,
  MessageWrapper,
  MessageItem,
  AvatarWrapper,
  Avatar,
  DetailWrapper,
  DetailColumn,
  UserName,
  MessagePreview,
  MessageTimeStamp,
  MessageAmmount,
  MessageAmmountWrapper,
  TimeStampColumn,
} from './styles';

const chatData = [
  {
    id: 1,
    avatar: geraldAvatar,
    user: 'Rodrigo Gomes',
    shortMessage: 'hello buddy',
    timeStamp: new Date(),
    unreadAmmount: 2,
  },
  {
    id: 2,
    avatar: geraldAvatar,
    user: 'Rodrigo Gomes',
    shortMessage: 'hello buddy',
    timeStamp: new Date(),
    unreadAmmount: 22,
  },
  {
    id: 3,
    avatar: geraldAvatar,
    user: 'Rodrigo Gomes',
    shortMessage: 'hello buddy',
    timeStamp: new Date(),
    unreadAmmount: 34,
  },
  {
    id: 4,
    avatar: geraldAvatar,
    user: 'Juse',
    shortMessage: 'hello buddy',
    timeStamp: new Date(),
    unreadAmmount: 2,
  },
];

const Chat: React.FC = () => {
  const navigation = useNavigation();
  return (
    <NeuScreenContainer>
      <Header />
      <SearchWrapper>
        <NeuSearch placeholder="Buscar" />
        <MessageWrapper
          data={chatData}
          renderItem={({ item }: any) => (
            <MessageItem onPress={() => navigation.navigate('ChatDetails')}>
              <AvatarWrapper>
                <Avatar source={item.avatar} />
              </AvatarWrapper>
              <DetailWrapper>
                <DetailColumn>
                  <UserName>{item.user}</UserName>
                  <MessagePreview>{item.shortMessage}</MessagePreview>
                </DetailColumn>
                <TimeStampColumn>
                  <MessageTimeStamp>{item.timestamp}</MessageTimeStamp>
                  <MessageAmmountWrapper>
                    <MessageAmmount>{item.unreadAmmount}</MessageAmmount>
                  </MessageAmmountWrapper>
                </TimeStampColumn>
              </DetailWrapper>
            </MessageItem>
          )}
          keyExtractor={message => message.id}
        ></MessageWrapper>
      </SearchWrapper>
    </NeuScreenContainer>
  );
};

export default Chat;
