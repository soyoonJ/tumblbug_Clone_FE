import React from "react";
import styled from "styled-components";
import Post from "./Post";

const MainPost = (props) => {
  return (
    <React.Fragment>
      <MainPostTitle>주목할 만한 프로젝트</MainPostTitle>
      <PostBox>
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
      </PostBox>
    </React.Fragment>
  );
};

const MainPostTitle = styled.h3`
  display: flex;
  margin: 30px 0px 20px 0px;
`;

const PostBox = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 0px -6px;
`;

export default MainPost;
