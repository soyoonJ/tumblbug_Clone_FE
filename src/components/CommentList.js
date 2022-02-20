import React from 'react';
import {Grid, Button, Image} from '../elements'
import styled from 'styled-components';

const CommentList = (props) => {
    return (
      <React.Fragment>
        <Container>
          {/* 댓글 작성 조건
          1: 로그인 '로그인 후 작성할 수 있습니다' (disabled)
          2: 후원자 아니면 '후원자만 작성할 수 있습니다' (disabled)
          3: 댓글창 오픈 */}

          {/* 이거 나중에 a 태그로 추가기능 구현해보기 */}
          
          <input
          placeholder="창작자에게 응원의 한마디!"
          style={{
            border:"0.8px solid rgb(242, 242, 242)",
            cursor:"pointer",
            padding:"1rem 1.5rem",
            boxShadow:"rgb(0 0 0 / 4%) 0px 4px 12px, rgb(0 0 0 / 3%) 0px 0.8px 0px",
            borderRadius:"4px",
            width: "100%",
          }}>
            
          </input>

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
              <i className="_30LNYFhw6qsigZSbwlGCDz _1QY7TzdLHKX3-BKPDNNYKF">
              </i>
              0
            </div>
          </Grid>
          </Article>

        </Container>
      </React.Fragment>
    );
};

const Container = styled.div`


`

const Article = styled.article`

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
line-height: 28px;
color: #3d3d3d;
`

export default CommentList;