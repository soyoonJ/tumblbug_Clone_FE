import React from "react";
import styled from "styled-components";
import { Grid, Text } from "../elements";

const Banner = (props) => {
  return (
    <React.Fragment>
      <Container>
        <Grid is_row>
          <BannerImage src={props.src} />
          <BannerComment>
            <Text
              weight="600"
              size="22px"
              color="white"
              wordBreak
              margin=" 0px 0px 10px 0px"
            >
              {props.banner_title}
            </Text>
            <Text
              weight="600"
              size="14px"
              color="white"
              margin=" 0px 0px 10px 0px"
            >
              {props.banner_comment}
            </Text>
            <Cnt>
              {props.curcnt}/{props.cnt}
            </Cnt>
          </BannerComment>
        </Grid>
      </Container>
    </React.Fragment>
  );
};

Banner.defaultProps = {
  src: "https://d1ohqa58xvigdz.cloudfront.net/heroes/eutbag2nd-1.png?q=80&width=920&height=560&fit=crop",
  banner_title: "잊혀진 한국 신화와 영웅이 깃든 타로",
  banner_comment: "탄탄한 스토리와 수려한 일러스트, 만신 타로카드2",
  cnt: 4,
  curcnt: 1,
};

const Container = styled.div`
  width: 100%;
`;

const BannerImage = styled.img`
  width: 460px;
`;

const BannerComment = styled.div`
  width: 306px;
  background-color: #863d5e;
  padding: 40px;
`;

const Cnt = styled.div`
  box-sizing: border-box;
  width: 40px;
  padding: 2px 10px;
  border-radius: 10px;
  background-color: rgba(13, 13, 13, 0.2);
  color: white;
  font-size: 12px;
  text-align: center;
`;

export default Banner;
