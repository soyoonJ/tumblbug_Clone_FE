import React from 'react';
import styled from 'styled-components';

const Text = (props) => {
  const { bold, color, size, children, margin, no_wrap } = props;

  const styles = { bold: bold, color: color, size: size, margin, no_wrap };
  return <P {...styles}>{children}</P>;
};

Text.defaultProps = {
  children: null,
  bold: false,
  color: '#222831',
  size: '14px',
  margin: false,
  no_wrap: false,
};

const P = styled.p`
  color: ${(props) => props.color};
  font-size: ${(props) => props.size};
  font-weight: ${(props) => (props.bold ? '600' : '400')};
  ${(props) => (props.margin ? `margin: ${props.margin};` : '')}
  ${(props) => (props.no_wrap ? ` white-space: nowrap;` : '')}

  span {
    color: rgb(39, 163, 255);
    text-decoration: underline;
  }
`;

export default Text;
