import React from 'react';
import styled from 'styled-components';

import { Text, Grid } from './index';

const Input = (props) => {
  const { label, placeholder, _onChange, type, multiLine, value } = props;

  // Input 다음에 multiLine 적으면 하단에 있는 속성이 들어가고, 그렇지 않으면 그 밑에 있는게 들어감
  // rows={10}을 굳이 적지 않아도 multiLine으로만 동일한 속성 줄 수 있음
  if (multiLine) {
    return (
      <Grid>
        <Text margin="0 0 10px">{label}</Text>
        <ElTextarea
          rows={10}
          value={value}
          placeholder={placeholder}
          onChange={_onChange}
        ></ElTextarea>
      </Grid>
    );
  }

  return (
    <Grid>
      <Text margin="0px">{label}</Text>
      <ElInput type={type} placeholder={placeholder} onChange={_onChange} />
    </Grid>
  );

  // 수민
  // <Grid margin="0 0 10px">
  //   <Text margin="0 0 10px" color="rgb(61, 61, 61)" size="12px">
  //     {label}
  //   </Text>
  // </Grid>
};

Input.defaultProps = {
  multiLine: false,
  label: false,
  placeholder: '텍스트를 입력해주세요.',
  type: 'text',
  value: '',
  _onChange: () => {},
};

const ElTextarea = styled.textarea`
  border: 1px solid rgb(230, 230, 230);
  width: 100%;
  padding: 12px 4px;
  box-sizing: border-box;
`;

const ElInput = styled.input`
  border: 1px solid rgb(230, 230, 230);
  width: 100%;
  padding: 11px 12px;
  box-sizing: border-box;
  font-size: 14px;
  line-height: 24px;
  max-height: 44px;
  min-width: 100px;
  outline: none;
  color: rgb(13, 13, 13);
`;

export default Input;
