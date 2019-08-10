import { takeLatest, put, call } from "redux-saga/effects";

export const getUserDetails = (userId, password) => {
  return {
    type: "USER_DETAILS",
    userId,
    password
  };
};
export const handleUserId = enteredString => {
  return {
    type: "HANDLE_USERID",
    payload: enteredString
  };
};
export const handlePassword = enteredString => {
  return {
    type: "HANDLE_PASSWORD",
    payload: enteredString
  };
};
export const handleLogout = () => {
  return {
    type: "HANDLE_LOG_OUT"
  };
};
