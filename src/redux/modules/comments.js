// 액션 만들어주는 것들
import { createAction, handleActions } from "redux-actions";
import { produce } from "immer";
import axios from "axios";

// actions
const SET_COMMENT = "SET_COMMENT";
const ADD_COMMENT = "ADD_COMMENT";

// action creators
const setComment = createAction(SET_COMMENT, (articleId, comments) => ({ articleId, comments }));
const addComment = createAction(ADD_COMMENT, (one_comment) => ({ one_comment }));

// initialState
const initialState = {
  comment_list: [
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
        // console.log('코멘트전체확인',res.data.comments);
        // 코멘트리스트 불러오기
        dispatch(setComment(articleId, res.data.comments));
      })
      .catch(function (error) {
        console.log(error);
      });
  };
};


// 리듀서
export default handleActions(
  {
    [SET_COMMENT]: (state, action) => produce(state, (draft) => {
      // console.log('코멘트 뜨나요', action.payload.comments)
      draft.comment_list[action.payload.articleId] = action.payload.comments;
      // console.log('set코멘트', draft.comment_list[action.payload.articleId]);
    }),

    [ADD_COMMENT]: (state, action) => produce(state, (draft) => {
      draft.comment_list.push(action.payload.one_comment);
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
