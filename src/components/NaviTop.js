import React from 'react';
import styled from 'styled-components';
import { Grid, Text } from '../elements';

const NaviTop = (props) => {
  return (
    <React.Fragment>
      <NaviTopLayout>
        <Grid is_flex>
          <LogoImg src="/img/logo.png" />
          <Button>
            <Text size="12px" bold padding="12px">
              로그인/회원가입
            </Text>
          </Button>
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
  min-height: 48px;
  max-width: 1160px;
  margin: 13px 0px;
`;

const LogoImg = styled.img`
  width: 132px;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;

const Button = styled.div`
  box-sizing: border-box;
  border-radius: 4px;
  border: 1px solid rgb(223, 223, 223);
  width: auto;
  min-width: 30px;
  cursor: pointer;
`;

export default NaviTop;
