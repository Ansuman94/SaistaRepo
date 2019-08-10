import Axios from "axios";

const initialState = {
  userData: [],
  userId: "",
  password: "",
  isLoading: false
};
export default function(state = initialState, action) {
  switch (action.type) {
    case "USER_DETAILS":
      return {
        ...state,
        isLoading: true
      };
    case "HANDLE_USERID":
      return {
        ...state,
        userId: action.payload
      };
    case "HANDLE_PASSWORD":
      return {
        ...state,
        password: action.payload
      };
    case "HANDLE_LOG_OUT":
      sessionStorage.setItem("token", null);
      return {
        ...state,
        ...initialState
      };
    case "RECEIVED_USER_DETAILS":
      sessionStorage.setItem("token", action.payload.token);
      Axios.defaults.headers.common["Authorization"] = action.payload.token;
      return {
        ...state,
        ...{ userData: action.payload },
        isLoading: false
      };
    default:
      return state;
  }
}
