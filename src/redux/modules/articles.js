// 액션 만들어주는 것들
import { createAction, handleActions } from "redux-actions";
import { produce } from "immer";
import { apis } from "../../shared/api";

// actions
const GET_ARTICLES = "GET_ARTICLES";
// const GET_POULAR_ARTICLES = "GET_POULAR_ARTICLES";
// const DONATE = "DONATE";
// const SET_ONE = "SET_ONE";

// action creators
const getMainArticles = createAction(GET_ARTICLES, (articles) => ({
  articles,
}));
// const getPoularArticles = createAction(GET_POULAR_ARTICLES, (articles) => ({
//   articles,
// }));

// const setOne = createAction(SET_ONE, (one_list) => ({ one_list }));
// const donate = createAction(DONATE, (articleId, is_donate) => ({ articleId }));

// initialState
// defaultProps 같은 역할
const initialState = {
  list: [],
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

const getPoularArticlesDB = () => {
  return function (dispatch, getState, { history }) {};
};

// 리듀서
export default handleActions(
  {
    [GET_ARTICLES]: (state, action) =>
      produce(state, (draft) => {
        draft.list = action.payload.articles;
        console.log(draft.list);
      }),
  },
  initialState
);

// action creator export
const actionCreators = {
  getMainArticles,
  getMainArticlesDB,
  getPoularArticlesDB,
};

export { actionCreators };
