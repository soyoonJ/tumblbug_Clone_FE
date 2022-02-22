import React from 'react';
import styled from 'styled-components';
import { Grid, Text } from '../elements';

import { history } from '../redux/configureStore';
import { actionCreators as userActions } from '../redux/modules/user'; // as : 별명 주는거
import { useDispatch, useSelector } from 'react-redux';

const NaviTop = (props) => {
  const dispatch = useDispatch();
  const user = useSelector((store) => store.user);

  const is_token = localStorage.getItem('login-token') ? true : false;

  React.useEffect(() => {
    if (is_token) {
      dispatch(userActions.loginCheckDB());
    }
  }, []);

  if (is_token) {
    return (
      <React.Fragment>
        <NaviTopLayout>
          <Grid is_flex>
            <LogoImg
              src="/img/logo.png"
              onClick={() => {
                history.push('/');
              }}
            />
            <Button
              onClick={() => {
                // dispatch(userActions.logOut());
                // window.location.replace('/');
                history.push('/user');
              }}
            >
              <NameCircle>
                {user.user.nickname ? user.user.nickname[0] : ''}
              </NameCircle>
              <Grid margin="0 0 0 10px">{user ? user.user.nickname : ''}</Grid>
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
            <LogoImg
              src="/img/logo.png"
              onClick={() => {
                history.push('/');
              }}
            />
            <Button
              onClick={() => {
                history.push('/login');
              }}
            >
              <Image>
                <svg
                  className="style__AvatarIcon-zxsodr-36 ixdnbV"
                  width="48"
                  height="48"
                  viewBox="0 0 48 48"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M41.8081 40.2C40.6938 32.1539 34.8597 26 27.852 26H20.1498C13.1405 26 7.30625 32.1539 6.19186 40.2C6.06567 41.1111 6 42.0465 6 43H42C42 42.0465 41.9343 41.1111 41.8081 40.2Z"
                    fill="#ffffff"
                  ></path>
                  <path
                    d="M24 23C28.9639 23 33 18.9626 33 14C33 9.0374 28.9639 5 24 5C19.0379 5 15 9.0374 15 14C15 18.9626 19.0379 23 24 23Z"
                    fill="#ffffff"
                  ></path>
                </svg>
              </Image>
              로그인/회원가입
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
  margin: 15px 0px;
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
  max-height: 44px;
  font-size: 12px;
  font-weight: 600;
  padding: 16px;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Image = styled.div`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  width: 24px;
  height: 24px;
  margin-right: 10px;
  padding-top: 5px;
  box-sizing: border-box;
  border-radius: 24px;
  border: 1px solid rgb(223, 223, 223);
  background-color: rgb(217 217 217);
`;

const NameCircle = styled.div`
  width: 24px;
  height: 24px;
  border-radius: 50%;
  background-color: rgb(208, 208, 208);
  text-align: center;
  font-size: 12px;
  line-height: 24px;
  color: #fff;
`;

export default NaviTop;
