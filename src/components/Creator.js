import React from 'react';
import styled from 'styled-components';

import {Grid, Button, Image} from '../elements'

const Creator = () => {
    return (
      <React.Fragment>
          {/* 창작자 소개 */}
          <Aside>
            <Profile>
            <p style={{
                padding:"5px 0px 20px",
                fontWeight: "700",
                }}>창작자 소개</p>

            {/* 창작자정보 */}
            <div style={{display:"flex"}}>
                <Image
                size="40"
                src="https://tumblbug-upi.imgix.net/3e34276d-560a-4028-b5da-fe41acbb055e.jpg?auto=format%2Ccompress&ch=Save-Data&facepad=2.0&fit=facearea&h=250&mask=ellipse&w=200&s=92b8d145317f0a5d7bd31d4f0cca9871"
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
                        
            {/* 창작자 소개 */}
            <p style={{
                color:"#707070",
                fontSize:"13px",
                padding:"15px 0px 20px",
            }}>
                {/* 소개내용 */}
                10년간 제품/VMD 디자이너로 기업에 있다가 창업을 결정한
                '호호배리(hohobaelee)'라고 합니다. 기업에서 인하우스 디자이너로
                근무하면서 서브 잡으로 일러스트레이터 활동을 병행하다가, 제품 디자인과
                일러스트 경험을 바탕으로 저만의 브랜드를 만들기로 결심하고
                프프프굿즈(FFFGOODS)를 만들게 되었습니다. 인스타 @fff_goods 를 통해서
                궁금하신 사항(인하우스디자이너, 창업 등등) 편하게 물어보셔도 돼요 :)
                다양한 소통을 하면서 지내요!
            </p>
            
            <Grid is_flex>
                <Button
                flex_center
                width="100%"
                height="36px"
                bg="rgb(240, 240, 240)"
                color="black"
                borderRadius="4px"
                margin = "0px 8px 0px 0px"
                >
                    팔로우
                </Button>
                <Button
                flex_center
                width="100%"
                height="36px"
                bg="#fff"
                color="black"
                border="1px solid rgb(240, 240, 240)"
                borderRadius="4px"
                >
                    창작자에게 문의
                </Button>
            </Grid>
          </Profile>
        </Aside>
      </React.Fragment>
    );
};

const Aside = styled.aside`
padding-top:25px;
max-width:354px;
`

const Profile = styled.div`
border: 1px solid rgb(239, 239, 239);
border-radius: 4px;
box-shadow:rgb(0 0 0 / 10%) 0px 1px 0px, rgb(0 0 0 / 4%) 0px 2px 4px;
padding:16px 21px;
`



export default Creator;