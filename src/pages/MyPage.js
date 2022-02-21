import React from 'react';
import MyProfile from '../components/MyProfile';
import { Header } from '../components';

const MyPage = () => {
  return (
    <React.Fragment>
      <Header />
      <MyProfile />
    </React.Fragment>
  );
};

export default MyPage;
