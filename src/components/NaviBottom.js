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
          <Search>
            <input type="text" placeholder="검색어를 입력해주세요." />
          </Search>
        </Grid>
      </NaviTopLayout>
    </React.Fragment>
  );
};

const NaviTopLayout = styled.div`
  position: relative;

  display: flex;
  align-items: center;
  width: 100%;
  min-height: 56px;
  max-width: 1160px;
`;

const Category = styled.div`
  margin: 0px 18px 0px 0px;
  padding: 0px 6px;
  font-size: 15px;
  font-weight: 600;
  cursor: pointer;
`;

const Home = styled(Category)``;

const Search = styled.div`
  display: inline-flex;
  box-sizing: border-box;
  border-radius: 8px;
  border: none;
  background-color: rgb(243 243 243);
  min-width: 30px;
  padding: 5px 16px;
  margin-bottom: 10px;
  align-items: center;

  input {
    background-color: rgb(243 243 243);
    border: none;
    font-size: 12px;
    line-height: 28px;
    letter-spacing: 0.02em;
  }
`;

export default NaviBottom;
