import styled from 'styled-components/native';

export const SearchWrapper = styled.View`
  margin-top: 40px;
`;

export const MessageWrapper = styled.FlatList`
  margin-top: 36px;
`;

export const MessageItem = styled.TouchableOpacity`
  flex-direction: row;
  margin-top: 12px;
`;

export const AvatarWrapper = styled.View``;

export const Avatar = styled.Image``;

export const DetailWrapper = styled.View`
  flex: 1;
  flex-direction: row;
  margin-left: 10px;
  height: 55px;
  border-bottom-color: #dbdcdd;
  border-bottom-width: 1px;
`;

export const DetailColumn = styled.View``;

export const UserName = styled.Text`
  font-family: Roboto;
  font-weight: bold;
  font-size: 12px;
  line-height: 14px;
  color: #5d6679;
`;

export const MessagePreview = styled.Text`
  margin-top: 8px;
  font-family: Roboto;
  font-size: 12px;
  line-height: 14px;
  color: #5d6679;
`;
export const TimeStampColumn = styled.View`
  margin-left: auto;
`;

export const MessageTimeStamp = styled.Text`
  font-family: Roboto;
  font-weight: bold;
  font-size: 12px;
  line-height: 14px;
  color: rgba(29, 188, 223, 0.99);
`;

export const MessageAmmount = styled.Text`
  font-family: Roboto;
  font-weight: bold;
  font-size: 10px;
  line-height: 12px;
  text-align: center;
  color: rgba(255, 255, 255, 0.99);
`;

export const MessageAmmountWrapper = styled.View`
  background: #1dbcdf;
  border-radius: 8px;
  margin-top: 7px;
  width: 32px;
  height: 15px;
`;
