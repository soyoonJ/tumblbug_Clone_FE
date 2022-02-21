import React from "react";
import styled from "styled-components";
import { Grid } from "../elements";

const Category = (props) => {
  const [choice, setChoice] = React.useState("카테고리");

  // const setFilter = (num) => {
  //   setChoice(num === 0 ? "카테고리" : num === 1 ? "" : "");
  // };

  return (
    <>
      <CategoryBox>
        {choice}
        <CategoryList>
          <Full>카테고리</Full>
          <Li>디자인문구</Li>
          <Li>푸드</Li>
          <Li>캐릭터/굿즈</Li>
          <Li>향수/뷰티</Li>
          <Li>음악</Li>
        </CategoryList>
      </CategoryBox>
    </>
  );
};

const CategoryBox = styled.ul`
  z-index: 99;

  font-weight: 600;
  line-height: 50px;
  font-size: 15px;
  cursor: pointer;

  &:hover {
    color: rgb(255, 87, 87);
    Li {
      display: block;
    }
  }
`;

const CategoryList = styled.div`
  overflow: hidden;
  display: flex;
  justify-content: space-between;
  flex-flow: row wrap;
  color: rgb(61 61 61);
  margin: 0px 10% 0px 0px;
`;

const Full = styled.li`
  display: none;
  cursor: pointer;
  font-size: 13px;
`;

const Li = styled.li`
  display: none;
  cursor: pointer;
  font-size: 13px;
  font-weight: 400;
`;

export default Category;
