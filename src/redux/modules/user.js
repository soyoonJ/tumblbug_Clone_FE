// 액션 만들어주는 것들
import { createAction, handleActions } from 'redux-actions';
import { produce } from 'immer';
import { apis } from '../../shared/api';

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
    apis.login(email, password).then((res) => {
      if (!res.data.result) {
        alert('회원정보가 올바르지 않습니다.');
        history.replace('/');
        return;
      }
      localStorage.setItem('login-token', res.data.token);
      dispatch(setUser({ email }));
      window.location.replace('/');
    });
  };
};

// 회원가입
const signupDB = (nickname, email, password) => {
  return function (dispatch, getState, { history }) {
    apis.signup(nickname, email, password).then((res) => {
      if (!res.data.result) {
        return;
      }
      history.replace('/');
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

// 리듀서
export default handleActions(
  {
    [SET_USER]: (state, action) =>
      produce(state, (draft) => {
        console.log(action.payload.user);
        draft.user.email = action.payload.user.email;
        draft.user.nickname = action.payload.user.nickname;
        draft.is_login = true;
        console.log(draft.user.email, draft.user.nickname, draft.is_login);
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
};

export { actionCreators };
