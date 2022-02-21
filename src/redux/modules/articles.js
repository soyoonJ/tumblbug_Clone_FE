// 액션 만들어주는 것들
import { createAction, handleActions } from 'redux-actions';
import { produce } from 'immer';
import axios from 'axios';

// import { api } from "../../shared/api";

// actions
const GET_MAIN_ARTICLES = 'GET_MAIN_ARTICLES';
const GET_POULAR_ARTICLES = 'GET_POULAR_ARTICLES';
const SET_ONE = 'SET_ONE';
// const WANT_DONATE = 'WANT_DONATE';
// const CANCEL_DONATE = 'CANCEL_DONATE';

// action creators
// const logIn = createAction(LOG_IN, (user)=> ({user}));
const getMainArticles = createAction(GET_MAIN_ARTICLES, (articles) => ({
  articles,
}));
const getPoularArticles = createAction(GET_POULAR_ARTICLES, (articles) => ({
  articles,
}));
const setOne = createAction(SET_ONE, (one_list) => ({ one_list }));
// const wantDonate = createAction(WANT_DONATE, (articleId) => ({ articleId }))
// const cancelDonate = createAction(CANCEL_DONATE, (articleId) => ({ articleId }))

// initialState
// defaultProps 같은 역할
const initialState = {
  list: [],
  is_donate: [],
  one_list: {
    donatorNum: 1,
    detailedProjects: {
      category: '카테고리',
      nickname: '닉네임',
      title: '타이틀',
      image:
        'https://tumblbug-pci.imgix.net/932499bdfd401c73ae81db5270ea5a8a834f7a87/00e0280cfcd37839d70cce63ea3c89360ef59af5/f2f822b0d93b98c4f50801a243776ffcc18e55cd/224c8b53-8589-4d04-be03-a8b2e4c0b83b.jpeg?ixlib=rb-1.1.0&w=1240&h=930&auto=format%2Ccompress&lossless=true&fit=crop&s=e0ed2c1f02c2bdff4ecf7f21d8f366e6',
      targetAmount: 100000,
      totalAmount: 50000,
      deadline: '1',
      contents:
        'contents 내용을 써볼거예요. 예뻤으면 좋겠는데 어떻게 될지 궁금하네요 contents 내용을 써볼거예요. 예뻤으면 좋겠는데 어떻게 될지 궁금하네요 contents 내용을 써볼거예요. 예뻤으면 좋겠는데 어떻게 될지 궁금하네요 contents 내용을 써볼거예요. 예뻤으면 좋겠는데 어떻게 될지 궁금하네요',
    },
  },
};

const initialArticles = {
  category: '향수·뷰티',
  nickname: '유저로프트하우스 케미스트',
  title: '발트해의 태양과 바람, 신비로운 5월의 여왕 <미드솜마르>',
  image:
    'https://tumblbug-pci.imgix.net/65ad363adfe9e6e9f8f7479e8bf05c9db58fe5da/7d5e7d09142907e8f7e23da40ce8bc2e3cf13daf/7a6660ad741ebdc45e2a06a662b33ef910a46f0e/9bed4237-201a-4806-898c-19bec6afa9ca.jpeg?ixlib=rb-1.1.0&w=1240&h=930&auto=format%2Ccompress&lossless=true&fit=crop&s=c83e15c1546fdd3d4ff9675e28196574',
  targetAmount: 500000,
  totalAmount: 23748000,
  deadline: '2022-03-07',
  contents:
    '화관을 쓰고 첫 수확한 여름 딸기를 먹으며 백야의 축제를 즐길 거예요. 마법과 함께.',
};

//주목할 만한 프로젝트
const getMainArticlesDB = () => {
  return function (dispatch, getState, { history }) {
    // api.then(function (res) {
    //   dispatch(getMainArticles(res.data.articles));
    // });
  };
};

const getPoularArticlesDB = () => {
  return function (dispatch, getState, { history }) {};
};

// loginCheck 완료되면 가능
// const donateDB = (articleId) => {
//   return function (dispatch, getState, { history }) {
//     axios
//       .patch(`http://3.35.176.155:8080/api/article/${articleId}/donation`,
//       {
//         headers: {
//         Authorization: `Bearer ${localStorage.getItem('login-token')}`,
//         },
//     })
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
//     axios
//       .patch(`http://3.35.176.155:8080/api/article/${articleId}/donationCancel`,{
//         headers: {
//         Authorization: `Bearer ${localStorage.getItem("login-token")}`,
//         },
//     })
//       .then(function (res) {
//         console.log(res);
//         // dispatch(cancelDonate(articleId));
//       })
//       .catch(function (error) {
//         console.log(error);
//       });
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
        draft.list = action.payload.articles;
        console.log(draft.list);
      }),

    [GET_POULAR_ARTICLES]: (state, action) =>
      produce(state, (draft) => {
        draft.list = action.payload.articles;
        console.log(draft.list);
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
  getPoularArticles,
  getMainArticlesDB,
  getPoularArticlesDB,

  setOne,
  getOneDB,
  // wantDonate,
  // donateDB,
  // cancelDonate,
  // notDonateDB,
};

export { actionCreators };
