import React from 'react';
import styled from 'styled-components';

import {Grid, Button, Image} from '../elements'

const CommentWrite = (props) => {
    return (
        <React.Fragment>
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


        </React.Fragment>
    );
};



export default CommentWrite;