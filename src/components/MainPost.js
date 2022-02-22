import React from "react";

import styled from "styled-components";
import Post from "./Post";
import { useSelector, useDispatch } from "react-redux";
import { actionCreators as articlesActions } from "../redux/modules/articles";

const MainPost = (props) => {
  const dispatch = useDispatch();

  const main_project_list = useSelector((state) => state.articles.Mlist);
  // console.log(main_project_list);

  React.useEffect(() => {
    dispatch(articlesActions.getMainArticlesDB());
  }, []);

  return (
    <React.Fragment>
      <Title>주목할 만한 프로젝트</Title>
      <PostBox>
        {main_project_list.map((a, i) => {
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
