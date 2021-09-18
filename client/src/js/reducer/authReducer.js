import { GET_PROFILE, GET_PROFILE_FAIL, GET_PROFILE_SUCCESS, LOGIN_USER, LOGIN_USER_FAIL, LOGIN_USER_SUCCESS, LOGOUT, REGISTER_USER, REGISTER_USER_FAIL, REGISTER_USER_SUCCESS } from "../const";

const intialState = {
  token: null,
  isLoading: null,
  isAuth: null,
  user: null,
  error: null,
};
const authReducer = (state = intialState, { type, payload }) => {
  switch (type) {
    case LOGIN_USER:
    case REGISTER_USER:
    case GET_PROFILE:
      return { ...state, isLoading: true };

    case REGISTER_USER_SUCCESS:
    case LOGIN_USER_SUCCESS:
        return {...state,isLoading:false,token:payload.token,user:payload.user,isAuth:true,error:null}

    case GET_PROFILE_SUCCESS:
        return {...state,isLoading:false,user:payload,isAuth:true,error:null}
    
    case GET_PROFILE_FAIL:
    case REGISTER_USER_FAIL:
    case LOGIN_USER_FAIL:
        return {...state,error:payload,isAuth:false,isLoading:false,user:null,token:null}

    case LOGOUT : 
        return { ...state,isLoading:false,user:null,token:null,isAuth:false}
    default:
      return state;
  }
};

export default authReducer;
