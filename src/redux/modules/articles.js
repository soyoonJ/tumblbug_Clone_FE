// 액션 만들어주는 것들
import { createAction, handleActions } from "redux-actions";
import { produce } from "immer";
import { apis } from "../../shared/api";
import axios from "axios";

// actions
const GET_MAIN_ARTICLES = "GET_ARTICLES";
const GET_POPULAR_ARTICLES = "GET_POPULAR_ARTICLES";
const SET_ONE = "SET_ONE";
// const WANT_DONATE = "WANT_DONATE";
// const CANCEL_DONATE = "CANCEL_DONATE";

// action creators
const getMainArticles = createAction(GET_MAIN_ARTICLES, (articles) => ({
  articles,
}));
const getPopularArticles = createAction(GET_POPULAR_ARTICLES, (articles) => ({
  articles,
}));

const setOne = createAction(SET_ONE, (one_list) => ({
  one_list,
}));
// const wantDonate = createAction(WANT_DONATE, (articleId) => ({ articleId }))
// const cancelDonate = createAction(CANCEL_DONATE, (articleId) => ({ articleId }))

// initialState
// defaultProps 같은 역할
const initialState = {
  Mlist: [],
  Plist: [],
};

//주목할 만한 프로젝트
const getMainArticlesDB = () => {
  return function (dispatch, getState, { history }) {
    apis
      .mainAriticles()
      .then(function (res) {
        dispatch(getMainArticles(res.data.mainProjects));
      })
      .catch((error) => {
        console.error(error);
      });
  };
};

//인기 프로젝트
const getPopularArticlesDB = () => {
  return function (dispatch, getState, { history }) {
    apis
      .popularAriticles()
      .then(function (res) {
        dispatch(getPopularArticles(res.data.popularProjects));
      })
      .catch((error) => {
        console.error(error);
      });
  };
};

// loginCheck 완료되면 가능
// const donateDB = (articleId) => {
//   return function (dispatch, getState, { history }) {
//     axios
//       .patch(`http://3.35.176.155:8080/api/article/${articleId}/donation`,
//   {
//     headers: {
//     Authorization: `Bearer ${localStorage.getItem('login-token')}`,
//     },
// })
//       .then(function (res) {
//         console.log('도네이트',res);
//         // dispatch(wantDonate(articleId));
//       })
//       .catch(function (error) {
//         console.log(error);
//       });
//   };
// };

// const notDonateDB = (articleId) => {
//   return function (dispatch, getState, { history }) {
// axios
//   .patch(`http://3.35.176.155:8080/api/article/${articleId}/donationCancel`,{
//     headers: {
//     Authorization: `Bearer ${localStorage.getItem("login-token")}`,
//     },
// })
//   .then(function (res) {
//     console.log(res);
//     // dispatch(cancelDonate(articleId));
//   })
//   .catch(function (error) {
//     console.log(error);
//   });
//   };
// };

// articleId 샘플 - 21
const getOneDB = (articleId) => {
  return function (dispatch, getState, { history }) {
    axios
      .get(`http://3.35.176.155:8080/api/article/${articleId}`)
      .then(function (res) {
        console.log(res);
        dispatch(setOne(res.data));
      })
      .catch(function (error) {
        console.log(error);
      });
  };
};

// 리듀서
export default handleActions(
  {
    [GET_MAIN_ARTICLES]: (state, action) =>
      produce(state, (draft) => {
        draft.Mlist = action.payload.articles;
      }),

    [GET_POPULAR_ARTICLES]: (state, action) =>
      produce(state, (draft) => {
        draft.Plist = action.payload.articles;
      }),

    [SET_ONE]: (state, action) =>
      produce(state, (draft) => {
        draft.one_list = action.payload.one_list;
      }),

    // [WANT_DONATE]: (state, action) =>
    // produce(state, (draft) => {
    //   draft.is_donate[action.payload.articleId] = true;
    // }),

    // [CANCEL_DONATE]: (state, action) =>
    // produce(state, (draft) => {
    //   draft.is_donate[action.payload.articleId] = false;
    // }),
  },
  initialState
);

// action creator export
const actionCreators = {
  getMainArticles,
  getMainArticlesDB,
  getPopularArticles,
  getPopularArticlesDB,

  setOne,
  getOneDB,
  // wantDonate,
  // donateDB,
  // cancelDonate,
  // notDonateDB,
};

export { actionCreators };
