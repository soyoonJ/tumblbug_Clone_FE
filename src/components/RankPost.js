import React from "react";
import styled from "styled-components";
import { Text, Grid } from "../elements";

const RankPost = (props) => {
  const {
    category,
    nickname,
    image,
    title,
    targetAmount,
    totalAmount,
    deadline,
  } = props;

  return (
    <React.Fragment>
      <SidePostCard>
        <PostImg src={image} />
        <Rank>1</Rank>
        <PostContent>
          <Text
            size="11px"
            color="rgb(109, 109, 109)"
            padding="0px 0px 2px 0px"
          >
            {category} ㅣ {nickname}
          </Text>
          <Text bold size="14px">
            {title}
          </Text>
          <Text bold size="13px" color="rgb(255, 87, 87)" padding="2px">
            {(totalAmount / targetAmount) * 100}%
          </Text>
        </PostContent>
      </SidePostCard>
    </React.Fragment>
  );
};

RankPost.defaultProps = {
  category: "푸드",
  nickname: "베러댄알콜",
  title: "[고소한 버터와 딸기잼의 만남, 샌드 쿠키 3종]",
  image:
    "https://tumblbug-pci.imgix.net/932499bdfd401c73ae81db5270ea5a8a834f7a87/00e0280cfcd37839d70cce63ea3c89360ef59af5/f2f822b0d93b98c4f50801a243776ffcc18e55cd/224c8b53-8589-4d04-be03-a8b2e4c0b83b.jpeg?ixlib=rb-1.1.0&w=1240&h=930&auto=format%2Ccompress&lossless=true&fit=crop&s=e0ed2c1f02c2bdff4ecf7f21d8f366e6",
  targetAmount: 1000000,
  totalAmount: 10000,
  deadline: "2022-02-19",
};

const SidePostCard = styled.div`
  display: flex;
  align-items: flex-start;
  width: 100%;
  height: 100%;
`;

const PostImg = styled.img`
  width: 108px;
  background-position-x: center;
  background-position-y: center;
  background-size: cover;
`;

const Rank = styled.div`
  width: 43px;
  display: flex;
  flex: 0 0 auto;
  align-items: center;
  justify-content: center;
  color: rgb(240 80 62 / 90%);
  font-size: 16px;
  font-weight: 700;
  line-height: 24px;
`;

const PostContent = styled.div`
  display: flex;
  flex-direction: column;
  word-break: keep-all;
  margin-bottom: 12px;
`;

export default RankPost;
