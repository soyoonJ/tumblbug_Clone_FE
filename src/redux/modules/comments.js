// 액션 만들어주는 것들
import { createAction, handleActions } from "redux-actions";
import { produce } from "immer";
import axios from "axios";

// actions
const SET_COMMNET = "SET_COMMNET";


// action creators
// const logIn = createAction(LOG_IN, (user)=> ({user}));
const setComment = createAction(SET_COMMNET, (comment_list) => ({ comment_list }));

// initialState
// defaultProps 같은 역할
const initialState = {
  // user: null,
  // is_login: false,
};


// 미들웨어
const getCommentDB = () => {
  return function (dispatch, getState, { history }) {};
};


// 리듀서
export default handleActions(
  {
    [SET_COMMNET]: (state, action) => produce(state, (draft) => {}),

  },
  initialState
);

// action creator export
const actionCreators = {
  setComment,
  getCommentDB,
};

export { actionCreators };
