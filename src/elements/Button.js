import React from 'react';
import styled from 'styled-components';

const Button = (props) => {
  const {
    text,
    _onClick,
    children,
    margin,
    width,
    padding,
    disabled,
    fontSize,
    weight,
    bold,
  } = props;

  const styles = {
    margin: margin,
    width: width,
    padding: padding,
    fontSize: fontSize,
    bold: bold,
    weight,
  };

  return (
    <React.Fragment>
      <ElButton {...styles} disabled={disabled} onClick={_onClick}>
        {text ? text : children}
      </ElButton>
    </React.Fragment>
  );
};

Button.defaultProps = {
  text: false,
  children: null,
  _onClick: () => {},
  margin: false,
  width: '100%',
  padding: '12px 0px',
  disabled: false,
  weight: false,
  fontSize: '',
  bold: false,
};

const ElButton = styled.button`
  cursor: pointer;
  width: ${(props) => props.width};
  background-color: #fa6462;
  color: #ffffff;
  padding: ${(props) => props.padding};
  box-sizing: border-box;
  border: none;
  ${(props) => (props.margin ? `margin: ${props.margin};` : '')}
  ${(props) => (props.weight ? `font-weight: ${props.weight};` : '')}
  border-radius: 1px;
  font-size: 16px;
  border: none;
  ${(props) => (props.fontSize ? `font-size: ${props.fontSize};` : '')}
  font-weight: ${(props) => (props.bold ? 700 : 400)};
`;

export default Button;
