import React from 'react';
import styled from 'styled-components';
import { Grid, Text, Input, Image, Button } from '../elements';

const Login = () => {
  return (
    <React.Fragment>
      <>헤더 자리~~</>
      <Container>
        <div className="loginBox">
          <h1>이메일로 로그인</h1>
          <Grid>
            <Input
              label="이메일 주소"
              placeholder="이메일 주소를 입력해주세요"
            />
            <Input label="비밀번호" placeholder="비밀번호를 입력해주세요" />
            <Button margin="40px 0 0" text="로그인" />
          </Grid>
          <div className="socialBox">
            <Grid is_flex padding="10px 0px">
              <Line margin="16px" />
              <Text no_wrap size="12px" color="rgb(158, 158, 158)">
                다른 방법으로 로그인
              </Text>
              <Line margin="16px" />
            </Grid>
            <Grid is_flex>
              <>카카오</>
              <>네이버</>
              <>페이스북</>
              <>애플</>
            </Grid>
          </div>
          <Grid margin="50px 0px 0px">
            <Text size="12px" weight="500" color="rgb(158, 158, 158)">
              아직 텀블벅 계정이 없으신가요?
              <span>회원가입</span>
            </Text>
          </Grid>
          <Grid margin="5px 0px 0px">
            <Text size="12px" weight="500" color="rgb(158, 158, 158)">
              혹시 비밀번호를 잊으셨나요?
              <span>비밀번호 재설정</span>
            </Text>
          </Grid>
        </div>
      </Container>

      <LoginImage />
    </React.Fragment>
  );
};

const Container = styled.div`
  margin: 0 47px;
  padding: 80px 16px;

  .loginBox {
    flex: 1 1 0px;
    max-width: 414px;

    h1 {
      font-size: 24px;
      margin-bottom: 50px;
      text-align: left;
    }

    .socialBox {
      margin: 70px 0 0;
    }
  }
`;

const LoginImage = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  width: 50%;
  height: 100%;
  background-size: cover;
  background-position: center center;
  background-image: url('https://tumblbug-assets.s3.ap-northeast-1.amazonaws.com/static_assets/login/bg_login_email.jpg');
`;

const Line = styled.div`
  width: 100%;
  height: 1px;
  margin: 12px 0;
  background-color: rgb(230, 230, 230);
  ${(props) => (props.margin ? `margin: 12px ${props.margin}` : '')}
`;

export default Login;
