import { put, takeLatest, all } from "redux-saga/effects";
import actionWatcherUserDetails from "../User/saga-userDetails";

export default function* rootSaga() {
  yield all([actionWatcherUserDetails()]);
}
