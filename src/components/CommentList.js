import React from 'react';
import {Grid, Button, Image} from '../elements'
import styled from 'styled-components';

const CommentList = (props) => {
    return (
      <React.Fragment>
        {/* 댓글 개별 박스 -> map 돌려서 데이터 가져오기 */}
        <Comment>
          <CommentInfo>
            <Image></Image>
            <div>
              {/* 추가기능으로 할만함: 클릭 시 마이페이지로 넘어가게끔 할지말지 확인해야할듯 -> 약간 아이디 암호화 하는듯*/}
              <a>사용자명</a>
              <br />
              몇일전?{/* 몇일 전 작성할거임? */}
              <p>댓글작성할거야</p>
            </div>
          </CommentInfo>
        </Comment>
      </React.Fragment>
    );
};



const Comment = styled.div`
padding: 19px 12px 20px 0px;
`

const CommentInfo = styled.div`
display: flex;
`

export default CommentList;