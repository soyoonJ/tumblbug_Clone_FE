// 액션 만들어주는 것들
import { createAction, handleActions } from "redux-actions";
import { produce } from "immer";
import axios from "axios";

// actions
const SET_COMMNET = "SET_COMMNET";
const ADD_COMMNET = "ADD_COMMNET";

// action creators
const setComment = createAction(SET_COMMNET, (comment) => ({ comment }));
const addComment = createAction(ADD_COMMNET, (one_comment) => ({ one_comment }))

// initialState
const initialState = {
  comments: [
    { 
    commentId :  "123456",
    articleId : "1",
    nickname : "댓글작성자1",
    comment: "1번작성자의 댓글내용입니다. 어떤 내용으로 채워질지~",
    email: "aaa@aaa.com",
  },
  { 
    commentId :  "987654321",
    articleId : "1",
    nickname : "댓글작성자2",
    comment: "2번작성자의 댓글내용입니다. 어떤 내용으로 채워질지~",
    email: "aaa@aaa.com",
  }
]
};


// 미들웨어
const getCommentDB = (articleId) => {
  return function (dispatch, getState, { history }) {
    axios
      .get(`http://3.35.176.155:8080/api/comments/${articleId}`)
      .then(function (res) {
        console.log(res);
        // 코멘트리스트 불러오기
        // dispatch(setComment(res.data));
      })
      .catch(function (error) {
        console.log(error);
      });
  };
};


// 리듀서
export default handleActions(
  {
    [SET_COMMNET]: (state, action) => produce(state, (draft) => {
      draft.comments = action.payload.comments;
      // console.log('set코멘트', draft.comments)''
    }),

    [ADD_COMMNET]: (state, action) => produce(state, (draft) => {
      draft.comments.push(action.payload.one_comment);
      // console.log('set코멘트', draft.comments)''
    }),

  },
  initialState
);

// action creator export
const actionCreators = {
  setComment,
  getCommentDB,
  addComment,
};

export { actionCreators };
