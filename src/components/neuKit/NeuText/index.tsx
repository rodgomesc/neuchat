import React from 'react';
import { ReactTestRenderer } from 'react-test-renderer';

import { NeuTextWrapper } from './styles';

interface neuTextProps {
  text: string;
  style: React.CSSProperties;
}

const NeuText = ({ text, style }: neuTextProps) => {
  return <NeuTextWrapper style={style}>{text}</NeuTextWrapper>;
};

export default NeuText;
