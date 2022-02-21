import React from 'react';
import styled from 'styled-components';
import { Grid, Text } from '../elements';

import { history } from '../redux/configureStore';

const NaviTop = (props) => {
  const is_token = localStorage.getItem('login-token') ? true : false;

  if (is_token) {
    return (
      <React.Fragment>
        <NaviTopLayout>
          <Grid is_flex>
            <LogoImg src="/img/logo.png" />
            <Button
              onClick={() => {
                history.push('/login');
              }}
            >
              <Text size="12px" bold padding="12px">
                로그인/회원가입
              </Text>
            </Button>
          </Grid>
        </NaviTopLayout>
      </React.Fragment>
    );
  } else {
    return (
      <React.Fragment>
        <NaviTopLayout>
          <Grid is_flex>
            <LogoImg src="/img/logo.png" />
            <Button
              onClick={() => {
                history.push('/login');
              }}
            >
              <Text size="12px" bold padding="12px">
                와 로그아웃
              </Text>
            </Button>
          </Grid>
        </NaviTopLayout>
      </React.Fragment>
    );
  }
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
  font-size: 12px;
  font-weight: 600;
  padding: 12px;
  cursor: pointer;
`;

export default NaviTop;
