import React from 'react';
import styled from 'styled-components';

import {Grid, Button, Image} from '../elements'

const Creator = (props) => {

  // const [IsCreatorOn, setIsCreatorOn] = React.useState(false)

  // React.useEffect(() => {
  //   window.addEventListener('scroll', handleScroll);
  //   return () => {
  //     window.removeEventListener('scroll', handleScroll); //clean up
  //   };
  // }, [IsCreatorOn]);

  // const handleScroll = () => {
  //   if (window.scrollY > 1000) {
  //     setIsCreatorOn(true);
  //     return;
  //   }
  //     setIsCreatorOn(false);
  //     return;
  // };

    return (
      <React.Fragment>
        {/* 창작자 소개 */}
        <Aside>
            <Profile>
              <div>
                {/* 타이틀 */}
                <Title>
                    창작자 소개
                </Title>
                {/* 창작자정보 */}
                <CreatorInfo>
                  {/* 프로필 이미지 */}
                  <Image
                    size="40"
                    src={props.creatorImg}
                    marginRight="1rem"
                    marginTop="5px"
                  />
                  <div>
                    {/* 추가기능으로 할만함: 클릭 시 마이페이지로 넘어가게끔 할지말지 확인해야할듯 -> 약간 아이디 암호화 하는듯*/}
                    <span
                      style={{
                        fontSize: "14px",
                        fontWeight: "700",
                      }}
                    >
                      {props.nickname}
                    </span>
                    <div
                      style={{
                        fontSize: "12.6px",
                        color: "#757575",
                      }}
                    >
                      마지막 로그인&nbsp;&nbsp;
                      <b
                        style={{
                          fontSize: "12.6px",
                          color: "#757575",
                        }}
                      >
                        1일 전
                      </b>
                    </div>
                  </div>
                </CreatorInfo>
                {/* 창작자 소개 */}
                <div>
                  <p
                    style={{
                      color: "#707070",
                      fontSize: "13px",
                      padding: "15px 0px 20px",
                    }}
                  >
                    {/* 소개내용 */}
                    이번주 팀 프로젝트 클론코딩 주제는 텀블벅입니다.
                    창작자 소개는 따로 없이 저희를 소개하겠습니다
                    6조 열심히 하고 있습니다
                    결과물이 좋게 나오면 기분이 정말 좋을 것 같아요
                    실전 전 마지막 프로젝트네요
                    화이팅입니다
                  </p>
                </div>
                {/* 팔로우, 문의버튼 */}
                  <Grid is_flex>
                    <Button
                      FollowHover
                      flex_center
                      width="100%"
                      height="36px"
                      bg="rgb(240, 240, 240)"
                      color="black"
                      borderRadius="4px"
                      margin="0px 8px 0px 0px"
                      fontSize="12px"
                    >
                      {/* + 아이콘 */}
                      <div name="plus">
                        <svg
                          width="11px"
                          height="11px"
                          viewBox="0 0 48 48"
                          style={{
                            color: "#3d3d3d",
                            fontSize: "16px",
                            marginRight: "3px",
                          }}
                        >
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M43.7104 21.8549H25.99V4.09524C25.99 2.89796 24.9945 2 23.9005 2C22.8054 2 21.81 2.89796 21.81 4.09524V21.9546H4.0905C2.89593 21.8549 2 22.8526 2 23.9501C2 25.0476 2.89593 26.0454 4.0905 26.0454H21.9095V43.9048C21.9095 45.0023 22.8054 46 23.999 46C25.095 46 26.0905 45.102 26.0905 43.9048V26.0454H43.9085C45.0045 26.0454 46 25.1474 46 23.9501C45.8009 22.8526 44.904 21.8549 43.7104 21.8549C43.7104 21.8549 43.81 21.8549 43.7104 21.8549Z"
                          ></path>
                        </svg>
                      </div>
                      팔로우
                    </Button>
                    <Button
                      AskHover
                      flex_center
                      width="100%"
                      height="36px"
                      bg="#fff"
                      color="black"
                      border="1px solid rgb(240, 240, 240)"
                      borderRadius="4px"
                      fontSize="12px"
                    >
                      <div style={{display:"flex", alignItems:"center", justifyContent:"center",}}>
                          <div name="letter">
                          <svg width="12px" height="12px" style={{color:"#3d3d3d", marginRight:"3px"}} viewBox="0 0 48 48">
                              <path fillRule="evenodd" clipRule="evenodd" d="M41.9 37.8966H6.1C5.1 37.8966 4.2 37.0958 4.2 35.997V34.5964L15.7 26.3993L19 29.0977C21.9 31.4981 26.099 31.4981 29.099 29.0977L32.4 26.3993L43.9 34.5964V35.997C43.799 37.0958 43 37.8966 41.9 37.8966ZM13.9 24.9996L4.2 31.898V17.0015L13.9 24.9996ZM43.799 17.0015V31.898L34.099 24.9996L43.799 17.0015ZM6.1 9.20333H41.9C42.9 9.20333 43.799 10.0031 43.799 11.1029V14.2022L27.7 27.499C25.599 29.1986 22.5 29.1986 20.4 27.499L4.2 14.2022V11.0029C4.2 10.0031 5.1 9.10336 6.1 9.20333ZM41.9 7.00385H6.1C3.9 6.90287 2 8.80243 2 11.0029V35.997C2 38.2955 3.9 40.0951 6.1 39.9961H41.9C44.2 39.9961 46 38.1965 46 35.997V11.0029C46 8.80243 44.2 6.90287 41.9 7.00385Z"
                              ></path>
                          </svg>
                          </div>
                          창작자에게 문의
                      </div>
                    </Button>
                  </Grid>
                
              </div>
            </Profile>
        </Aside>
      </React.Fragment>
    );
};

// Aside 전체사이즈
const Aside = styled.aside`
@media (min-width: 1080px) {
  padding-top:25px;
  max-width:354px;
  display: block;
  margin: 0px 0px 0px 0.5rem;
}
order: 2;
width : 100%;
`
// 프로필 박스 전체
const Profile = styled.div`
  @media (min-width: 1080px) {
    border: 1px solid rgb(239, 239, 239);
    box-shadow:rgb(0 0 0 / 10%) 0px 1px 0px, rgb(0 0 0 / 4%) 0px 2px 4px;
  }
  width: 100%;
  display: block;
  border-radius: 4px;

  & > div {
    padding:16px 21px;
  }

`
// 프로필 타이틀
const Title = styled.div`
  @media (min-width: 1080px) {
    display: block;
    padding : 5px 0px 20px;
  }
  margin : 0px;
  font-weight : 700;
`
// 창작자 정보
const CreatorInfo = styled.div`
 display: flex;
 align-items: start;
`

export default Creator;