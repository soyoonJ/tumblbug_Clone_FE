import React from 'react';
import {Grid, Button, Image} from '../elements'
import { CommentWrite } from '.';
import styled from 'styled-components';

const CommentList = (props) => {
    return (
      <React.Fragment>
        <Article>

          {/* <CommentWrite></CommentWrite> */}

          {/* 댓글 한 박스, map 돌려야 함 */}
          <Grid padding="24px 10px">
            <CommentInfo>
              <div style={{display:"flex"}}>
                  <Image
                  size="40"
                  src="https://tumblbug-upi.imgix.net/defaults/avatar_3.png?ixlib=rb-1.1.0&w=100&h=125&auto=format%2Ccompress&fit=facearea&facepad=2.0&ch=Save-Data&mask=ellipse&s=23cd7d64a8ff0c22c20d54f96489e7e9"
                  marginRight="1rem"
                  marginTop="5px"
                  />
                  <div>
                      {/* 추가기능으로 할만함: 클릭 시 마이페이지로 넘어가게끔 할지말지 확인해야할듯 -> 약간 아이디 암호화 하는듯*/}
                      <span style={{
                          fontSize:"14px",
                          fontWeight:"700",
                          }}>사용자명</span>
                      <div style={{
                          fontSize:"12.6px",
                          color:"#757575",
                          }}>
                          마지막 로그인&nbsp;&nbsp;
                          <b style={{
                              fontSize:"12.6px",
                              color:"#757575",
                          }}>1일 전</b>
                          </div>
                  </div>
              </div>
            </CommentInfo>
            <Comment>
            뱃지등 다른 상품까지 구매할게 아니라면 추가공지보고 결정하는게 나으실듯해요. 앞으로도 보급품이 계속 나오고, cd는 이후 패키지에선 판매안한다고 확정난다면, 저라면 전시즘에 미참가상태라면 이번 시즌 포기하고 완결날때 한번에 보급품으로 살 듯하네요. 지금은 보급품은 한정판과 묶여서 판매하고 있어서..ㅋㅋ 나중가서도 보급품을 계속 판매할 예정이라면 보급품을 지금 사는 것도 계산적으로 따지면 손해입니다.
            </Comment>
            <div style={{color:"#9e9e9e", fontSize:"14px", cursor:"pointer"}}>
              {/* 답글개수 */}
              0
            </div>
          </Grid>
        </Article>
      </React.Fragment>
    );
};

const Article = styled.article`
max-width:650px;

&input::placeholder {
  color:#9e9e9e;
  fontSize:14px;
}
`
const CommentInfo = styled.div`
display: flex;
`
const Comment = styled.div`
padding-top: 16px;
padding: 1.5rem 0;
margin: 0px auto;
font-size: 16px;
line-height: 28px;
color: #3d3d3d;
`

export default CommentList;