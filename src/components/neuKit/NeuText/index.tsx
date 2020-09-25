import React from 'react';
import { ReactTestRenderer } from 'react-test-renderer';

import { NeuTextWrapper } from './styles';

interface neuTextProps {
  children: React.ReactNode;
  style?: React.CSSProperties;
}

const NeuText = ({ children, style }: neuTextProps) => {
  return <NeuTextWrapper style={style}>{children}</NeuTextWrapper>;
};

export default NeuText;
