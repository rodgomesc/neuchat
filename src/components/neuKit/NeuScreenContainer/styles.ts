import styled from 'styled-components/native';
import constants from '@common/constants/layout';

export const Container = styled.SafeAreaView`
  flex: 1;
  background: ${props => props.theme.screenContainer};
  padding: ${constants.screenContainer.padding};
`;
