import React from "react";
import styled from "styled-components";
import Banner from "../components/Banner";
import MainPost from "../components/MainPost";
import { Grid } from "../elements";

const Main = (props) => {
  return (
    <React.Fragment>
      <Container>
        <Grid>
          <Banner />
          <MainPost />
        </Grid>
      </Container>
    </React.Fragment>
  );
};

const Container = styled.div`
  padding: 50px 12%;
  display: grid;
`;

export default Main;
