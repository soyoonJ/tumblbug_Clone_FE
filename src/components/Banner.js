import React from "react";
import styled from "styled-components";
import { Grid, Text } from "../elements";
import { useSelector } from "react-redux";

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
              weight="300"
              size="14px"
              color="white"
              margin=" 0px 0px 80px 0px"
            >
              {props.banner_comment}
            </Text>
            <ButtonBox>
              <Circle>
                <svg viewBox="0 0 48 48">
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    fill="white"
                    d="M32.8912 45.3014L12 23.913L32.8912 2.52471C33.5866 1.8251 34.7804 1.8251 35.4777 2.52471C36.1741 3.22333 36.1741 4.42368 35.4777 5.22224L17.1731 23.913L35.4777 42.7018C36.1741 43.4024 36.1741 44.6018 35.4777 45.4013C35.0788 45.8011 34.6819 46 34.1845 46C33.7855 45.9011 33.2881 45.7002 32.8912 45.3014Z"
                  ></path>
                </svg>
              </Circle>
              <Circle>
                <svg viewBox="0 0 48 48">
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    fill="white"
                    d="M13.9071 46C13.4118 46 12.9164 45.8001 12.6192 45.4003C11.9257 44.7007 11.9257 43.5014 12.6192 42.7019L30.8493 24.0125L12.5201 5.22317C11.8266 4.52357 11.8266 3.32425 12.5201 2.5247C13.2136 1.8251 14.3034 1.8251 15.096 2.5247L36 24.0125L15.195 45.4003C14.7988 45.8001 14.3034 46 13.9071 46Z"
                  ></path>
                </svg>
              </Circle>
              <Cnt>
                {props.curcnt}/{props.cnt}
              </Cnt>
            </ButtonBox>
          </BannerComment>
        </Grid>
      </Container>
    </React.Fragment>
  );
};

Banner.defaultProps = {
  src: "https://d1ohqa58xvigdz.cloudfront.net/heroes/dreamroad.jpg?q=80&width=920&height=560&fit=crop",
  banner_title: "어젯밤 꿈은 무슨 뜻일까",
  banner_comment: "키워드에 감정,행동 조합해 입체적인 꿈 해몽서",
  cnt: 4,
  curcnt: 1,
};

const Container = styled.div`
  width: 100%;
  margin: 0;
`;

const BannerImage = styled.img`
  width: 460px;
`;

const BannerComment = styled.div`
  width: 306px;
  background-color: #8c3145;
  padding: 40px;
`;

const ButtonBox = styled.div`
  display: inline-flex;
  align-items: center;
`;

const Circle = styled.button`
  margin-right: 12px;
  width: 32px;
  height: 32px;
  border-radius: 32px;
  border: 1px solid white;
  background-color: transparent;
  cursor: pointer;

  svg {
    width: 12px;
    height: 12px;
    justify-content: center;
    align-items: center;
  }
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
