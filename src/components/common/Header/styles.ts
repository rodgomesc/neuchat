import styled from 'styled-components/native';

export const Container = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const IconWrapper = styled.Image``;

export const AvatarWrapper = styled.Image.attrs({
  resizeMode: 'contain',
})`
  width: 48px;
  height: 48px;
`;
