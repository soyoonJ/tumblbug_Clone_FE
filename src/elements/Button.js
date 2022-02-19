import React from "react";
import styled from "styled-components";

const Button = (props) => {

    const {text, _onClick, is_float, children, margin, width, padding, disabled, fontSize, bold} = props;

    if(is_float) {
      return (
        <React.Fragment>
          <FloatButton disabled={disabled} onClick={_onClick}>{text? text : children}</FloatButton>
        </React.Fragment>
      );
    }
    
    const styles = {
      margin: margin,
      width: width,
      padding: padding,
      fontSize: fontSize,
      bold: bold,
    };

    return (
      <React.Fragment>
        <ElButton {...styles} disabled={disabled} onClick={_onClick}>{text? text : children}</ElButton>
      </React.Fragment>
    );
}

Button.defaultProps = {
    text: false,
    children: null,
    _onClick: () => {},
    is_float: false,
    margin: false,
    width: '100%',
    padding: "12px 0px",
    disabled: false,
    fontSize: '',
    bold: false,
}

const ElButton = styled.button`
    width: ${(props) => props.width};
    background-color: #fa6462;
    color: #ffffff;
    padding: ${(props) => props.padding};
    box-sizing: border-box;
    border-radius: 2px;
    border: none;
    ${(props)=> (props.margin? `margin: ${props.margin};` : '')}
    ${(props)=> (props.fontSize? `font-size: ${props.fontSize};` : '')}
    font-weight: ${(props) => (props.bold ? 700 : 400)};
`;

// 동그라미 플러스 버튼
const FloatButton = styled.button`
  width: 50px;
  height: 50px;
  background-color: #025949;
  color: #ffffff;
  box-sizing: border-box;
  font-size: 36px;
  font-weight: 800;
  position: fixed;
  bottom: 50px;
  right: 16px;
  text-align: center;
  vertical-align: middle;
  border: none;
  border-radius: 50%;
`

export default Button;