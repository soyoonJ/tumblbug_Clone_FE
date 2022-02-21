import React from 'react';
import styled from 'styled-components';

const Button = (props) => {

    const {text, _onClick, children, margin, height, width, padding, disabled, fontSize, bold, border, borderRadius, bg, color, flex_center, weight, donateHover, CancelHover, FollowHover, AskHover} = props;
    
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
      weight,
      donateHover,
      CancelHover,
      FollowHover,
      AskHover,
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
    margin: false,
    height:'',
    width: '100%',
    padding: "12px 0px",
    disabled: false,
    fontSize: '16px',
    bold: false,
    border:"none",
    borderRadius: "2px",
    bg: "#fa6462",
    color: "#fff",
    flex_center: '',
    weight: false,
    donateHover: false,
    CancelHover: false,
    FollowHover: false,
    AskHover: false,
}

const ElButton = styled.button`
    ${(props)=> (props.height? `height: ${props.height};` : '')};
    width: ${(props) => props.width};
    background-color: ${(props) => props.bg};
    color: ${(props) => props.color};
    padding: ${(props) => props.padding};
    box-sizing: border-box;
    border: ${(props) => props.border};
    ${(props)=> (props.borderRadius? `border-radius: ${props.borderRadius};` : '')};
    ${(props)=> (props.margin? `margin: ${props.margin};` : '')};
    ${(props)=> (props.fontSize? `font-size: ${props.fontSize};` : '')};
    font-weight: ${(props) => (props.bold ? 700 : 400)};
    ${(props) => props.flex_center? `display: flex; align-items: center; justify-content:center`: ""};
    cursor: pointer;
    ${(props) => (props.weight ? `font-weight: ${props.weight};` : '')};

    // 상세 후원하기 버튼 hover
    ${(props) => (props.donateHover ?
      `:hover {
          background-color: rgb(255, 69, 67);
          color: rgb(255, 255, 255);
          transition: opacity 0.1s ease 0s, background-color 0.1s ease 0s, color 0.1s ease 0s, box-shadow 0.1s ease 0s, background 0.1s ease 0s;
        }` : '')};
    // 상세 후원취소하기 버튼 hover
    ${(props) => (props.CancelHover ?
      `:hover {
          background-color: rgb(217, 217, 217);
          color: rgb(0, 0, 0);
          transition: opacity 0.1s ease 0s, background-color 0.1s ease 0s, color 0.1s ease 0s, box-shadow 0.1s ease 0s, background 0.1s ease 0s;
        }` : '')};
    // 상세 팔로우하기 버튼 hover
    ${(props) => (props.FollowHover ?
      `:hover {
          background-color: rgba(240, 240, 240, 0.7);
          color: rgb(61, 61, 61);
        }` : '')};
    // 상세 문의하기 버튼 hover
    ${(props) => (props.AskHover ?
      `:hover {
          color: rgb(61, 61, 61);
          border: 1px solid rgb(158, 158, 158);
          transition: all 0.3s ease-in-out 0s;
        }` : '')};
`

export default Button;
