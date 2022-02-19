import React from 'react';
import styled from 'styled-components';
import { Grid, Text, Input, Image, Button } from '../elements';

const Login = () => {
  return (
    <React.Fragment>
      <Grid is_flex>
        <Grid>
          <Text>이메일로 로그인</Text>
          <Grid>
            <Input
              label="이메일 주소"
              placeholder="이메일 주소를 입력해주세요"
            />
            <Input label="비밀번호" placeholder="비밀번호를 입력해주세요" />
            <Button text="로그인" />
          </Grid>
        </Grid>
        <LoginImage />
      </Grid>
    </React.Fragment>
  );
};

const LoginImage = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  width: 50%;
  height: 100%;
  background-image: url('https://tumblbug-assets.s3.ap-northeast-1.amazonaws.com/static_assets/login/bg_login_email.jpg');
`;

export default Login;
