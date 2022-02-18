import React from 'react';
import styled from 'styled-components';
import { BiSearch } from 'react-icons/bi';
import { Text } from '../elements/index';

const MyProfile = () => {
  const [projectNum, setProjectNum] = React.useState(0);
  const [name, setNeme] = React.useState('박수민');

  return (
    <React.Fragment>
      <BoxTop>
        <UserBox>
          <div className="userContainer">
            <div className="lastName">{name[0]}</div>
            <div className="userInfo">
              <div className="userName">{name}</div>
              <div className="signAt">15시간 전 가입</div>
            </div>
          </div>
        </UserBox>
        <LabelBox>후원한 프로젝트</LabelBox>
      </BoxTop>
      <BoxBottom>
        <ProjectCounter>
          <span>{projectNum}</span>개의 프로젝트가 있습니다
        </ProjectCounter>
        <ProjectList>
          {projectNum === 0 ? (
            <EmptyBox>
              <BiSearch size={100} color="rgb(208, 208, 208)" />
              <Text color="rgb(158, 158, 158)">
                후원한 프로젝트가 없습니다.
              </Text>
            </EmptyBox>
          ) : (
            ''
          )}
        </ProjectList>
      </BoxBottom>
    </React.Fragment>
  );
};

const BoxTop = styled.div`
  border-bottom: 1px solid rgb(230, 230, 230);
`;

const BoxBottom = styled.div``;

const UserBox = styled.div`
  overflow: hidden;
  padding: 36px 16px 12px;

  .userContainer {
    min-height: 80px;
    display: flex;

    .lastName {
      height: 60px;
      width: 60px;
      min-height: 60px;
      min-width: 60px;
      background-color: rgb(208, 208, 208);
      border-radius: 50%;
      text-align: center;
      display: table-cell;
      vertical-align: middle;
      color: #fff;
      font-size: 40px;
      font-weight: 700;
    }
  }
`;

const LabelBox = styled.div`
  padding: 14px 16px 24px;
  height: 48px;
  font-size: 16px;
`;

const ProjectCounter = styled.div`
  span {
    color: rgb(255, 87, 87);
  }
`;

const ProjectList = styled.div`
  padding: 56px 0px 80px;
`;

const EmptyBox = styled.div``;

export default MyProfile;
