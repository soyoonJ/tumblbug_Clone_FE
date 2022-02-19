import React from 'react';
import styled from 'styled-components';

import {Grid, Button, Image} from '../elements'
import {CommentWrite, CommentList} from '../components';


const PostDetail = () => {
  return (
    <React.Fragment>
      <DetailTop>
        <Title>
          <a>
            <span>카테고리명</span>
          </a>
          <h1 style={{fontSize:"2rem"}}>텀블벅 타이틀</h1>
          <div style={{display:"flex", justifyContent:"center", alignItems:"center"}}>
            <Image
            src="https://tumblbug-upi.imgix.net/3e34276d-560a-4028-b5da-fe41acbb055e.jpg?auto=format%2Ccompress&ch=Save-Data&facepad=2.0&fit=facearea&h=250&mask=ellipse&w=200&s=92b8d145317f0a5d7bd31d4f0cca9871"
            >
            이미지
            </Image>
            <span>제작사</span>
          </div>
        </Title>

        {/* 상단 우측 텍스트 요약 */}
        <Container>
          <Thumbnail src="https://tumblbug-pci.imgix.net/932499bdfd401c73ae81db5270ea5a8a834f7a87/7bbf54d9f81e4491c45cc075b08fe381403801de/f29731dfb323ec5d478d360c1e121d245d294a89/bbb07eaf-c55b-4528-98ba-902ec90396fe.jpeg?ixlib=rb-1.1.0&w=1240&h=930&auto=format%2Ccompress&lossless=true&fit=crop&s=193e308c4f9e9722d61f17e9610e65f0"></Thumbnail>
          <TextInfo>
            {/* 펀딩 요약 텍스트 */}
            <Info>
            <InfoTitle>모인금액</InfoTitle>
            <InfoNum>
              {/* 회계처리 필요 */}
              <span>1234000</span>
              <span> 원</span>
              <span> 123%</span>
            </InfoNum>
            </Info>

            <Info>
            <InfoTitle>남은시간</InfoTitle>
            <InfoNum>
              {/* 회계처리 필요 */}
              <span>6</span>
              <span>일</span>
            </InfoNum>
            </Info>

            <Info>
            <InfoTitle>후원자</InfoTitle>
            <InfoNum>
              <span>10000</span>
              <span>명</span>
            </InfoNum>
            </Info>

            {/* 펀딩 진행중 안내 박스 */}
            <SubInfo>
            <p>펀딩 진행중</p>
            <p>목표 금액인 '목표금액'이 모여야만 결제됩니다.<br/>
            결제는 '마감일자'에 다함께 진행됩니다.</p>
            </SubInfo>

            <Button padding="15px" bold fontSize="14px">이 프로젝트 후원하기</Button>
          </TextInfo>
        </Container>
      </DetailTop>


      <Nav><p>커뮤니티</p></Nav>

      <DetailBottom>
      <div>
        댓글'개수'
        <hr/>
        {/* 댓글 없을 경우 '댓글이 없습니다' 텍스트 추가 필요 */}
        <CommentWrite></CommentWrite>
        
        <CommentList></CommentList>


        
      </div>
      </DetailBottom>
    </React.Fragment>
  );
};

const DetailTop = styled.div`
width: 1032px;
margin: auto;
text-align: center;
padding-bottom: 3rem;
`

const Title = styled.div`
padding: 1rem;

a {
  padding: 0.6rem;
  font-size: 12px;
  background-color: rgb(250, 250, 250);
  border: 1px solid rgb(239, 239, 239);
}

h1 > a {
  &:nth-child(2) {
    font-size:14px;
    font-weight:700;
  }
}

`

const Container = styled.div`
display: flex;
justify-content: center;
margin: 0px auto;
`

const Thumbnail = styled.img`
width: 594px;

`
const TextInfo = styled.div`
margin: 0px 0px 0px 99px;
text-align:left;
`

const Info = styled.div`
margin-bottom: 1.75rem;
`

const InfoTitle = styled.div`
font-size:14px;
color:rgba(0, 0, 0, 0.87)
`

const InfoNum = styled.div`
font-size:38px;
font-family:Segoe UI;

span {
  &:nth-child(2) {
    font-size:14px;
    color:rgba(0, 0, 0, 0.87);
  }
  &:nth-child(3) {
    font-family:Segoe UI;
    font-size:18px;
    font-weight:700;
  }
}
`

const SubInfo = styled.div`
  padding: 0.5rem 1.5rem;
  margin: 0px 0px 1rem 0px;
  background-color: rgb(250, 250, 250);
  border: 1px solid rgb(239, 239, 239);
  
  p {
    &:nth-child(1) {
      font-weight:700;
      font-size:14px;
    }
    &:nth-child(2) {
      font-size:14px;
    }
  }
`

const Nav = styled.nav`
width: 100%;
height: 56px;
box-shadow: rgb(0 0 0 / 10%) 0px -1px 0px, rgb(0 0 0 / 8%) 0px 2px 4px;

p {
  font-weight:700;
  border-bottom: 3px solid black;
}
`

const DetailBottom = styled.div`
width: 1032px;
margin: auto;
text-align: left;
`


export default PostDetail;
