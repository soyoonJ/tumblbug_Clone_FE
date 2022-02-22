import React from "react";
import RankPost from "./RankPost";
import styled from "styled-components";
import { Text } from "../elements";
import { useSelector, useDispatch } from "react-redux";
import { actionCreators as articlesActions } from "../redux/modules/articles";

const SidePost = (props) => {
  const dispatch = useDispatch();

  const popular_project_list = useSelector((state) => state.articles.Plist);
  // console.log(popular_project_list);

  React.useEffect(() => {
    dispatch(articlesActions.getPopularArticlesDB());
  }, []);

  let today = new Date();
  let year = today.getFullYear().toString().slice(-2);
  let month = ("0" + (today.getMonth() + 1)).slice(-2);
  let day = ("0" + today.getDate()).slice(-2);
  let hours = ("0" + today.getHours()).slice(-2);
  let minutes = ("0" + today.getMinutes()).slice(-2);

  let date = year + "." + month + "." + day + " " + hours + ":" + minutes;
  return (
    <React.Fragment>
      <SidePostTitle>인기 프로젝트</SidePostTitle>
      <Text color="rgb(109 109 109)" margin="2px 0px 22px 0px" size="12px">
        {date} 기준
      </Text>
      <PostBox>
        {popular_project_list.map((a, i) => {
          if (i < 8) {
            return <RankPost key={i} {...a} />;
          }
        })}
      </PostBox>
    </React.Fragment>
  );
};

const SidePostTitle = styled.h3`
  display: flex;
  justify-content: flex-start;
  font-size: 20px;
  line-height: 29px;
`;

const PostBox = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

export default SidePost;
