import React from "react";
import styled from "styled-components";

import {Grid, Button, Image} from '../elements'
import {CommentList, Creator, Header} from '../components';
import { useDispatch, useSelector } from 'react-redux';
import {actionCreators as articleActions} from '../redux/modules/articles'

const PostDetail = (props) => {

  const dispatch = useDispatch();
  // console.log(isDonate)
  // const article = useSelector((state) => state.articles.one_list)

  // console.log('아티클',article)
  // postId 파라미터 가져오기
  const articleId = props.match.params.id;
  // 모인금액, 후원자 숫자 콤마작업
  const detail = props.detailedProjects
  // console.log('디테일', detail)

  // let today = new Date();
  // let year = today.getFullYear().toString().slice(-2);
  // let month = ("0" + (today.getMonth() + 1)).slice(-2);
  // let day = parseInt(("0" + today.getDate()).slice(-2));
  // let deadline = parseInt(detail.deadline);
  // let endDate = `${year}년 ${month}월 ${day+deadline}일`
  // console.log(endDate);

  let total = detail.totalAmount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
  let target = detail.targetAmount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
  let achieve = detail.totalAmount/detail.targetAmount*100
  let donator = props.donatorNum.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")

  React.useEffect(()=> {

    dispatch(articleActions.setOne(articleId))

    // 후원하기 버튼 클릭 발생할 때마다 또 해줘야 함 (포스트 정보 바뀔때마다!)
  },[])

  const wantDonate = () => {
    // user에서 로그인 여부 받아와서 나눠주기
    dispatch(articleActions.donateDB(articleId))
  }

  const cancelDonate = () => {
    dispatch(articleActions.notDonateDB(articleId))
  }

  return (
    <React.Fragment>
      <Header />
      <DetailTop>
        <Top>
          <div>
            {/* 타이틀영역 : 카테고리/타이틀/제작사 */}
            <Grid is_flex height="280px">
              <Title>
                <div>
                  <a>
                    <span style={{
                      fontWeight:"600",
                      color:"#757575",
                      padding: "0.6rem",
                      fontSize:"0.9rem",
                      background:"rgb(250, 250, 250)",
                      border:"1px solid rgb(239, 239, 239)",
                      borderRadius:"2px",
                      }}>{detail.category}</span>
                  </a>
                  <h1>{detail.title}</h1>
                  <div>
                    <Image
                    size="25"
                    marginRight="0.5rem"
                    marginTop="5px"
                    src="https://tumblbug-upi.imgix.net/3e34276d-560a-4028-b5da-fe41acbb055e.jpg?auto=format%2Ccompress&ch=Save-Data&facepad=2.0&fit=facearea&h=250&mask=ellipse&w=200&s=92b8d145317f0a5d7bd31d4f0cca9871"
                    >
                    이미지
                    </Image>
                    <span style={{fontWeight:"600", fontSize:"1rem"}}>{detail.nickname}</span>
                  </div>
                </div>
              </Title>

            </Grid>
            {/* 상품요약 썸네일 : 이미지 */}
            <Img>
              <img src={detail.image}
              style={{width:"100%", maxWidth:"100%"}}
              alt="썸네일"
              / >
              {/* 이미지 왼쪽 화살표 */}
              <div>
                <div name="arrow1-left">
                  <svg viewBox="0 0 48 48">
                    <path fillRule="evenodd" clipRule="evenodd" d="M32.8912 45.3014L12 23.913L32.8912 2.52471C33.5866 1.8251 34.7804 1.8251 35.4777 2.52471C36.1741 3.22333 36.1741 4.42368 35.4777 5.22224L17.1731 23.913L35.4777 42.7018C36.1741 43.4024 36.1741 44.6018 35.4777 45.4013C35.0788 45.8011 34.6819 46 34.1845 46C33.7855 45.9011 33.2881 45.7002 32.8912 45.3014Z">
                  </path></svg></div>
              </div>
              {/* 이미지 오른쪽 화살표 */}
              <div className="swiper-button-next">
                <div name="arrow1-right">
                  <svg viewBox="0 0 48 48">
                    <path fillRule="evenodd" clipRule="evenodd" d="M13.9071 46C13.4118 46 12.9164 45.8001 12.6192 45.4003C11.9257 44.7007 11.9257 43.5014 12.6192 42.7019L30.8493 24.0125L12.5201 5.22317C11.8266 4.52357 11.8266 3.32425 12.5201 2.5247C13.2136 1.8251 14.3034 1.8251 15.096 2.5247L36 24.0125L15.195 45.4003C14.7988 45.8001 14.3034 46 13.9071 46Z">
                </path></svg></div>
              </div>
              
            </Img>
            {/* 상품요약 텍스트 : 모인금액~후원하기*/}
            <Info>
              {/* 펀딩 요약 텍스트 */}
              <div>
                {/* 모인금액 */}
                <Grid marginBottom="1.75rem">
                  <InfoTitle>모인금액</InfoTitle>
                  <InfoNum>
                    {/* 회계처리 필요 */}
                    <span>{total}</span>
                    <span>원</span>
                    <span>{achieve}%</span>
                  </InfoNum>
                </Grid>
                {/* 남은시간 */}
                <Grid fontSize="2.75rem" marginBottom="1.75rem">
                <InfoTitle>남은시간</InfoTitle>
                <InfoNum>
                  {/* 회계처리 필요 */}
                  <span>{detail.deadline}</span>
                  <span>일</span>
                </InfoNum>
                </Grid>
                {/* 후원자 */}
                <Grid marginBottom="1.75rem">
                <InfoTitle>후원자</InfoTitle>
                <InfoNum>
                  <span>{donator}</span>
                  <span>명</span>
                </InfoNum>
                </Grid>
              </div>
              {/* 펀딩 진행중 안내 박스 */}
              <SubInfo>
                <div>
                  <div>펀딩 진행중</div>
                  <span>목표 금액인 {target}원이 모여야만 결제됩니다.<br/>
                  결제는 '마감일자'에 다함께 진행됩니다.</span>
                </div>
              </SubInfo>
              {/* 하트/공유하기/후원하기 */}
              <DetailButtons>
                <div>
                  {/* 하트버튼 */}
                  <div style={{padding:"0.5rem 0px"}}>
                    <MiniBtn>
                        <IconAlign>
                          <div name="like-line" style={{display: "inline-flex",alignSelf:"center", }}>
                            <svg width="15" height="15" viewBox="0 0 38 34" fill="none">
                              <path fillRule="evenodd" clipRule="evenodd" d="M18.9996 5.62299L15.6051 2.55614C12.2106 -0.510215 6.56995 0.17753 3.48147 3.57849C-0.397666 7.66674 -0.397863 14.5859 3.70675 18.9121L19 33.8811L34.2923 18.9121C38.3969 14.5859 38.3971 7.66747 34.5176 3.57849C31.4291 0.17753 25.7888 -0.510094 22.3942 2.55614L18.9996 5.62299ZM32.0081 16.6701C34.9446 13.533 34.8523 8.58052 32.1962 5.78099L32.1721 5.75565L32.1487 5.72978C30.0533 3.42248 26.4219 3.23047 24.5394 4.93062L18.9996 9.93557L13.4601 4.93076C11.5777 3.2306 7.94577 3.42244 5.85042 5.72978L5.82689 5.75569L5.8028 5.78108C3.14716 8.57988 3.05453 13.533 5.99094 16.6701L18.9999 29.4033L32.0081 16.6701Z" fill="#6D6D6D">
                              </path>
                            </svg>
                          </div>
                          <span>0</span>
                        </IconAlign>
                    </MiniBtn>
                  </div>
                  {/* 공유버튼 */}
                  <div style={{padding:"0.5rem 0px", margin:"0px 6px"}}>
                    <MiniBtn>
                        <IconAlign>
                          <div name="share-2">
                            <svg width="15" height="15" viewBox="0 0 32 35" fill="none">
                              <path fillRule="evenodd" clipRule="evenodd" d="M25.5 9.8C27.3226 9.8 28.8 8.32254 28.8 6.5C28.8 4.67746 27.3226 3.2 25.5 3.2C23.6775 3.2 22.2 4.67746 22.2 6.5C22.2 8.32254 23.6775 9.8 25.5 9.8ZM25.5 13C29.0899 13 32 10.0899 32 6.5C32 2.91015 29.0899 0 25.5 0C21.9102 0 19 2.91015 19 6.5C19 7.00407 19.0574 7.49475 19.166 7.96584L13.2462 11.8889L10.9897 13.2996C9.82276 12.1847 8.24135 11.4999 6.5 11.4999C2.91015 11.4999 0 14.4101 0 17.9999C0 21.5898 2.91015 24.4999 6.5 24.4999C8.22679 24.4999 9.79631 23.8266 10.9603 22.7281L19.0878 27.4291C19.0301 27.7775 19 28.1352 19 28.4999C19 32.0898 21.9102 34.9999 25.5 34.9999C29.0899 34.9999 32 32.0898 32 28.4999C32 24.9101 29.0899 21.9999 25.5 21.9999C23.4257 21.9999 21.5784 22.9716 20.3882 24.4846L12.6783 20.0251C12.8871 19.3878 13 18.7071 13 17.9999C13 17.3061 12.8913 16.6376 12.6899 16.0106L14.9785 14.5798L20.6465 10.8236C21.8369 12.159 23.5703 13 25.5 13ZM6.5 21.2999C8.32254 21.2999 9.8 19.8225 9.8 17.9999C9.8 16.1774 8.32254 14.6999 6.5 14.6999C4.67746 14.6999 3.2 16.1774 3.2 17.9999C3.2 19.8225 4.67746 21.2999 6.5 21.2999ZM28.8 28.4999C28.8 30.3225 27.3226 31.7999 25.5 31.7999C23.6775 31.7999 22.2 30.3225 22.2 28.4999C22.2 26.6774 23.6775 25.1999 25.5 25.1999C27.3226 25.1999 28.8 26.6774 28.8 28.4999Z" fill="#6D6D6D">
                              </path>
                            </svg>
                          </div>
                          <span>0</span>
                        </IconAlign>
                    </MiniBtn>
                  </div>
                  {/* 후원상태가 true라면 밑에 버튼, false면 회색버튼 추가 */}
                  {/* 후원하기 버튼 */}
                  <Button
                  _onClick={wantDonate}
                  donateHover height="52px" padding="15px" bold fontSize="15.4px" borderRadius="0.285714rem" bold>
                    이 프로젝트 후원하기</Button>
                  <Button
                  _onClick={cancelDonate}
                  CancelHover height="52px" padding="15px" bold fontSize="15.4px" borderRadius="0.285714rem" bold
                    color="rgba(0, 0, 0, 0.6)" bg="rgb(231, 231, 231)"
                  >후원 취소하기</Button>
                  
                  {/* 후원 취소하기 버튼 */}
                  
                </div>
              </DetailButtons>
            </Info>
          </div>
        </Top>
      </DetailTop>

      <Nav>
        <div>
          <div>
            <a>커뮤니티<span>0</span></a>
          </div>
        </div>

      </Nav>

      {/* 댓글 없을 경우 '댓글이 없습니다' 텍스트 추가 필요 */}
      <DetailBottom>
        <div>
          {/* 코멘트 db props로 넘겨주기 */}
          <CommentList detail={detail}></CommentList>
          {detail && <Creator {...detail}></Creator>}
        </div>
      </DetailBottom>
    </React.Fragment>
  );
};


PostDetail.defaultProps = {
  donatorNum: 1,
  detailedProjects: {
    category: "카테고리",
    nickname: "창작자",
    title: "타이틀",
    image:"https://tumblbug-pci.imgix.net/932499bdfd401c73ae81db5270ea5a8a834f7a87/00e0280cfcd37839d70cce63ea3c89360ef59af5/f2f822b0d93b98c4f50801a243776ffcc18e55cd/224c8b53-8589-4d04-be03-a8b2e4c0b83b.jpeg?ixlib=rb-1.1.0&w=1240&h=930&auto=format%2Ccompress&lossless=true&fit=crop&s=e0ed2c1f02c2bdff4ecf7f21d8f366e6",
    targetAmount: 100000,
    totalAmount: 50000,
    deadline: "1",
    contents: "default contents",
  },
};



const DetailTop = styled.div`
  @media(min-width: 1080px) {
    padding-bottom: 3rem;
  }
  width: 100%;
  min-width : 320px;
  display: block;
  line-height: 1.7em;
  font-size:14px;
`
const Top = styled.div`
  @media only screen and (min-width: 1200px) {
    width:1160px;
  }

  @media only screen and (min-width: 1080px) {
  width:1080px;
  }

  @media (min-width: 1080px) {
    width:1032px;
    margin: 0px auto;
  }

  position: relative;
  display:block;
  height: auto;

  & > div {
    @media only screen and (min-width: 1080px) {
      width: 1032px;
      margin: 0px auto;
    }
    display: flex;
    flex-wrap: wrap;
  }

`

{/* 타이틀 */}
const Title = styled.div`
  @media (min-width: 1080px) {
    order:1;
    height: 280px;
    padding-bottom: 0px;
    align-items: center;
  }
  width:100%;
  display:flex;

  & > div {
    @media (min-width: 1080px) {
      text-align: center;
      margin: 0px auto;
      padding: 1rem;
    }
    display: block;
  }

  a {
    @media (min-width: 1080px) {
      text-align: center;
    }
  }

  h1 {
    @media (min-width: 1080px) {
      font-size: 2.8rem;
      margin:1.5rem 0px 1rem;
    }
    min-height: 1rem;
    line-height:1.5;
    display: block;
  }

  div > div {
    @media (min-width: 1080px) {
      justify-content:center;
    }
    align-items:center;
    display:flex;
  }
`

{/* 썸네일 */}
const Img = styled.div`
@media (min-width: 1080px) {
  order: 2;
  width: 594px;
  height: auto;
  display: block;
}
position: relative;

div {
  &:nth-child(1) {
    position:absolute;
    top: 50%;
    left: 0px;
    display: flex;
    justify-content: center;
    align-items: center;
    padding:4px 18px 18px;
    font-size:18px;
    z-index:10;
    cursor:pointer;
  }

  &:nth-child(2) {
    position:absolute;
    top: 50%;
    right: 0px;
    display: flex;
    justify-content: center;
    align-items: center;
    padding:4px 18px 18px;
    font-size:18px;
    z-index:10;
    cursor:pointer;
  }
}
`
{/* aside */}
const Info = styled.aside`
@media (min-width: 1080px) {
  order:3;
  flex: 1 1 0px;
  margin: 0px 0px 0px 99px;
}

& > div {
  @media (min-width: 1080px) {
    width: 100%;
    display: block;
    margin: 0px 0px 2rem;
  }
  order: 4;
  justify-content: space-between;
  
}

`
const InfoTitle = styled.div`
  @media (min-width: 1080px) {
    font-size:1rem;
    margin-bottom:1rem;
  }
  color:rgba(0, 0, 0, 0.87)
`
const InfoNum = styled.div`
  @media (min-width: 1080px) {
    font-size:2.75rem;
  }
  letter-spacing: 0.5px;
  font-family:Segoe UI;

span {
  &:nth-child(2) {
    @media  (min-width: 1080px) {
      font-size:1rem;
    }
    color:rgba(0, 0, 0, 0.87);
    margin-left:0.25rem;
  }
  &:nth-child(3) {
    @media  (min-width: 1080px) {
      font-size:1.3rem;
      margin-left: 10px;
    }
    display:inline;
    letter-spacing:0.5px;
    font-family:Segoe UI;
    font-weight:700;
  }
}
`
const SubInfo = styled.div`
  @media (min-width: 1080px) {
    padding: 1rem 1.5rem;
    margin: 0px 0px 1rem;
  }
  order: 5;
  background-color: rgb(250, 250, 250);
  border: 1px solid rgb(239, 239, 239);
  display: block;
  {/* 텍스트 묶음 */}
  & > div {
    font-size: 1rem;
    color: rgba(0, 0, 0, 0.8);
    display: block;
  }
  {/* 펀딩 진행중 */}
  & > div > div {
    font-weight: 700;
    line-height: 1.5;
    margin-bottom: 0.5rem;
  }
  {/* 목표금액~결제 안내 */}
  & > div > span {
    line-height: 1.5;
    font-size: 1rem;
  }
`;

{/* 하트/공유/후원하기 버튼 */}
const DetailButtons = styled.div`
  div {
    display: flex;
    align-items: center;
    justify-content: center;
  }  
`
const MiniBtn = styled.div`
  border:1px solid rgb(228, 228, 228);
  border-radius: 4px;
  width: 52px;
  height: 52px;
  cursor: pointer;
`
const IconAlign = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  
  span {
    display: block;
    font-size: 9px;
    line-height: 9px;
    color: rgb(61, 61, 61);
    margin-top: 5px;
    text-align: center;
  }
`

{/* 커뮤니티 네비게이션 */}
const Nav = styled.nav`
  @media (min-width: 1080px) {
  height: 56px;
  padding: 0px 1rem;
  }
  box-shadow: rgb(0 0 0 / 10%) 0px -1px 0px, rgb(0 0 0 / 8%) 0px 2px 4px;
  display:flex;
  align-items:stretch;
  justify-content: flex_start;

  div {
    @media (min-width: 1080px) {
      width: 1032px;
      margin: 0px auto;
    }
  }

  div > div {
    @media (min-width: 1080px) {
      width: auto;
      margin: 0px 1rem;
    }
    height: 100%;
    display: flex;
  }

  {/* 커뮤니티 */}
  a {
    @media (min-width: 1080px) {
      margin-right: 17px;
    }
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0.5rem 0px;
    font-size: 1rem;
    font-weight:700;
    border-bottom: 3px solid black;
    // padding:7px 0px 15px;
  }

  span {
    font-size:11.2px;
    text-align:start;
    margin: -0.2rem -0.1rem 0px 0.2rem;
  }
`

{/* 하단 댓글/창작자 */}
const DetailBottom = styled.div`
@media only screen and (min-width: 1080px) {
  width : 1080px;
}

@media (min-width: 1080px) {
  width: 1032px;
  margin: 0px auto;
}

& > div {
  @media (min-width: 1080px) {
    width: 1032px;
    margin: 0px auto;
    flex-wrap: nowrap;
    justify-content: space-between;
  }
  display: flex;
}
`


export default PostDetail;
