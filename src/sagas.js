import { call, put, takeEvery, takeLatest } from "redux-saga/effects";
import {
  HELLO_WORLD,
  RECEIVE_HELLO_WORLD,
  POST_CONTACT,
} from "./store/constants/index";
import { receiveHelloWorld } from "./store/actions/index";
import { getAllGallery, postContact } from "./domain/API";
// worker Saga: will be fired on USER_FETCH_REQUESTED actions
function* helloWorld(action) {
  try {
    // const user = yield call(Api.fetchUser, action.payload.userId);
    const fetchData = yield call(getAllGallery);
    yield put(receiveHelloWorld("hello world saga"));
  } catch (e) {
    yield put({ type: "USER_FETCH_FAILED", message: e.message });
  }
}

function* submitContact({ value }) {
  try {
    const response = yield call(postContact, value);
  } catch (error) {
    console.log(error);
  }
}

/*
  Starts fetchUser on each dispatched `USER_FETCH_REQUESTED` action.
  Allows concurrent fetches of user.
*/

/*
  Alternatively you may use takeLatest.

  Does not allow concurrent fetches of user. If "USER_FETCH_REQUESTED" gets
  dispatched while a fetch is already pending, that pending fetch is cancelled
  and only the latest one will be run.
*/
export default function* mySaga() {
  yield takeLatest(HELLO_WORLD, helloWorld);
  yield takeLatest(POST_CONTACT, submitContact);
}

// export default mySaga;
