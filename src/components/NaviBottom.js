import React from "react";
import styled from "styled-components";
import { Grid, Input, Text } from "../elements";

const NaviBottom = () => {
  return (
    <React.Fragment>
      <NaviTopLayout>
        <Grid is_flex>
          <Grid is_row width="150px">
            <Category>카테고리</Category>
            <Home>홈</Home>
          </Grid>
          <Search type="text" placeholder="검색어를 입력해주세요." />
        </Grid>
      </NaviTopLayout>
    </React.Fragment>
  );
};

const NaviTopLayout = styled.div`
  display: flex;
  position: relative;
  padding: 0px 12%;
  margin-top: 20px;
`;

const Category = styled.div`
  margin: 0px 18px 0px 0px;
  font-size: 15px;
  font-weight: 600;
`;

const Home = styled(Category)``;

const Search = styled.input`
  box-sizing: border-box;
  border-radius: 8px;
  border: none;
  background-color: rgb(243 243 243);
  width: 260px;
  min-width: 30px;
  padding: 10px 16px;
  margin-bottom: 10px;
  font-size: 12px;
`;

export default NaviBottom;
