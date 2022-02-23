import React from "react";
import styled from "styled-components";
import { Text } from "../elements";

const Footer = (props) => {
  return (
    <React.Fragment>
      <Container>
        <FooterLink>
          <Links>
            <LinkColumnDiv>
              <LinkColumn>
                <Text weight="600" color="rgb(61 61 61)" size="16px">
                  텀블벅
                </Text>
                <A href="https://tumblbug.com/notices">공지사항</A>
                <A href="https://tumblbug-assets.s3.ap-northeast-1.amazonaws.com/service_pdf/%E1%84%90%E1%85%A5%E1%86%B7%E1%84%87%E1%85%B3%E1%86%AF%E1%84%87%E1%85%A5%E1%86%A8+%E1%84%89%E1%85%A5%E1%84%87%E1%85%B5%E1%84%89%E1%85%B3+%E1%84%89%E1%85%A9%E1%84%80%E1%85%A2%E1%84%89%E1%85%A5_211215.pdf">
                  서비스 소개
                </A>
                <A href="https://www.rocketpunch.com/companies/tumblbug/jobs">
                  채용
                </A>
                <A href="https://tumblbug.com/year2021">2021 연말결산</A>
              </LinkColumn>
              <LinkColumn style={{ minWidth: "160px" }}>
                <Text weight="600" color="rgb(61 61 61)" size="16px">
                  이용안내
                </Text>
                <A href="https://help.tumblbug.com/hc/ko">헬프 센터</A>
                <A href="https://tumblbug.com/onboarding">첫 후원 가이드</A>
                <A
                  style={{ color: "rgb(255, 87, 87)", fontWeight: "700" }}
                  href="https://creator.tumblbug.com/?v=1"
                >
                  창작자 가이드
                </A>
                <A href="https://creator.tumblbug.com/partnership/intro">
                  제휴·협력
                </A>
              </LinkColumn>
              <LinkColumn style={{ minWidth: "160px" }}>
                <Text weight="600" color="rgb(61 61 61)" size="16px">
                  정책
                </Text>
                <A href="https://help.tumblbug.com/hc/ko/articles/360051940533?v=1">
                  이용약관
                </A>
                <A
                  style={{ fontWeight: "700", color: "rgb(61 61 61)" }}
                  href="https://help.tumblbug.com/hc/ko/articles/360051944893"
                >
                  개인정보 처리방침
                </A>
                <A href="https://help.tumblbug.com/hc/ko/articles/360051944893">
                  프로젝트 심사기준
                </A>
              </LinkColumn>
            </LinkColumnDiv>
            <AppColumnDiv>
              <Text weight="600" color="rgb(61 61 61)" size="16px">
                App
              </Text>
              <AppButton href="https://play.google.com/store/apps/details?id=com.tumblbug.app&_branch_match_id=1015570889498598110&utm_source=tumblbug&utm_campaign=appstore&utm_medium=footer&_branch_referrer=H4sIAAAAAAAAA8soKSkottLXLynNTcpJKk3XSywo0MvJzMvWT%2FSKjLBw9vesSE8CAHiTKfQlAAAA">
                안드로이드
              </AppButton>
              <AppButton href="https://apps.apple.com/us/app/%ED%85%80%EB%B8%94%EB%B2%85-tumblbug/id1544593286?_branch_match_id=1015570889498598110&utm_source=tumblbug&utm_campaign=appstore&utm_medium=footer&_branch_referrer=H4sIAAAAAAAAA8soKSkottLXLynNTcpJKk3XSywo0MvJzMvWL%2FNwTnXOLPesSE8CAIhNPoklAAAA">
                iOS
              </AppButton>
            </AppColumnDiv>
          </Links>
          <Customer>
            <Text weight="600" color="rgb(61 61 61)" size="16px">
              고객지원
            </Text>
            <Text
              size="12px"
              margin="12px 0px 0px 0px"
              color="rgb(109, 109, 109)"
            >
              평일 10:00 ~ 17:00 (12:00 ~14:00 제외)
            </Text>
            <CsButton>텀블벅에 문의</CsButton>
          </Customer>
        </FooterLink>
        <FooterCompany>
          <Company>
            <CompanyItem>
              <strong>프로젝트명</strong>
              <span>항해99 5기 6조 텀블벅 클론코딩</span>
            </CompanyItem>
            <CompanyItem>
              <strong>프론트엔드</strong>
              <span>박수민, 정소윤, 구미리</span>
            </CompanyItem>
            <CompanyItem>
              <strong>백엔드</strong>
              <span>나기탁, 장창훈</span>
            </CompanyItem>
          </Company>
        </FooterCompany>
        <FooterNotify>
          <Notify>
            해당 사이트는 항해99 5기 6조의 텀블벅 클론코딩 사이트입니다.
            프로젝트의 실제 후원은 텀블벅 사이트를 이용해주시기 바랍니다.
            <NotifyA href="https://tumblbug.com/">텀블벅 바로가기</NotifyA>
          </Notify>
        </FooterNotify>
      </Container>
    </React.Fragment>
  );
};

const Container = styled.div`
  width: 100%;
  position: relative;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-top: 1px solid rgb(239, 239, 239);
`;

const FooterLink = styled.div`
  width: 1160px;
  display: flex;
  justify-content: space-between;
  padding: 0px 16px;
  padding-bottom: 20px;
  border-bottom: 1px solid rgb(239, 239, 239);
`;

const Links = styled.div`
  width: 1160px;
  display: flex;
  flex-direction: row;
`;

const LinkColumnDiv = styled.div`
  display: flex;
  margin-top: 0px;
  flex-wrap: nowrap;
`;

const LinkColumn = styled.div`
  width: 100%;
  height: 100%;
  min-width: 122px;
  display: flex;
  flex-direction: column;
  margin-top: 24px;
`;

const A = styled.a`
  margin-top: 12px;
  color: rgb(109 109 109);
  font-weight: 500;
  font-size: 14px;
  line-height: 22px;
  text-decoration: none;
  cursor: pointer;

  transition: all 0.3s ease-in-out 0s;
  :hover {
    color: rgb(61 61 61);
    font-weight: 700;
  }
`;

const AppColumnDiv = styled(LinkColumn)``;

const AppButton = styled.a`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 4px;
  background-color: rgb(240 240 240);
  width: 140px;
  height: 32px;
  margin: 10px 10px 0px 0px;
  font-size: 14px;
  font-weight: 500;
  color: rgb(109 109 109);
  text-decoration: none;
  transition: all 0.3s ease-in-out 0s;
  cursor: pointer;

  :hover {
    color: rgb(61 61 61);
  }
`;

const Customer = styled.div`
  min-width: 200px;
  display: flex;
  flex-direction: column;
  margin-top: 24px;
  letter-spacing: -0.005em;
`;

const CsButton = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 4px;
  border: 1px solid rgb(228, 228, 228);
  background-color: transparent;
  width: 180px;
  height: 36px;
  margin-top: 10px;
  font-size: 14px;
  font-weight: 500;
  color: rgb(61 61 61);
  text-decoration: none;
  transition: all 0.3s ease-in-out 0s;
  cursor: pointer;

  :hover {
    border: 1px solid rgb(61 61 61);
  }
`;

const FooterCompany = styled.div`
  width: 1160px;
  display: flex;
  justify-content: space-between;
  padding: 20px 16px 25px;
  border-bottom: 1px solid rgb(239, 239, 239);
  font-size: 13px;
`;

const Company = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  align-content: flex-start;
`;

const CompanyItem = styled.div`
  strong {
    margin: 0px 5px 0px 0px;
    color: rgb(61, 61, 61);
  }

  span {
    margin: 0px 8px 0px 0px;
    color: rgb(109, 109, 109);
  }
`;

const FooterNotify = styled.div`
  width: 100%;
  display: flex;
  min-height: 56px;
  justify-content: center;
  align-items: center;
  background: rgb(240, 240, 240);
`;

const Notify = styled.div`
  width: 1160px;
  display: flex;
  padding: 10px 16px;
  font-size: 12px;
  color: rgb(109, 109, 109);
`;

const NotifyA = styled.a`
  color: rgb(109 109 109);
  cursor: pointer;
  font-size: 12px;
`;
export default Footer;
