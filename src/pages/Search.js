import React from "react";
import styled from "styled-components";
import { Footer, Header } from "../components";
import SearchPost from "../components/SearchPost";
import { Grid } from "../elements";

import QueryString from "qs";
import { useSelector, useDispatch } from "react-redux";
import { actionCreators as articlesActions } from "../redux/modules/articles";

const Search = (props) => {
  const dispatch = useDispatch();
  const search = decodeURI(props.location.search).split("=")[1];
  console.log(search);

  const searchList = useSelector((store) => store.articles.search_list);
  const allList = useSelector((store) => store.articles.all_list);
  console.log(allList);

  React.useEffect(() => {
    const flag = decodeURI(props.location.search).split("=")[0];
    console.log(flag);

    dispatch(articlesActions.allcategoryDB());

    if (flag === "?category") dispatch(articlesActions.categoryDB(search));
    else dispatch(articlesActions.searchDB(search));
  }, [search]);

  if (search === "전체") {
    return (
      <React.Fragment>
        <Header />
        <Container>
          <CateroryTitle>{search}</CateroryTitle>
          <ProjectCounter>
            <span>{allList ? allList.length : 0}</span>개의 프로젝트가 있습니다.
          </ProjectCounter>
          <PostBox>
            {allList
              ? allList.map((a, i) => {
                  return <SearchPost key={i} {...a} />;
                })
              : ""}
          </PostBox>
        </Container>
        <Footer />
      </React.Fragment>
    );
  }
  return (
    <React.Fragment>
      <Header />
      <Container>
        <CateroryTitle>{search}</CateroryTitle>
        <ProjectCounter>
          <span>{searchList ? searchList.length : 0}</span>개의 프로젝트가
          있습니다.
        </ProjectCounter>
        <PostBox>
          {searchList
            ? searchList.map((a, i) => {
                return <SearchPost key={i} {...a} />;
              })
            : ""}
        </PostBox>
      </Container>
      <Footer />
    </React.Fragment>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  justify-content: flex-start;
  width: 100%;
  max-width: 1160px;
  margin: 0px auto;
  padding: 50px 0px;
`;

const PostBox = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 0px -6px;
`;

const CateroryTitle = styled.div`
  font-weight: bold;
  font-size: 18px;
  line-height: 28px;
  margin-bottom: 10px;
`;

const ProjectCounter = styled.div`
  margin: 14px 0px 24px;
  font-size: 16px;
  line-height: 27px;
  span {
    color: rgb(255, 87, 87);
  }
  @media (max-width: 1080px) {
    font-size: 14px;
    line-height: 24px;
    margin: 14px 16px 24px;
  }
`;
export default Search;
