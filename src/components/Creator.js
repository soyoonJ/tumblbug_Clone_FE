import React from 'react';
import styled from 'styled-components';

import {Grid, Button, Image} from '../elements'

const Creator = () => {
    return (
      <React.Fragment>
          {/* 창작자 소개 */}
          <Grid>
            창작자 소개
            {/* 프로필 파트 */}
            <div>
            {/* 추가기능으로 할만함: 클릭 시 마이페이지로 넘어가게끔 할지말지 확인해야할듯 -> 약간 아이디 암호화 하는듯*/}
            <a>사용자명</a>
            <br />
            몇일전?{/* 몇일 전 작성할거임? */}
            <p>댓글작성할거야</p>
            </div>

            <p>
                {/* 소개내용 */}
                10년간 제품/VMD 디자이너로 기업에 있다가 창업을 결정한
                '호호배리(hohobaelee)'라고 합니다. 기업에서 인하우스 디자이너로
                근무하면서 서브 잡으로 일러스트레이터 활동을 병행하다가, 제품 디자인과
                일러스트 경험을 바탕으로 저만의 브랜드를 만들기로 결심하고
                프프프굿즈(FFFGOODS)를 만들게 되었습니다. 인스타 @fff_goods 를 통해서
                궁금하신 사항(인하우스디자이너, 창업 등등) 편하게 물어보셔도 돼요 :)
                다양한 소통을 하면서 지내요!
            </p>
            
            <ButtonContainer>
                <Button></Button>
                <Button></Button>
            </ButtonContainer>
        </Grid>
      </React.Fragment>
    );
};

const ButtonContainer = styled.div`
display:flex;

`


export default Creator;