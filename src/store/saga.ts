// Import necessary functions and types
import {all, takeEvery} from 'redux-saga/effects';

function* watchGetUserAction(): Generator {
  // yield takeEvery('users/getUserAction', loginSaga);
  // yield takeEvery('settings/checkingLoader', loaderChecker);
}

// Export the root saga
export default function* rootSaga(): Generator {
  yield all([
    watchGetUserAction(),
    // Add other watchers if needed
  ]);
}
