import "regenerator-runtime/runtime";
import { put, takeLatest, all } from "redux-saga/effects";
import axios from "axios";

function* fetchUserDetails(action) {
  let userData = {};
  let request = {
    name: action.userId,
    password: action.password
  };
  try {
    const fetchedData = yield axios.get(`/Fixtures/userDetails.json`);
    let responseData = fetchedData["data"];
    yield put({ type: "RECEIVED_USER_DETAILS", payload: responseData });
  } catch (error) {
    console.log(error);
  }
}

export default function* actionWatcherUserDetails() {
  yield takeLatest("USER_DETAILS", fetchUserDetails);
}
