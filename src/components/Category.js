import React from "react";
import styled from "styled-components";

import { history } from "../redux/configureStore";

const Category = (props) => {
  return (
    <>
      <CategoryBox>
        <CateDiv>
          <Image>
            <svg
              width="48"
              height="48"
              viewBox="0 0 48 48"
              fill="#1C1C1C"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect x="9" y="11" width="30" height="4"></rect>
              <rect x="9" y="22" width="30" height="4"></rect>
              <rect x="9" y="33" width="30" height="4"></rect>
            </svg>
          </Image>
          카테고리
        </CateDiv>
        <CategoryList>
          <Full
            onClick={() => {
              history.push(`/discover?all=전체`);
            }}
          >
            <CateDiv>
              <CateImage>
                <svg
                  width="40"
                  height="40"
                  viewBox="0 0 40 40"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M16.4 9.6H9.6V16.4H16.4V9.6ZM8 8V18H18V8H8Z"
                    fill="#0D0D0D"
                  ></path>
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M28.4 9.6H21.6V16.4H28.4V9.6ZM20 8V18H30V8H20Z"
                    fill="#0D0D0D"
                  ></path>
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M16.4 21.6H9.6V28.4H16.4V21.6ZM8 20V30H18V20H8Z"
                    fill="#0D0D0D"
                  ></path>
                  <path d="M20 20H30V30H20V20Z" fill="#FF5757"></path>
                </svg>
              </CateImage>
              전체
            </CateDiv>
          </Full>
          <Li
            onClick={() => {
              history.push(`/discover?category=디자인 문구`);
            }}
          >
            <CateDiv>
              <img
                src="https://tumblbug-assets.imgix.net/categories/svg/stationary.svg"
                width="40px"
                height="40px"
                alt="디자인문구"
              />
              디자인문구
            </CateDiv>
          </Li>
          <Li
            onClick={() => {
              history.push(`/discover?category=캐릭터 굿즈`);
            }}
          >
            <CateDiv>
              <img
                src="https://tumblbug-assets.imgix.net/categories/svg/charactor-goods.svg"
                width="40px"
                height="40px"
                alt="캐릭터·굿즈"
              />
              캐릭터·굿즈
            </CateDiv>
          </Li>
          <Li
            onClick={() => {
              history.push(`/discover?category=푸드`);
            }}
          >
            <CateDiv>
              <img
                src="https://tumblbug-assets.imgix.net/categories/svg/food.svg"
                width="40px"
                height="40px"
                alt="푸드"
              />
              푸드
            </CateDiv>
          </Li>
          <Li
            onClick={() => {
              history.push(`/discover?category=향수 · 뷰티`);
            }}
          >
            <CateDiv>
              <img
                src="https://tumblbug-assets.imgix.net/categories/svg/perfumes-cosmetics.svg"
                width="40px"
                height="40px"
                alt="향수·뷰티"
              />
              향수·뷰티
            </CateDiv>
          </Li>
          <Li
            onClick={() => {
              history.push(`/discover?category=음악`);
            }}
          >
            <CateDiv>
              <img
                src="https://tumblbug-assets.imgix.net/categories/svg/music.svg"
                width="40px"
                height="40px"
                alt="음악"
              />
              음악
            </CateDiv>
          </Li>
        </CategoryList>
      </CategoryBox>
    </>
  );
};

const CategoryBox = styled.ul`
  z-index: 99;

  font-weight: 600;
  line-height: 50px;
  font-size: 15px;
  cursor: pointer;

  &:hover {
    svg {
      fill: rgb(255, 87, 87);
    }
    color: rgb(255, 87, 87);
    Li {
      padding: 40px 0px 30px;
      display: block;
    }
  }
`;

const CategoryList = styled.div`
  overflow: hidden;
  position: relative;
  display: flex;
  justify-content: space-between;
  flex-flow: row wrap;
  color: rgb(61 61 61);
`;

const Full = styled.li`
  display: none;
  cursor: pointer;
  font-size: 13px;
  color: rgb(61, 61, 61);
`;

const Li = styled.li`
  display: none;
  cursor: pointer;
  font-size: 13px;
  font-weight: 400;
  color: rgb(61, 61, 61);
`;

const Image = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 24px;
  height: 24px;
  margin-right: 10px;
  box-sizing: border-box;
`;

const CateDiv = styled.div`
  display: flex;
  align-items: center;
`;

const CateImage = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  margin-right: 5px;
  box-sizing: border-box;
`;

export default Category;
