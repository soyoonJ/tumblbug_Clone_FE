import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ConnectedRouter } from 'connected-react-router';
import { history } from '../redux/configureStore';
// import { useDispatch, useSelector } from 'react-redux';

import React from 'react';

import Main from '../pages/Main';
import Login from '../pages/Login';
import Signup from '../pages/Signup';
import PostDetail from '../pages/PostDetail';
import MyPage from '../pages/MyPage';

import './App.css';

function App() {
  // const article = useSelector((state) => state.articles.one_list)
  // console.log('아티클',article)

  return (
    <React.Fragment>
      <ConnectedRouter history={history}>
        <Route path="/" exact component={Main}></Route>
        <Route path="/login" exact component={Login}></Route>
        <Route path="/signup" exact component={Signup}></Route>
        <Route path="/post/:id" exact component={PostDetail}></Route>
        <Route path="/user/:userid" exact component={MyPage}></Route>
      </ConnectedRouter>
    </React.Fragment>
  );
}

export default App;
