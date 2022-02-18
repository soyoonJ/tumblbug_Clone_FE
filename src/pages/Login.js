import React from 'react';
import styled from 'styled-components';
import Image from '../elements/Image';

const Login = () => {
  return (
    <React.Fragment>
      <div>
        {/* <Image src=""></Image> */}
        <Hello>이럴 수가 있나</Hello>
      </div>
    </React.Fragment>
  );
};

const Hello = styled.div`
  font-family: SF Pro Text;
`;

export default Login;
