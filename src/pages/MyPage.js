import React from "react";
import MyProfile from "../components/MyProfile";
import { Footer, Header } from "../components";

const MyPage = () => {
  return (
    <React.Fragment>
      <Header />
      <MyProfile />
      <Footer />
    </React.Fragment>
  );
};

export default MyPage;
