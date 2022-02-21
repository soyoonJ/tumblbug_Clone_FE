import React from 'react';
import styled from 'styled-components';
import { Grid, Text, Input, Button, Checkbox } from '../elements';
import { emailCheckReg } from '../shared/emailCheck';

// redux import
import { useDispatch } from 'react-redux';
import { actionCreators as userActions } from '../redux/modules/user';

import { history } from '../redux/configureStore';

const Signup = () => {
  const dispatch = useDispatch();

  const [nickname, setNickname] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [emailCheck, setEmailCheck] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [passwordCheck, setPasswordCheck] = React.useState('');

  const [isOk, setIsOk] = React.useState(true);

  // 이메일 일치 확인 문구
  const emailMatch = document.getElementById('emailMatch');
  const emailCheckMatch = document.getElementById('emailCheckMatch');
  const passwordMatch = document.getElementById('passwordMatch');
  const passworCheckdMatch = document.getElementById('passworCheckdMatch');

  // 이름
  const onChangeNickname = (e) => {
    setNickname(e.target.value);

    const nicknameInput = document.getElementById('nicknameInput');
    const pleaseNickname = document.getElementById('pleaseNickname');
    const warningNickname = document.getElementById('warningNickname');

    nicknameInput.style.border = '1px solid rgb(230, 230, 230)';
    pleaseNickname.style.display = 'none';

    // 이름의 길이가 2자 이하일 경우
    if (e.target.value.length < 2 && e.target.value.length !== 0) {
      warningNickname.style.display = 'block';
      nicknameInput.style.border = '1px solid rgb(236, 99, 94)';
      setIsOk(false);
    } else {
      // 이름의 길이가 2자 이상일 경우
      warningNickname.style.display = 'none';
      nicknameInput.style.border = '1px solid rgb(230, 230, 230)';
      setIsOk(true);
    }
  };

  // 이메일
  const onChangeEmail = (e) => {
    setEmail(e.target.value);

    const emailInput = document.getElementById('emailInput');
    const pleaseEmail = document.getElementById('pleaseEmail');
    const warningEmail = document.getElementById('warningEmail');

    emailInput.style.border = '1px solid rgb(230, 230, 230)';
    pleaseEmail.style.display = 'none';

    // 이메일의 형식이 맞지 않을 경우
    if (!emailCheckReg(e.target.value) && e.target.value !== '') {
      emailInput.style.border = '1px solid rgb(236, 99, 94)';
      warningEmail.style.display = 'block';
      setIsOk(false);
    }
    // 이메일 형식이 맞을 경우
    else {
      // 이메일과 이메일 확인이 같지 않을 경우
      if (e.target.value !== emailCheck) {
        emailInput.style.border = '1px solid rgb(236, 99, 94)';
        pleaseEmail.style.display = 'none';
        warningEmail.style.display = 'none';
        emailMatch.style.display = 'block';
        setIsOk(false);
      } else {
        emailInput.style.border = '1px solid rgb(230, 230, 230)';
        pleaseEmail.style.display = 'none';
        warningEmail.style.display = 'none';
        emailMatch.style.display = 'none';
        setIsOk(true);
      }
    }
  };

  // 이메일 확인
  const onChangeEmailCheck = (e) => {
    setEmailCheck(e.target.value);

    const emailCheckInput = document.getElementById('emailCheckInput');
    const pleaseEmailCheck = document.getElementById('pleaseEmailCheck');
    const warningEmailCheck = document.getElementById('warningEmailCheck');

    emailCheckInput.style.border = '1px solid rgb(230, 230, 230)';
    pleaseEmailCheck.style.display = 'none';

    // 이메일 확인의 형식이 맞지 않을 경우
    if (!emailCheckReg(e.target.value) && e.target.value !== '') {
      emailCheckInput.style.border = '1px solid rgb(236, 99, 94)';
      warningEmailCheck.style.display = 'block';
      setIsOk(false);
    }
    // 이메일 형식이 맞을 경우
    else {
      // 이메일과 이메일 확인이 같지 않을 경우
      if (email !== e.target.value) {
        emailCheckInput.style.border = '1px solid rgb(236, 99, 94)';
        pleaseEmailCheck.style.display = 'none';
        warningEmailCheck.style.display = 'none';
        emailCheckMatch.style.display = 'block';
        setIsOk(false);
      }
      // 이메일과 이메일 확인이 같을 경우
      else {
        emailCheckInput.style.border = '1px solid rgb(230, 230, 230)';
        pleaseEmailCheck.style.display = 'none';
        warningEmailCheck.style.display = 'none';
        emailCheckMatch.style.display = 'none';
        setIsOk(true);
      }
    }
  };

  // 비밀번호
  const onChangePassword = (e) => {
    setPassword(e.target.value);

    const passwordInput = document.getElementById('passwordInput');
    const pleasePassword = document.getElementById('pleasePassword');
    const warningPassword = document.getElementById('warningPassword');

    passwordInput.style.border = '1px solid rgb(230, 230, 230)';
    pleasePassword.style.display = 'none';

    // 비밀번호가 6자 이하 20자 이상일 경우
    if (
      (e.target.value.length < 6 || e.target.value.length > 20) &&
      e.target.value !== ''
    ) {
      passwordInput.style.border = '1px solid rgb(236, 99, 94)';
      warningPassword.style.display = 'block';
      setIsOk(false);
    } else {
      // 비밀번호와 비밀번호 확인이 같지 않을 경우
      if (e.target.value !== passwordCheck) {
        passwordInput.style.border = '1px solid rgb(236, 99, 94)';
        pleasePassword.style.display = 'none';
        warningPassword.style.display = 'none';
        passwordMatch.style.display = 'block';
        setIsOk(false);
      }
      // 비밀번호와 비밀번호 확인이 같을 경우
      else {
        passwordInput.style.border = '1px solid rgb(230, 230, 230)';
        pleasePassword.style.display = 'none';
        warningPassword.style.display = 'none';
        passwordMatch.style.display = 'none';
        setIsOk(true);
      }
    }
  };

  // 비밀번호 확인
  const onChangePasswordCheck = (e) => {
    setPasswordCheck(e.target.value);

    const passwordCheckInput = document.getElementById('passwordCheckInput');
    const pleasePasswordCheck = document.getElementById('pleasePasswordCheck');
    const warningPasswordCheck = document.getElementById(
      'warningPasswordCheck'
    );

    passwordCheckInput.style.border = '1px solid rgb(230, 230, 230)';
    pleasePasswordCheck.style.display = 'none';

    // 비밀번호확인이 6자 이하 20자 이상일 경우
    if (
      (e.target.value.length < 6 || e.target.value.length > 20) &&
      e.target.value !== ''
    ) {
      passwordCheckInput.style.border = '1px solid rgb(236, 99, 94)';
      warningPasswordCheck.style.display = 'block';
      setIsOk(false);
    } else {
      // 비밀번호와 비밀번호 확인이 같지 않을 경우
      if (password !== e.target.value) {
        passwordCheckInput.style.border = '1px solid rgb(236, 99, 94)';
        pleasePasswordCheck.style.display = 'none';
        warningPasswordCheck.style.display = 'none';
        passworCheckdMatch.style.display = 'block';
        setIsOk(false);
      }
      // 비밀번호와 비밀번호 확인이 같을 경우
      else {
        passwordCheckInput.style.border = '1px solid rgb(230, 230, 230)';
        pleasePasswordCheck.style.display = 'none';
        warningPasswordCheck.style.display = 'none';
        passworCheckdMatch.style.display = 'none';
        setIsOk(true);
      }
    }
  };

  // 가입하기 버튼 클릭
  const onclick = () => {
    // 이름이 빈칸일 경우
    if (nickname === '') {
      const nicknameInput = document.getElementById('nicknameInput');
      nicknameInput.style.border = '1px solid rgb(236, 99, 94)';

      const pleaseNickname = document.getElementById('pleaseNickname');
      pleaseNickname.style.display = 'block';
      setIsOk(false);
    }
    // 이메일이 빈칸일 경우
    if (email === '') {
      const emailInput = document.getElementById('emailInput');
      emailInput.style.border = '1px solid rgb(236, 99, 94)';

      const pleaseEmail = document.getElementById('pleaseEmail');
      pleaseEmail.style.display = 'block';
      setIsOk(false);
    }
    // 이메일 확인이 빈칸일 경우
    if (emailCheck === '') {
      const emailCheckInput = document.getElementById('emailCheckInput');
      emailCheckInput.style.border = '1px solid rgb(236, 99, 94)';

      const pleaseEmailCheck = document.getElementById('pleaseEmailCheck');
      pleaseEmailCheck.style.display = 'block';
      setIsOk(false);
    }
    // 비밀번호가 빈칸일 경우
    if (password === '') {
      const passwordInput = document.getElementById('passwordInput');
      passwordInput.style.border = '1px solid rgb(236, 99, 94)';

      const pleasePassword = document.getElementById('pleasePassword');
      pleasePassword.style.display = 'block';
      setIsOk(false);
    }
    // 비밀번호 확인이 빈칸일 경우
    if (passwordCheck === '') {
      const passwordCheckInput = document.getElementById('passwordCheckInput');
      passwordCheckInput.style.border = '1px solid rgb(236, 99, 94)';

      const pleasePasswordCheck = document.getElementById(
        'pleasePasswordCheck'
      );
      pleasePasswordCheck.style.display = 'block';
      setIsOk(false);
    }
    // 모든 조건이 맞을 경우에만 회원가입
    if (isOk) {
      dispatch(userActions.signupDB(nickname, email, password));
    }
  };

  return (
    <React.Fragment>
      <Header>
        <div
          onClick={() => {
            history.push('/');
          }}
        ></div>
      </Header>
      <SignupBox>
        <h1>이메일로 가입하기</h1>
        {/* <form> */}
        <Input
          label="이름"
          placeholder="사용하실 이름을 입력해주세요."
          is_user
          _onChange={onChangeNickname}
          value={nickname}
          _id="nicknameInput"
        />
        <Waring id="pleaseNickname">이름을 입력해주세요.</Waring>
        <Waring id="warningNickname">
          이름은 2자 이상, 20자 이하로 입력하세요.
        </Waring>

        <Input
          label="이메일 주소"
          placeholder="이메일 주소를 입력해주세요."
          is_user
          _onChange={(e) => {
            onChangeEmail(e);
          }}
          value={email}
          _id="emailInput"
        />
        <Waring id="pleaseEmail">이메일 주소를 입력해주세요.</Waring>
        <Waring id="warningEmail">유효하지 않은 이메일 형식입니다.</Waring>
        <Waring id="emailMatch">이메일 주소가 일치하지 않습니다.</Waring>

        <Input
          placeholder="이메일 주소를 확인합니다."
          is_user
          _onChange={(e) => {
            onChangeEmailCheck(e);
          }}
          value={emailCheck}
          _id="emailCheckInput"
        />
        <Waring id="pleaseEmailCheck">
          이메일 주소를 한번 더 입력해주세요.
        </Waring>
        <Waring id="warningEmailCheck">유효하지 않은 이메일 형식입니다.</Waring>
        <Waring id="emailCheckMatch">이메일 주소가 일치하지 않습니다.</Waring>

        <Input
          label="비밀번호"
          placeholder="비밀번호를 입력해주세요."
          is_user
          _onChange={(e) => {
            onChangePassword(e);
          }}
          value={password}
          _id="passwordInput"
        />
        <Waring id="pleasePassword">비밀번호를 입력해주세요.</Waring>
        <Waring id="warningPassword">
          비밀번호는 6자 이상, 20자 이하로 입력하세요.
        </Waring>
        <Waring id="passwordMatch">비밀번호가 일치하지 않습니다.</Waring>

        <Input
          placeholder="비밀번호를 확인합니다."
          is_user
          _onChange={(e) => {
            onChangePasswordCheck(e);
          }}
          value={passwordCheck}
          _id="passwordCheckInput"
        />
        <Waring id="pleasePasswordCheck">
          비밀번호를 한번 더 입력해주세요.
        </Waring>
        <Waring id="warningPasswordCheck">
          비밀번호는 6자 이상, 20자 이하로 입력하세요.
        </Waring>
        <Waring id="passworCheckdMatch">비밀번호가 일치하지 않습니다.</Waring>

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
        <Button
          text="가입하기"
          weight="700"
          _onClick={() => {
            onclick();
          }}
        />
        {/* </form> */}
        <Grid margin="20px 0px 0px">
          <Text size="12px" center>
            이미 텀블벅 계정이 있으신가요?
            <span
              onClick={() => {
                history.push('/login');
              }}
            >
              기존 계정으로 로그인하기
            </span>
          </Text>
        </Grid>
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
    cursor: pointer;
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
    margin: 0 auto 12px;
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
  cursor: pointer;

  div {
    font-size: 16px;
  }
`;

const Waring = styled.p`
  display: none;
  font-size: 13px;
  line-height: 20px;
  color: #ff5757;
  margin: 0 0 12px;
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
