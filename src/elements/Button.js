import React from 'react';
import styled from 'styled-components';

const Button = (props) => {
  const {
    text,
    _onClick,
    children,
    margin,
    height,
    width,
    padding,
    disabled,
    fontSize,
    bold,
    border,
    borderRadius,
    bg,
    color,
    flex_center,
    weight,
  } = props;

  const styles = {
    margin: margin,
    width: width,
    height: height,
    padding: padding,
    fontSize: fontSize,
    bold: bold,
    borderRadius: borderRadius,
    bg: bg,
    color: color,
    flex_center: flex_center,
    border,
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
  height: '',
  width: '100%',
  padding: '12px 0px',
  disabled: false,
  fontSize: '16px',
  bold: false,
  border: 'none',
  borderRadius: '2px',
  bg: '#fa6462',
  color: '#fff',
  flex_center: '',
  weight: false,
};

const ElButton = styled.button`
  ${(props) => (props.height ? `height: ${props.height};` : '')}
  width: ${(props) => props.width};
  background-color: ${(props) => props.bg};
  color: ${(props) => props.color};
  padding: ${(props) => props.padding};
  box-sizing: border-box;
  border: ${(props) => props.border};
  ${(props) =>
    props.borderRadius ? `border-radius: ${props.borderRadius};` : ''}
  ${(props) => (props.margin ? `margin: ${props.margin};` : '')}
    ${(props) => (props.fontSize ? `font-size: ${props.fontSize};` : '')}
    font-weight: ${(props) => (props.bold ? 700 : 400)};
  ${(props) =>
    props.flex_center
      ? `display: flex; align-items: center; justify-content:center`
      : ''}
  cursor: pointer;
  ${(props) => (props.weight ? `font-weight: ${props.weight};` : '')}
`;

export default Button;
