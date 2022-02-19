import React from "react";

import NaviTop from "./NaviTop";
import NaviBottom from "./NaviBottom";
import styled from "styled-components";

const Header = (props) => {
  return (
    <React.Fragment>
      <HeaderBox>
        <NaviTop />
        <NaviBottom />
      </HeaderBox>
    </React.Fragment>
  );
};

const HeaderBox = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  box-sizing: border-box;
  box-shadow: rgb(0 0 0 / 8%) 0px 2px 4px;
  padding: 0px 20px;
`;

export default Header;
