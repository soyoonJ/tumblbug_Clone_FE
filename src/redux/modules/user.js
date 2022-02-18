// 액션 만들어주는 것들
import {createAction, handleActions} from "redux-actions";
import {produce} from "immer";


// actions
// const LOG_IN = "LOG_IN";
const LOG_OUT = "LOG_OUT";
const GET_USER = "GET_USER";
const SET_USER = "SET_USER";

// action creators
// const logIn = createAction(LOG_IN, (user)=> ({user}));
const logOut = createAction(LOG_OUT, (user)=>({user}));
const getUser = createAction(GET_USER, (user)=>({user}));
const setUser = createAction(SET_USER, (user) => ({user}))


// initialState
// defaultProps 같은 역할
const initialState = {
    // user: null,
    // is_login: false,
};



const loginFB = () => {
    return function (dispatch, getState, {history}) {


        
    }
}


const signupFB = () => {
  return function (dispatch, getState, { history }) {

  }
};


const loginCheckFB = () => {
    return function (dispatch, getState, {history}) {
        
    }
}

const logoutFB = () => {
    return function (dispatch, getState, {history}) {
        
        
    }
}

// 리듀서
export default handleActions({

    [SET_USER]: (state, action) => produce(state, (draft)=>{
        
    }),

    [LOG_OUT]: (state, action) => produce(state, (draft)=>{
        
    }),

    [GET_USER]: (state, action) => produce(state, (draft)=>{

    }),
    },
    initialState
);

// action creator export
const actionCreators = {

    loginFB,
    logOut,
    getUser,

    signupFB,
    loginCheckFB,
    logoutFB,
};


export { actionCreators }



