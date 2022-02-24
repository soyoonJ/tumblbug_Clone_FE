import React from 'react';
import styled from 'styled-components';
import { BiSearch } from 'react-icons/bi';
import { Text } from '../elements/index';

import SearchPost from './SearchPost';

import { actionCreators as userActions } from '../redux/modules/user'; // as : 별명 주는거
import { actionCreators as articlesActions } from '../redux/modules/articles'; // as : 별명 주는거

import { useDispatch, useSelector } from 'react-redux';

const MyProfile = () => {
  const dispatch = useDispatch();
  const user = useSelector((store) => store.user);
  const myList = useSelector((store) => store.articles.my_list);

  const is_token = localStorage.getItem('login-token') ? true : false;

  React.useEffect(() => {
    if (is_token) {
      dispatch(userActions.loginCheckDB());
      dispatch(articlesActions.getMyDB());
    }
  }, []);

  return (
    <Box>
      <div className="boxTop">
        <UserBox>
          <div className="userContainer">
            <div className="lastbox">
              <div className="lastname">
                {user.user.nickname ? user.user.nickname[0] : ''}
              </div>
            </div>
            <div className="userInfo">
              <div className="userName">{user ? user.user.nickname : ''}</div>
              <div className="signAt">15시간 전 가입</div>
            </div>
          </div>
        </UserBox>
        <LabelBox>
          <div className="label">
            <p>후원한 프로젝트</p>
          </div>
        </LabelBox>
      </div>
      <Line></Line>
      <div className="boxBottom">
        <ProjectCounter>
          <span>{myList ? myList.length : 0}</span>개의 프로젝트가 있습니다
        </ProjectCounter>
        <ProjectList>
          {myList && myList.length === 0 ? (
            <div className="emptyBox">
              <BiSearch size={100} color="rgb(208, 208, 208)" />
              <Text color="rgb(158, 158, 158)" size="20px">
                후원한 프로젝트가 없습니다.
              </Text>
            </div>
          ) : (
            <PostBox>
              {myList
                ? myList.map((a, i) => {
                    return <SearchPost key={i} {...a} />;
                  })
                : ''}
            </PostBox>
          )}
        </ProjectList>
      </div>
    </Box>
  );
};

const Box = styled.div`
  .boxTop {
    @media (min-width: 1080px) {
      max-width: 1080px;
      margin: 0 auto;
    }
  }
  .boxBottom {
    @media (min-width: 1080px) {
      max-width: 1080px;
      margin: 0 auto;
    }
  }
`;

const UserBox = styled.div`
  overflow: hidden;
  padding: 36px 16px 12px;

  .userContainer {
    min-height: 80px;
    max-height: 120px;
    display: flex;
    align-items: center;

    .lastbox {
      height: 120px;
      width: 120px;
      min-height: 60px;
      min-width: 60px;
      background-color: rgb(208, 208, 208);
      border-radius: 50%;
      text-align: center;
      color: #fff;
      font-size: 40px;
      font-weight: 700;
      display: flex;
      flex-direction: column;
      justify-content: center;

      @media (max-width: 1080px) {
        height: 60px;
        width: 60px;
      }
    }

    .userInfo {
      display: flex;
      flex-direction: column;
      justify-content: center;
      margin-left: 24px;

      @media (max-width: 1080px) {
        margin-left: 10px;
      }

      .userName {
        font-size: 30px;
        line-height: 45px;
        font-weight: 700;

        @media (max-width: 1080px) {
          font-size: 20px;
          line-height: 29px;
        }
      }
      .signAt {
        color: #6d6d6d;
        font-size: 13px;
        font-weight: 400;
        line-height: 22px;

        @media (max-width: 1080px) {
          font-size: 11px;
          font-weight: 400;
          line-height: 20px;
        }
      }
    }
  }
`;

const LabelBox = styled.div`
  height: 56px;
  font-size: 18px;
  line-height: 27px;
  color: #3d3d3d;
  font-weight: 700;
  display: flex;
  align-items: center;
  margin: 0 20px;

  @media (max-width: 1080px) {
    height: 48px;
    font-size: 14px;
    line-height: 27px;
  }

  .label {
    height: 100%;
    border-bottom: 2px solid #000;
    display: flex;
    align-items: center;
  }
`;

const ProjectCounter = styled.div`
  margin: 14px 24px 24px;
  font-size: 16px;
  line-height: 27px;
  span {
    color: rgb(255, 87, 87);
  }
  @media (max-width: 1080px) {
    font-size: 14px;
    line-height: 24px;
    margin: 14px 16px 24px;
  }
`;

const ProjectList = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  .emptyBox {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 112px 0 117px;

    @media (max-width: 1080px) {
      padding: 56px 0 80px;
    }
  }
`;

const Line = styled.div`
  width: 100%;
  height: 1px;
  background-color: rgb(230, 230, 230);
`;

const PostBox = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 0px -6px;
`;

export default MyProfile;
