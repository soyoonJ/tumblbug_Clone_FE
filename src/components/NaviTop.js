import React from "react";
import styled from "styled-components";
import { Grid, Text } from "../elements";

const NaviTop = (props) => {
  return (
    <React.Fragment>
      <NaviTopLayout>
        <Grid is_flex>
          <LogoImg src="./img/logo.png" />
          <Button>
            <Text size="12px" bold>
              로그인/회원가입
            </Text>
          </Button>
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

const LogoImg = styled.img`
  width: 140px;
  height: 36px;
  cursor: pointer;
`;

const Button = styled.div`
  box-sizing: border-box;
  border-radius: 4px;
  border: 1px solid rgb(223, 223, 223);
  width: auto;
  min-width: 30px;
  padding: 0px 16px;
  cursor: pointer;
`;

export default NaviTop;
