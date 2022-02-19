import React from "react";
import styled from "styled-components";
import { Text } from "../elements";

const Post = (props) => {
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
      <PostCard>
        <PostImg src={image} />
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
        </PostContent>
        <Text bold size="13px" color="rgb(255, 87, 87)">
          {(totalAmount / targetAmount) * 100}%
        </Text>
      </PostCard>
    </React.Fragment>
  );
};

Post.defaultProps = {
  category: "푸드",
  nickname: "베러댄알콜",
  title: "[고소한 버터와 딸기잼의 만남, 샌드 쿠키 3종]",
  image:
    "https://tumblbug-pci.imgix.net/3ade3b098b2ff9e757bae3e290e4c4497f0c40f7/32efb6cbb58d802eff4474dd0a226465dac6d959/6a57b4916d6420ebb8b2c96ef8e397d939129943/5d29c128-2024-4ac1-b83a-8ed40ff0b819.jpeg?ixlib=rb-1.1.0&w=1240&h=930&auto=format%2Ccompress&lossless=true&fit=crop&s=d2b0a9a7e870a03a52e14730dc0071e9",
  targetAmount: 1000000,
  totalAmount: 10000,
  deadline: "2022-02-19",
};

const PostCard = styled.div`
  position: relative;
  width: 25%;
  padding: 0px 7px;
  margin-bottom: 40px;
`;

const PostImg = styled.img`
  width: 100%;
`;

const PostContent = styled.div`
  padding: 14px 0px 2px 0px;
  word-break: keep-all;
`;

export default Post;
