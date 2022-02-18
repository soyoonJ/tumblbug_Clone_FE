import React from 'react';
import styled from 'styled-components';
import { Grid, Text, Input, Button, Checkbox } from '../elements';

const Signup = () => {
  return (
    <React.Fragment>
      <Header>
        <div></div>
      </Header>
      <SignupBox>
        <h1>이메일로 가입하기</h1>
        <form>
          <Input label="이름" placeholder="사용하실 이름을 입력해주세요." />
          <Input
            label="이메일 주소"
            placeholder="이메일 주소를 입력해주세요."
          />
          <Input placeholder="이메일 주소를 확인합니다." />
          <Input label="비밀번호" placeholder="비밀번호를 입력해주세요." />
          <Input placeholder="비밀번호를 확인합니다." />
          <Checkbox text="전체동의" bold={true} />
          <Line />
          <Grid margin="0px 0px 40px">
            <Grid is_flex margin="0 0 14px">
              <Checkbox text="텀블벅 이용 약관동의" />
              <Text>
                <span>내용보기</span>
              </Text>
            </Grid>
            <Grid is_flex margin="0 0 14px">
              <Checkbox text="개인정보 수집,이용 동의" />
              <Text>
                <span>내용보기</span>
              </Text>
            </Grid>
            <Grid margin="0 0 14px">
              <Checkbox text="만 14세 이상입니다." />
            </Grid>
            <Grid margin="0 0 14px">
              <Checkbox text="전체마케팅 정보 수신 동의(선택)동의" />
            </Grid>
          </Grid>

          <Button text="가입하기" weight="700" />
          <Grid margin="20px 0px 0px">
            <Text size="12px" center>
              이미 텀블벅 계정이 있으신가요?
              <span>기존 계정으로 로그인하기</span>
            </Text>
          </Grid>
        </form>
        <Grid is_flex padding="10px 0px">
          <Line margin="16px" />
          <Text no_wrap size="12px" color="rgb(158, 158, 158)">
            또는
          </Text>
          <Line margin="16px" />
        </Grid>
        <KakaoButton>
          <svg width="26" height="26" viewBox="0 0 26 26" fill="none">
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M13 3.25C6.99238 3.25 2.16663 6.99718 2.16663 11.5825C2.3636 14.7381 4.33329 17.4498 7.18935 18.6332L6.15526 22.3803C6.10602 22.4789 6.15526 22.6269 6.25375 22.6757C6.35223 22.7748 6.5492 22.7748 6.64769 22.6757L11.0303 19.7672C11.6704 19.8658 12.3106 19.9151 13 19.9151C18.9583 19.9151 23.8333 16.1679 23.8333 11.5825C23.8333 6.99718 19.0075 3.25 13 3.25"
              fill="black"
              fillOpacity="0.9"
            ></path>
          </svg>
          <div>카카오로 가입하기</div>
          <div></div>
        </KakaoButton>
      </SignupBox>
      <Footer>© 2022 Tumblbug Inc.</Footer>
    </React.Fragment>
  );
};

const Header = styled.div`
  display: flex;
  min-height: 58px;
  justify-content: center;
  align-items: center;
  padding: 0px 16px;
  background-color: rgb(255, 255, 255);
  box-shadow: rgb(10 10 10 / 10%) 0px 1px 2px 0px;

  div {
    background-image: url('/img/logo.png');
    height: 25px;
    width: 90px;
    background-repeat: no-repeat;
    background-size: cover;
  }
`;

const SignupBox = styled.div`
  padding: 32px;
  border-radius: 5px;
  border: 1px solid rgb(228, 228, 228);
  width: 400px;
  margin: 72px auto 12px;

  @media (max-width: 766px) {
    width: 100%;
  }

  h1 {
    font-size: 24px;
    margin: 0 0 32px;
  }
`;

const Line = styled.div`
  width: 100%;
  height: 1px;
  margin: 12px 0;
  background-color: rgb(230, 230, 230);
  ${(props) => (props.margin ? `margin: 12px ${props.margin}` : '')}
`;

const KakaoButton = styled.button`
  width: 100%;
  height: 60px;
  background-color: #fee500;
  color: rgb(26, 23, 8);
  padding: 12px 0px;
  box-sizing: border-box;
  border-radius: 2px;
  border: none;
  display: flex;
  padding: 0 20px;
  align-items: center;
  justify-content: space-between;

  div {
    font-size: 16px;
  }
`;

const Footer = styled.div`
  text-align: center;
  display: block;
  width: 100%;
  color: rgb(158, 158, 158);
  font-size: 13px;
  line-height: 20px;
`;

export default Signup;
