import React from "react";
import styled from "styled-components";

const Grid = (props) => {
  // props 넣어주기
  const { is_flex, width, margin, padding, bg, center, _onClick, children,  } = props;

  // 위에 props에서 children만 빼고 스타일 속성끼리 묶은 것!
  const styles = {
      is_flex: is_flex,
      width: width,
      margin: margin,
      padding: padding,
      bg: bg,
      center: center,
      
  };
  return (
    // 전체 감싸주는거 안에 하나는 꼭 포함되어 있어야되는데, div는 비효율적이니까 React.Fragment 사용
    <React.Fragment>
      {/* 하위에 다른 컴포넌트 같이 쓰려면 children 써야 함 */}
      <GridBox {...styles} onClick={_onClick}>{children}</GridBox>
    </React.Fragment>
  );
};

Grid.defaultProps = {
  chidren: null,
  is_flex: false,
  width: "100%",
  padding: false,
  margin: false,
  bg: null,
  center: false,
  _onClick: () => {}
};

// defaultProps를 가지고 스타일 어떻게 줄건지
const GridBox = styled.div`
  width: ${(props) => props.width};
  height: 100%;
  box-sizing: border-box;
  ${(props) => (props.padding ? `padding: ${props.padding};` : "")}
  ${(props) => (props.margin ? `margin: ${props.margin};` : "")}
  ${(props) => (props.bg ? `background: ${props.bg};` : "")}
  ${(props) =>
    // is_flex에 고정기능으로 넣어줄 flexbox 속성 다 넣어주기!
    props.is_flex
      ? `display: flex; align-items: center; justify-content: space-between;  `
      : ""}
  
    //  props가 center면 text-align을 center로 줌!
  ${(props) => props.center? `text-align: center`:''}
`;

export default Grid;
