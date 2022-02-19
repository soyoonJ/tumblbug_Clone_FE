import React from 'react';
import styled from 'styled-components';

const Text = (props) => {
  const {
    bold,
    color,
    size,
    children,
    margin,
    no_wrap,
    weight,
    center,
    wordBreak,
  } = props;

  const styles = {
    bold: bold,
    color: color,
    size: size,
    margin,
    no_wrap,
    weight,
    center,
    wordBreak,
  };
  return <P {...styles}>{children}</P>;
};

Text.defaultProps = {
  children: null,
  bold: false,
  color: '#222831',
  size: '14px',
  margin: false,
  no_wrap: false,
  weight: 400,
  center: false,
  wordBreak: false,
  padding: false,
};

const P = styled.p`
  color: ${(props) => props.color};
  font-size: ${(props) => props.size};
  font-weight: ${(props) => (props.bold ? '600' : '400')};
  ${(props) => (props.margin ? `margin: ${props.margin};` : '')}
  ${(props) => (props.no_wrap ? ` white-space: nowrap;` : '')}
  ${(props) => (props.weight ? `font-weight: ${props.weight};` : '')}
  ${(props) => (props.center ? 'text-align: center;' : '')}
  ${(props) => (props.wordBreak ? `word-break: keep-all;` : '')}

  span {
    color: rgb(39, 163, 255);
    text-decoration: underline;
    margin: 0 0 0 4px;
    cursor: pointer;
  }
`;

export default Text;
