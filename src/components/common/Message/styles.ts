export default {
  message: {
    width: 258,
    height: 40,
    borderRadius: 8,
    shadowOpacity: 1,
    shadowRadius: 3,
    shadowOffset: { width: 2, height: 2 },
    justifyContent: 'center',
    paddingLeft: 10,
    paddingRight: 10,
    marginVertical: 8,
  },
  messageText: {
    fontSize: 14,
    lineHeight: 16,
    fontWeight: 'normal',
  },
};

interface containerProps {
  pullRight?: boolean;
}
import styled, { css } from 'styled-components/native';

export const Container = styled.View<containerProps>`
  ${props =>
    props.pullRight &&
    css`
      margin-left: auto;
    `}
`;
