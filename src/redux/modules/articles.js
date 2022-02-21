// 액션 만들어주는 것들
import { createAction, handleActions } from "redux-actions";
import { produce } from "immer";
import axios from "axios";

// actions
const LOG_OUT = "LOG_OUT";
const GET_USER = "GET_USER";
const SET_ONE = "SET_ONE";
const DONATE = "DONATE";

// action creators
// const logIn = createAction(LOG_IN, (user)=> ({user}));
const logOut = createAction(LOG_OUT, (user) => ({ user }));
const getUser = createAction(GET_USER, (user) => ({ user }));

const setOne = createAction(SET_ONE, (one_list) => ({ one_list }));
const donate = createAction(DONATE, (is_donate) => ({ is_donate }));

// initialState
// defaultProps 같은 역할
const initialState = {
  // user: null,
  is_donate: [],
  one_list: {
      donatorNum:1,
      detailedProjects: {
        category:"카테고리",
        nickname:"닉네임",
        title:"타이틀",
        image:"https://tumblbug-pci.imgix.net/932499bdfd401c73ae81db5270ea5a8a834f7a87/00e0280cfcd37839d70cce63ea3c89360ef59af5/f2f822b0d93b98c4f50801a243776ffcc18e55cd/224c8b53-8589-4d04-be03-a8b2e4c0b83b.jpeg?ixlib=rb-1.1.0&w=1240&h=930&auto=format%2Ccompress&lossless=true&fit=crop&s=e0ed2c1f02c2bdff4ecf7f21d8f366e6",
        targetAmount:100000,
        totalAmount:50000,
        deadline:"1",
        contents: "contents 내용을 써볼거예요. 예뻤으면 좋겠는데 어떻게 될지 궁금하네요 contents 내용을 써볼거예요. 예뻤으면 좋겠는데 어떻게 될지 궁금하네요 contents 내용을 써볼거예요. 예뻤으면 좋겠는데 어떻게 될지 궁금하네요 contents 내용을 써볼거예요. 예뻤으면 좋겠는데 어떻게 될지 궁금하네요",
      }
    },
};

const loginFB = () => {
  return function (dispatch, getState, { history }) {};
};

const signupFB = () => {
  return function (dispatch, getState, { history }) {};
};

const donateDB = (articleId) => {
  return function (dispatch, getState, { history }) {
    axios
      .get(`http://아이피주소/api/article/${articleId}/donation`)
      .then(function (res) {
        console.log(res)
        dispatch(donate(articleId));
      })
      .catch(function (error) {
        console.log(error);
      });
  };
};

const getOneDB = (articleId) => {
  return function (dispatch, getState, { history }) {
    axios
      .get(`http://아이피주소/api/article/${articleId}`)
      .then(function (res) {
        console.log(res)
        // dispatch(setOne(아티클정보));
      })
      .catch(function (error) {
        console.log(error);
      });
  };
};

// 리듀서
export default handleActions(
  {
    [LOG_OUT]: (state, action) => produce(state, (draft) => {}),

    [DONATE]: (state, action) => produce(state, (draft) => {
      draft.is_donate[action.payload.articleId] = action.payload.is_donate;
    }),

    [SET_ONE]: (state, action) => produce(state, (draft) => {
      draft.one_list = action.payload.one_list;
    }),
  },
  initialState
);

// action creator export
const actionCreators = {
  loginFB,
  logOut,
  getUser,

  setOne,
  getOneDB,
  donate,
  donateDB,
};

export { actionCreators };
