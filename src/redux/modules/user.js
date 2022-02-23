// 액션 만들어주는 것들
import { createAction, handleActions } from 'redux-actions';
import { produce } from 'immer';
import { apis } from '../../shared/api';
import axios from 'axios';

import { useDispatch } from 'react-redux';

// actions
const SET_USER = 'SET_USER';
const LOG_OUT = 'LOG_OUT';

// action creators
const setUser = createAction(SET_USER, (user) => ({ user }));
const logOut = createAction(LOG_OUT, () => ({}));

// initialState
// defaultProps 같은 역할
const initialState = {
  user: { email: null, nickname: null },
  is_login: false,
};

// 로그인
const loginDB = (email, password) => {
  return function (dispatch, getState, { history }) {
    apis
      .login(email, password)
      .then((res) => {
        if (!res.data.result) {
          alert('회원정보가 올바르지 않습니다.');
          return;
        }
        localStorage.setItem('login-token', res.data.token);
        dispatch(setUser({ email }));
        window.location.replace('/');
      })
      .catch(function (error) {
        alert('아이디 또는 비밀번호를 확인해주세요.');
      });
  };
};

// 회원가입
const signupDB = (nickname, email, password) => {
  return function (dispatch, getState, { history }) {
    apis
      .signup(nickname, email, password)
      .then((res) => {
        if (!res.data.result) {
          alert('이미 존재하는 이메일입니다.');
          return;
        }
        history.replace('/');
      })
      .catch(function (error) {
        alert('이미 존재하는 이메일입니다.');
      });
  };
};

// 로그인 체크
const loginCheckDB = () => {
  return function (dispatch, getState, { history }) {
    apis.loginCheck().then((res) => {
      console.log(res);
      if (!res.data.result) {
        alert('회원정보가 올바르지 않습니다.');
        history.replace('/');
        return;
      }
      dispatch(setUser({ email: res.data.email, nickname: res.data.nickname }));
    });
  };
};

// 카카오 API
const getKakaoProfile = () => {
  return function (dispatch, getState, { history }) {
    window.Kakao.API.request({
      url: '/v2/user/me',
    })
      .then(function (res) {
        // console.log('코멘트전체확인',res.data.comments);
        // 코멘트리스트 불러오기
        const email = res.id;
        const nickname = res.properties.nickname;

        axios
          .post(`http://3.35.176.155:8080/api/users/loginKakao`, {
            email,
            nickname,
          })
          .then((res) => {
            // console.log('토큰내놔!!!!!!!!!!', res.data.token);
            if (!res.data.result) {
              alert('회원정보가 올바르지 않습니다.');
              return;
            }
            localStorage.setItem('login-token', res.data.token);
            dispatch(setUser({ email: email, nickname: nickname }));
            window.location.replace('/');
          });
      })

      .catch(function (error) {
        console.log(error);
      });
  };
};

// 리듀서
export default handleActions(
  {
    [SET_USER]: (state, action) =>
      produce(state, (draft) => {
        console.log('hi!!!!!!!!', action.payload.user);
        draft.user.email = action.payload.user.email;
        draft.user.nickname = action.payload.user.nickname;
        draft.is_login = true;
        console.log(
          'hi!!!!!!!!',
          draft.user.email,
          draft.user.nickname,
          draft.is_login
        );
      }),

    [LOG_OUT]: (state, action) =>
      produce(state, (draft) => {
        localStorage.removeItem('login-token');
        draft.user = null;
        draft.is_login = false;
      }),
  },
  initialState
);

// action creator export
const actionCreators = {
  loginDB,
  signupDB,
  loginCheckDB,
  logOut,

  getKakaoProfile,
};

export { actionCreators };
