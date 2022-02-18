import React from 'react';
import styled from 'styled-components';
import { Grid, Text, Input, Button, Checkbox } from '../elements';

const Signup = () => {
  return (
    <React.Fragment>
      <Grid padding="32px">
        <h1>이메일로 가입하기</h1>
        <Grid>
          <form>
            <Input label="이름" placeholder="사용하실 이름을 입력해주세요." />
            <Input
              label="이메일 주소"
              placeholder="이메일 주소를 입력해주세요."
            />
            <Input placeholder="이메일 주소를 확인합니다." />
            <Input label="비밀번호" placeholder="비밀번호를 입력해주세요." />
            <Input placeholder="비밀번호를 확인합니다." />
            <Checkbox text="전체동의" />
            <Button text="가입하기" />
          </form>
        </Grid>
      </Grid>
    </React.Fragment>
  );
};

const Line = styled.div`
  width: 100%;
`;

export default Signup;
