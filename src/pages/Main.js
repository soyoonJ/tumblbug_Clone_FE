import React from "react";
import styled from "styled-components";
import { Header, Banner, MainPost, SidePost } from "../components";
import { Grid } from "../elements";

const Main = (props) => {
  return (
    <React.Fragment>
      <Header />
      <Container>
        <Grid margin="0px 78px 0px 0px">
          <Banner />
          <MainPost />
        </Grid>
        <Grid>
          <SidePost />
        </Grid>
      </Container>
    </React.Fragment>
  );
};

const Container = styled.div`
  display: flex;
  position: relative;
  justify-content: flex-start;
  width: 100%;
  max-width: 1160px;
  margin: 0px auto;
  padding: 56px 0px;
`;

export default Main;
