import styled from 'styled-components/native';

export const HeaderWrapper = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const ImageIcon = styled.Image.attrs({
  resizeMode: 'contain',
})``;

export const MessagesWrapper = styled.ScrollView`
  flex: 1;

  padding-top: 40px;
`;
