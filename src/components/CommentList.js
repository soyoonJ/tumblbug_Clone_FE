import React from 'react';
import {Grid, Button, Image} from '../elements'
import styled from 'styled-components';

import { history } from "../redux/configureStore";
import { useDispatch } from 'react-redux';

const CommentList = (props) => {

    const handlePress = ((e)=> {
      if(e.key==='Enter') {
          console.log('댓글내용',e.target.value)
          // dispatch(postActions.searchFB(e.target.value))
      }
  })

    return (
      <React.Fragment>
        <Container>
          <div>
            {/* 댓글 작성창 */}
            <div>
              {/* 로그인+후원까지 했을 때 댓글 창 */}
              <CommentWrite
                placeholder="창작자에게 응원의 한마디!"
                onKeyPress={handlePress}
              />
              {/* 후원 안했을 때 댓글 창 */}
              {/* <CommentDonate>
                <Image
                    size="40"
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxuZhlpr-G9AJhnM-wk_AHJRVPkSb2uhN4FYIaV8mfOBxwmQlpfehxEXKviMxv_HIc9pw&usqp=CAU"
                    marginRight="1rem"
                    marginTop="5px"
                  />
                <span>후원자만 글을 쓸 수 있어요.</span>
              </CommentDonate> */}
              {/* 로그인 안했을 때 댓글창 */}
              {/* <CommentLogin onClick={()=>{
                history.push('/login')
              }}>
                <Image
                    size="40"
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxuZhlpr-G9AJhnM-wk_AHJRVPkSb2uhN4FYIaV8mfOBxwmQlpfehxEXKviMxv_HIc9pw&usqp=CAU"
                    marginRight="1rem"
                    marginTop="5px"
                  />
                <span>로그인 해주세요.</span>
              </CommentLogin> */}
            </div>

            {/* 코멘트 박스 -> map 돌려야 함*/}
            <List />
            <List />
            <List />

          </div>
        </Container>
      </React.Fragment>
    );
};

const Container = styled.div`
@media (min-width: 1080px) {
  width : auto;
  max-width: 650px;
  flex-grow: 1;
  margin: 0px 0.5rem 0px 0px;
  padding : 25px 0px 40px;
}
order: 1;
display: block;

& > div {
  @media (min-width: 1080px) {
    min-height: 500px;
  }
  width : 100%;
}
`
const CommentWrite = styled.input`
height: 60px;
width: 100%;
padding:1rem 1.5rem;
border:0.8px solid rgb(242, 242, 242);
border-radius:4px;
box-shadow:rgb(0 0 0 / 4%) 0px 4px 12px, rgb(0 0 0 / 3%) 0px 0.8px 0px;
cursor:pointer;
}

:hover {
  border: 0.8px solid rgb(208, 208, 208);
}
`
const CommentDonate = styled.div`
  @media (min-width: 1080px) {
    padding: 1rem 1.5rem;
  }
  display: flex;
  align-items: center;
  color: rgb(158, 158, 158);
  border: 0.8px solid rgb(242, 242, 242);
  border-radius: 4px;
  box-shadow: rgb(0 0 0 / 3%) 0px 0.8px 0px;
  background: rgb(252, 252, 252);
  font-size: 14px;
`
const CommentLogin = styled.div`
  @media (min-width: 1080px) {
    padding: 1rem 1.5rem;
  }
  display: flex;
  align-items: center;
  color: rgb(158, 158, 158);
  border: 0.8px solid rgb(242, 242, 242);
  border-radius: 4px;
  box-shadow: rgb(0 0 0 / 4%) 0px 4px 12px, rgb(0 0 0 / 3%) 0px 0.8px 0px;
  background: rgb(255, 255, 255);
  font-size: 14px;
  cursor: pointer;

  :hover {
    border: 0.8px solid rgb(208, 208, 208)
  }
`

export default CommentList;



// 댓글 한 박스
const List = (props) => {

  const {nickname, content} = props;
  return (
    <React.Fragment>
      <Item>
        {/* 사용자정보 */}
        <div style={{ display: "flex" }}>
          {/* 프로필 기본 이미지 */}
          <Image
            size="40"
            src="https://tumblbug-upi.imgix.net/defaults/avatar_3.png?ixlib=rb-1.1.0&w=100&h=125&auto=format%2Ccompress&fit=facearea&facepad=2.0&ch=Save-Data&mask=ellipse&s=23cd7d64a8ff0c22c20d54f96489e7e9"
            marginTop="5px"
          />
          {/* 사용자 텍스트 정보 */}
          <UserInfo>
            {/* 추가기능으로 할만함: 클릭 시 마이페이지로 넘어가게끔 할지말지 확인해야할듯 -> 약간 아이디 암호화 하는듯*/}
            <div style={{display:"flex", alignItems:"center"}}>
              <UserName>
                {props.nickname}
              </UserName>
              <Icon>
                <svg width="9px" height="9px" viewBox="0 0 48 48">
                  <path fillRule="evenodd" clipRule="evenodd" d="M14.4941 46.0019C13.1317 46.0019 12.0613 44.9019 12.0613 43.6019C12.0613 43.0019 12.2559 42.4019 12.7425 41.9019L29.4791 24.0019L12.6452 6.20187C11.7694 5.20187 11.7694 3.70187 12.7425 2.70187C13.7156 1.70187 15.1753 1.80187 16.1484 2.80187L36 24.0019L16.1484 45.3019C15.6618 45.7019 15.078 46.0019 14.4941 46.0019Z">
                </path></svg>
              </Icon>
            </div>
            {/* 작성일자 */}
            <span style={{color:"rgb(158, 158, 158)", fontSize:"13px"}}>
                1일 전
            </span>
          </UserInfo>
        </div>
        {/* 코멘트 내용 */}
        <Comment>
          <div>{props.content}</div>
        </Comment>
      </Item>
    </React.Fragment>
  );
}

List.defaultProps = {
  nickname : "작성자",
  content: "뱃지등 다른 상품까지 구매할게 아니라면 추가공지보고 결정하는게 나으실듯해요.",
}

const Item = styled.div`
@media (min-width: 1080px) {
  padding : 24px 10px;
  border-top: 0px;
  margin: 0px;
}
box-shadow: rgb(0 0 0 / 8%) 0px 1px 0px;
display: block;
`
const UserInfo = styled.div`
margin-left : 1rem;
`
const Icon = styled.div`
  margin: 0px 0px 0px 8px;

  & > svg {
    fill: rgb(208, 208, 208);
  }
`
const UserName = styled.div`
  @media (min-width: 1080px) {
    max-width: 320px;
  }
  color:rgb(61, 61, 61);
  font-size: 1.1rem;
  font-weight: 700;
  overflow: hidden;
`
const Comment = styled.div`
width : 100%;
margin-botttom: 1rem;
word-break: break-all;

& > div {
  @media (min-width: 1080px) {
    padding: 1.5rem 0;
    font-size: 16px;
    line-height: 28px;
  }
  min-height: 30px;
  max-height: 500px;
  overflow: hidden;
  max-width: 620px;
  margin: 0px auto;
  display: block;
  padding-top: 16px;
  line-height: 28px;
  color: rgb(61, 61, 61);
}
`