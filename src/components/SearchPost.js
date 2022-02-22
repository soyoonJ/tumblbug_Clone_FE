import React from "react";
import styled from "styled-components";
import { Grid } from "../elements";

const Post = (props) => {
  const {
    category,
    nickname,
    image,
    title,
    targetAmount,
    totalAmount,
    contents,
  } = props;

  //달성률구하기
  const rate = Math.floor((totalAmount / targetAmount) * 100);

  return (
    <React.Fragment>
      <PostCard>
        <PostImg src={image} />
        <PostContent>
          <Grid padding="0px 0px 2px">
            <A href="#">{category}</A>
            <Span>ㅣ</Span>
            <A href="#">{nickname}</A>
          </Grid>
          <Grid margin="0 0 8px">
            <Title>{title}</Title>
          </Grid>
          <Content>{contents}</Content>
        </PostContent>
        <Rate>{rate}%</Rate>
      </PostCard>
    </React.Fragment>
  );
};

const PostCard = styled.div`
  position: relative;
  width: 352px;
  padding: 0px 12px;
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
  font-size: 16px;
  font-weight: 700;
  letter-spacing: -0.005em;
  line-height: 22px;
  text-decoration: none;
  cursor: pointer;

  :hover {
    text-decoration: underline;
  }
`;

const Content = styled.p`
  width: 93%;
  font-size: 13px;
  color: #9e9e9e;
  line-height: 21x;
  word-break: keep-all;
  overflow: hidden;
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
  margin: 0 0 14px;
`;

export default Post;
