import React from 'react';
import {useState} from 'react';
import {Grid, Button, Image} from '../elements'
import styled from 'styled-components';

import { history } from "../redux/configureStore";
import { useDispatch, useSelector } from "react-redux";
import { actionCreators as commentActions } from "../redux/modules/comments";

const CommentList = ({ detail, articleId }) => {
  // 댓글 작성창 확인하기 위해서 리덕스에 있는 user nickname 뽑아오기
  // console.log("뷰 코멘트리스트", comment_list);

    // 댓글 작성창 활용 용도
  const is_login = useSelector((state) => state.user.is_login);
  const username = useSelector((state)=>state.user.user.nickname);
  const comment_list = useSelector((state)=>state.comments.comment_list);
  const [writeComment, setComment] = useState('');
  const dispatch = useDispatch();

  const _user = useSelector((state)=>state.user.user.email);


  React.useEffect(() => {
    dispatch(commentActions.getCommentDB(articleId));
  }, []);

    const onChange = (e)=>{
      setComment(e.target.value);
    };

    const handlePress = ((e)=> {
      if(e.key==='Enter') {
          dispatch(commentActions.addCommentDB(articleId, e.target.value));
          setComment('');
      }
  })

  if(!comment_list[articleId]) {

    return null;
  }

  return (
    <React.Fragment>
      <Container>
        <div>
          {/* 댓글 작성창 */}
          <div>
            {/* 댓글 작성창 */}
            <div>
              {/* 로그인+후원까지 했을 때 댓글 창 */}
              {is_login ?
              <CommentWrite onKeyPress={handlePress}>
              {username && (
                <Profileimg>
                  <span>{username[0]}</span>
                </Profileimg>
              )}
              <input
                placeholder="창작자에게 응원의 한마디!"
                value={writeComment}
                onChange={onChange}

                style={{
                  width: "100%",
                  outline: "none",
                  border: "none",
                  fontSize: "14px",
                  color: "rgb(158, 158, 158)",
                }}
              />
              </CommentWrite>
              :
            // 로그인 안했을 때
              <CommentLogin onClick={()=>{

                history.push('/login')
              }}>
                <Image
                    size="40"
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxuZhlpr-G9AJhnM-wk_AHJRVPkSb2uhN4FYIaV8mfOBxwmQlpfehxEXKviMxv_HIc9pw&usqp=CAU"
                    marginRight="1rem"
                    marginTop="5px"
                  />
                <span>로그인 해주세요.</span>
              </CommentLogin>

            }
              {/* 후원 안했을 때 댓글 창 */}
              {/* <CommentDonate>
                <Profileimg>
                  <span>정</span>
                </Profileimg>
                <span>후원자만 글을 쓸 수 있어요.</span>
              </CommentDonate> */}

            </div>
            {/* contents 부분 */}
            <Contents>
              <div>
                {/* 업데이트 버튼 */}
                <Update>
                  <div name="pin">
                    <svg width="12px" height="12px" viewBox="0 0 48 48">
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M35.8228 23.0891C34.7042 22.0081 33.2915 21.2741 31.7598 20.9751V11.4481C32.4853 10.8831 33.0667 10.4621 33.5001 10.0381C34.9602 8.62809 35.7956 6.70009 35.8228 4.67909V3.12809C35.9236 2.61409 35.586 2.11709 35.068 2.01709C34.9834 2.00109 34.8957 1.99609 34.8101 2.00309H13.193C12.9028 2.00309 12.7566 2.14409 12.4674 2.28509C12.1782 2.42609 12.1782 2.85009 12.1782 2.98009V4.55009C12.2195 7.29009 13.7815 9.78409 16.2402 11.0341V20.5531C14.6975 20.8201 13.2766 21.5591 12.1782 22.6671C10.7624 24.0371 9.97539 25.9221 10.0006 27.8841V30.2811C9.99353 30.8201 10.4278 31.2611 10.971 31.2681C10.9861 31.2681 11.0002 31.2681 11.0153 31.2671H20.3033L22.9132 45.1621C23.012 45.6421 23.4342 45.9911 23.929 46.0001C24.197 45.9951 24.455 45.8941 24.6545 45.7171C24.8067 45.5621 24.9074 45.3651 24.9437 45.1521L27.6998 31.6891H36.9847C37.2527 31.6841 37.5107 31.5841 37.7102 31.4071C37.8886 31.2171 37.9914 30.9701 37.9994 30.7121V28.3061C38.0246 26.3441 37.2376 24.4591 35.8228 23.0891Z"
                      ></path>
                    </svg>
                    업데이트
                  </div>
                </Update>
                {/* 창작자 프로필 */}
                <CreatorInfo>
                  {/* 프로필 이미지 */}
                  <Image
                    size="40"
                    src={detail.creatorImg}
                    marginRight="1rem"
                    marginTop="5px"
                  />
                  {/* 창작자 정보 텍스트 */}
                  <div>
                    <div style={{ display: "flex", alignItems: "center" }}>
                      <span
                        style={{
                          fontSize: "1.1rem",
                          fontWeight: "700",
                        }}
                      >
                        
                        {detail.nickname}
                      </span>
                      <span>창작자</span>
                      <Icon>
                        <svg width="9px" height="9px" viewBox="0 0 48 48">
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M14.4941 46.0019C13.1317 46.0019 12.0613 44.9019 12.0613 43.6019C12.0613 43.0019 12.2559 42.4019 12.7425 41.9019L29.4791 24.0019L12.6452 6.20187C11.7694 5.20187 11.7694 3.70187 12.7425 2.70187C13.7156 1.70187 15.1753 1.80187 16.1484 2.80187L36 24.0019L16.1484 45.3019C15.6618 45.7019 15.078 46.0019 14.4941 46.0019Z"
                          ></path>
                        </svg>
                      </Icon>
                    </div>

                  <div
                    style={{
                      fontSize: "13px",
                      color: "#757575",
                      lineHeight: "22px",
                    }}
                  >
                    2022.02.21
                  </div>
                </div>
              </CreatorInfo>
            </div>
            <div>
              <p>{detail.contents}</p>
            </div>
          </Contents>
          {/* 코멘트 박스 -> map 돌려야 함*/}

            {comment_list[articleId]?.map((e, i) => {
              return <List key={i} isUser={e.email===_user} {...e}></List>;
            })}
            {/* <List></List> */}
          </div>
          </div>
        </Container>
      </React.Fragment>
    );
};

const Container = styled.div`
  @media (min-width: 1080px) {
    width: auto;
    max-width: 650px;
    flex-grow: 1;
    margin: 0px 0.5rem 0px 0px;
    padding: 25px 0px 40px;
  }
  order: 1;
  display: block;

  & > div {
    @media (min-width: 1080px) {
      min-height: 500px;
    }
    width: 100%;
  }
`;
const CommentWrite = styled.div`
display: flex;
align-items: center;
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

`;
const Profileimg = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: rgb(208, 208, 208);
  color: rgb(255, 255, 255);
  margin: 5px 1rem 0px 0px;

  & > span {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    font-weight: 700;
    font-size: 14px;
  }
`;
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
`;
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
    border: 0.8px solid rgb(208, 208, 208);
  }
`;
const Contents = styled.div`
  @media (min-width: 1080px) {
    padding: 24px 10px;
    margin: 0px;
    border-top: 0px;
  }

  & > div:nth-child(2) {
    @media (min-width: 1080px) {
      padding: 1.5rem 0;
    }
    padding-top: 16px;
    max-width: 620px;
    margin: 0px auto;
    overflow-x: hidden;
    word-break: break-all;
    color: rgb(61, 61, 61);
    line-height: 28px;
  }

  & > div:nth-child(2) > p {
    @media (min-width: 1080px) {
      font-size: 16px;
      margin: 0em 0em 1em;
    }
  }
`;
const Update = styled.div`
  background: rgb(253, 244, 243);
  color: rgb(248, 100, 83);
  border-radius: 4px;
  padding: 0px 10px;
  height: 26px;
  display: inline-flex;
  align-items: center;
  margin-bottom: 18px;
  font-weight: 500;
  font-size: 12px;
  line-height: 20px;

  & > div {
    display: inline-flex;
    align-self: center;
  }

  svg {
    fill: rgb(235, 75, 56);
    margin: auto 6px auto 0px;
  }
`;
// 창작자 정보
const CreatorInfo = styled.div`
  display: flex;
  align-items: start;

  & > div > div > span:nth-child(2) {
    background: rgb(248, 100, 83);
    color: rgb(255, 255, 255);
    padding: 0px 4px;
    border-radius: 2px;
    display: inline-flex;
    align-items: center;
    height: 16px;
    font-size: 10px;
    font-weight: 500;
    margin-left: 4px;
  }
`;

export default CommentList;

// 댓글 한 박스
const List = (props) => {

  // console.log('댓글props',props)
  const { commentId, articleId, comment, nickname } = props;
  const comment_list = useSelector((state)=>state.comments.comment_list[articleId]);
  console.log('List', comment_list);

  const dispatch = useDispatch();

  const [isActive, setIsActive] = useState(false);
  const [isEdit, setEdit] = useState(false);

  const modalClick = () => {
    setIsActive(!isActive)
  }

  const editCmt = () => {
    setEdit(true);
    setIsActive(false);
  }

  const editComment = ((e)=> {
    if(e.key==='Enter') {
      // 댓글 생성하자마자 수정 시도하면 안됨... 이유가 뭘까?
      console.log('엔터누르고', props.articleId, props.commentId);
      dispatch(commentActions.editCommentDB(props.articleId, props.commentId, e.target.value));
      // dispatch(commentActions.editCommentDB(articleId, comment_list?.commentId, e.target.value));
      setEdit(false);
    }
})

  const deleteCmt = () => {
    dispatch(commentActions.deleteCommentDB(commentId, articleId));
    setIsActive(false);
  }

  // const comment_list = useSelector((state)=>state.comments.comments)
  // console.log('뷰 코멘트리스트'. comment_list)

  return (
    <React.Fragment>
      <Item>
        <div style={{ display: "flex", justifyContent: "space-between" }}>

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
              <div style={{ display: "flex", alignItems: "center" }}>

                <UserName>{nickname}</UserName>

                <Icon>
                  <svg width="9px" height="9px" viewBox="0 0 48 48">
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M14.4941 46.0019C13.1317 46.0019 12.0613 44.9019 12.0613 43.6019C12.0613 43.0019 12.2559 42.4019 12.7425 41.9019L29.4791 24.0019L12.6452 6.20187C11.7694 5.20187 11.7694 3.70187 12.7425 2.70187C13.7156 1.70187 15.1753 1.80187 16.1484 2.80187L36 24.0019L16.1484 45.3019C15.6618 45.7019 15.078 46.0019 14.4941 46.0019Z"
                    ></path>
                  </svg>
                </Icon>
              </div>
              {/* 작성일자 */}
              <span style={{ color: "rgb(158, 158, 158)", fontSize: "13px" }}>
                1일 전
              </span>
            </UserInfo>
          </div>
          
          {props.isUser?
          // 수정삭제버튼
          <div style={{ position: "relative" }}>
            {/* 아이콘 */}
            <IconBtn onClick={modalClick}>
              <div name="more">
                <svg width="1em" height="1em" viewBox="0 0 48 48">
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M6.4 19C8.83 19 10.8 20.97 10.8 23.4C10.8 25.83 8.83 27.8 6.4 27.8C3.97 27.8 2 25.83 2 23.4C2 20.97 3.97 19 6.4 19ZM24.0001 19C26.4301 19 28.4001 20.97 28.4001 23.4C28.4001 25.83 26.4301 27.8 24.0001 27.8C21.5701 27.8 19.6001 25.83 19.6001 23.4C19.6001 20.97 21.5701 19 24.0001 19ZM45.9997 23.4C45.9997 20.97 44.0307 19 41.5997 19C39.1697 19 37.2007 20.97 37.2007 23.4C37.2007 25.83 39.1697 27.8 41.5997 27.8C44.0307 27.8 45.9997 25.83 45.9997 23.4Z"
                  ></path>
                </svg>
              </div>
            </IconBtn>

            {/* 수정삭제모달 */}
            {isActive ? (
              <Modal>
                <ul>
                  <li onClick={editCmt}>
                    <a>수정</a>
                  </li>
                  <li onClick={deleteCmt}>
                    <a>삭제</a>
                  </li>
                </ul>
              </Modal>
            ) : null}

          </div>
          :
          null
          }

        </div>
        {/* 코멘트 내용 */}
        {!isEdit ? (
          <Comment>
            <div>{comment}</div>
          </Comment>
        ) : (
          // 코멘트 수정하기
          <Comment style={{ margin: "10px 5px" }}>
            <input defaultValue={comment} onKeyPress={editComment}></input>
          </Comment>
        )}
      </Item>
    </React.Fragment>
  );
};

List.defaultProps = {
  nickname: "작성자",
  content:
    "뱃지등 다른 상품까지 구매할게 아니라면 추가공지보고 결정하는게 나으실듯해요.",
};

const Item = styled.div`
@media (min-width: 1080px) {
  padding : 24px 10px;
  border-top: 0px;
  margin: 0px;
}
box-shadow: rgb(0 0 0 / 8%) 0px 1px 0px;
display: block;
`
const IconBtn = styled.button`
padding:10px;
height:auto;
cursor: pointer;
outline: none;
background-color: transparent;
border: none;

cursor: pointer;

& > div > svg {
  transform:rotate(90deg);
  fill: rgb(158, 158, 158);
}

& > div > svg:hover {
  fill: black;
}
`
const Modal = styled.div`
width: 205px;
position: absolute;
top:33px;
right:20px;
border: 1px solid rgb(240, 240, 240);
box-shadow: rgb(0 0 0 / 5%) 0px 2px 8px, rgb(0 0 0 / 10%) 0px 1px 0px;
border-radius: 4px;
background: rgb(255, 255, 255);
z-index: 10;
display: block;

ul {
  padding: 8px 0px;
  margin: 0px;
}

li {
  list-style: none;
  display: list-item;
  cursor: pointer;
}

li:hover {
  background-color: rgb(246, 245, 245);
}

li > a {
  display: flex;
  align-items: center;
  font-weight: 400;
  padding: 0px 0px 0px 19px;
  line-height: 24px;
  width: 100%;
  height: 44px;
  font-size: 14px;
}
`
const UserInfo = styled.div`
  margin-left: 1rem;
`;
const Icon = styled.div`
  margin: 0px 0px 0px 8px;

  & > svg {
    fill: rgb(208, 208, 208);
  }
`;
const UserName = styled.div`
  @media (min-width: 1080px) {
    max-width: 320px;
  }
  color: rgb(61, 61, 61);
  font-size: 1.1rem;
  font-weight: 700;
  overflow: hidden;
`;
const Comment = styled.div`
  width: 100%;
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

& > input {
  @media (min-width: 1080px) {
    padding: 0.5rem 0.5rem;
    font-size: 16px;
    line-height: 28px;
    
  }
  overflow: hidden;
  max-width: 620px;
  width: 95%;
  margin: 0px auto;
  padding-top: 16px;
  line-height: 28px;
  color: rgb(61, 61, 61);
  border-radius: 4px;
  border: 0.8px solid rgb(242,242,242);
  box-shadow: rgb(0 0 0 / 4%) 0px 4px 12px, rgb(0 0 0 / 3%) 0px 0.8px 0px;
}
`
