import React from "react";
import styled from "styled-components";

const Button = (props) => {

    const {text, _onClick, is_float, children, margin, height, width, padding, disabled, fontSize, bold, border, borderRadius, bg, color, flex_center} = props;

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
      height: height,
      padding: padding,
      fontSize: fontSize,
      bold: bold,
      borderRadius: borderRadius,
      bg:bg,
      color:color,
      flex_center:flex_center,
      border,
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
    height:'',
    width: '100%',
    padding: "12px 0px",
    disabled: false,
    fontSize: '',
    bold: false,
    border:"none",
    borderRadius: "2px",
    bg: "#fa6462",
    color: "#fff",
    flex_center: '',

}

const ElButton = styled.button`
    ${(props)=> (props.height? `height: ${props.height};` : '')}
    width: ${(props) => props.width};
    background-color: ${(props) => props.bg};
    color: ${(props) => props.color};
    padding: ${(props) => props.padding};
    box-sizing: border-box;
    border: ${(props) => props.border};
    ${(props)=> (props.borderRadius? `border-radius: ${props.borderRadius};` : '')}
    ${(props)=> (props.margin? `margin: ${props.margin};` : '')}
    ${(props)=> (props.fontSize? `font-size: ${props.fontSize};` : '')}
    font-weight: ${(props) => (props.bold ? 700 : 400)};
    ${(props) => props.flex_center? `display: flex; align-items: center; justify-content:center`: ""}
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