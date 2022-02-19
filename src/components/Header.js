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
  box-sizing: border-box;
  box-shadow: rgb(0 0 0 / 8%) 0px 2px 4px;
`;

export default Header;
