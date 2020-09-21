import React from 'react';
import { NeuButton, NeuText } from '@components/neuKit';
import plusIcon from '@assets/images/icons/plus.png';
import rodrigoAvatar from '@assets/images/avatar/rodrigo.png';
import { Container, IconWrapper, AvatarWrapper } from './styles';

const Header: React.FC = () => {
  return (
    <Container>
      <NeuButton onPress={() => alert('cliqued from header!')}>
        <AvatarWrapper source={rodrigoAvatar} />
      </NeuButton>
      <NeuText
        text="Rodrigo Gomes"
        style={{ marginLeft: 18, marginRight: 'auto' }}
      />
      <NeuButton
        onPress={() => alert('cliqued from header!')}
        style={{ backgroundColor: '#1DBCDF' }}
      >
        <IconWrapper source={plusIcon} />
      </NeuButton>
    </Container>
  );
};

export default Header;
