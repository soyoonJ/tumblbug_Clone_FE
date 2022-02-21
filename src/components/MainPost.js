import React from 'react';

import styled from 'styled-components';
import Post from './Post';

import { RESP } from '../shared/response';
import { useSelector } from 'react-redux';

const MainPost = (props) => {
  const mainArticles = RESP.ARTICLES_MAIN1.mainProjects;

  const project_list = useSelector((state) => state.articles.list);
  console.log(project_list);
  return (
    <React.Fragment>
      <Title>주목할 만한 프로젝트</Title>
      <PostBox>
        {mainArticles.map((a, i) => {
          return <Post key={i} {...a} />;
        })}
      </PostBox>
    </React.Fragment>
  );
};

const Title = styled.h3`
  display: flex;
  margin: 30px 0px 20px 0px;
`;

const PostBox = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 0px -6px;
`;

export default MainPost;
