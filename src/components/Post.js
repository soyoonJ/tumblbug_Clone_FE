import React from "react";
import styled from "styled-components";
import { Grid } from "../elements";
import { history } from "../redux/configureStore";

const Post = (props) => {
  const {
    articleId,
    category,
    nickname,
    image,
    title,
    targetAmount,
    totalAmount,
  } = props;

  //달성률구하기
  const rate = Math.floor((totalAmount / targetAmount) * 100);

  return (
    <React.Fragment>
      <PostCard>
        <PostImg
          src={image}
          onClick={() => {
            history.push(`/post/${articleId}`);
          }}
        />
        <PostContent>
          <Grid padding="0px 0px 2px">
            <A
              onClick={() => {
                history.push(`/post/${articleId}`);
              }}
            >
              {category}
            </A>
            <Span>ㅣ</Span>
            <A>{nickname}</A>
          </Grid>
          <Title
            onClick={() => {
              history.push(`/post/${articleId}`);
            }}
          >
            {title}
          </Title>
        </PostContent>
        <Rate>{rate}%</Rate>
      </PostCard>
    </React.Fragment>
  );
};

const PostCard = styled.div`
  position: relative;
  width: 25%;
  padding: 0px 7px;
  margin-bottom: 40px;
`;

const PostImg = styled.img`
  position: relative;
  width: 100%;
  cursor: pointer;
`;

const A = styled.a`
  font-size: 11.5px;
  color: rgb(109 109 109);
  letter-spacing: -0.005em;
  /* line-height: 16px; */
  text-decoration: none;

  :hover {
    text-decoration: underline;
  }
`;

const Span = styled.span`
  font-size: 11px;
  color: rgb(109, 109, 109);
`;

const Title = styled.a`
  font-size: 14px;
  font-weight: 700;
  letter-spacing: -0.005em;
  line-height: 20px;
  text-decoration: none;
  cursor: pointer;

  :hover {
    text-decoration: underline;
  }
`;

const Rate = styled.p`
  font-size: 13px;
  font-weight: 600;
  padding-top: 2px;
  color: rgb(255, 87, 87);
  letter-spacing: -0.005em;
  line-height: 20px;
`;

const PostContent = styled.div`
  padding: 10px 0px 2px 0px;
  word-break: keep-all;
`;

export default Post;
