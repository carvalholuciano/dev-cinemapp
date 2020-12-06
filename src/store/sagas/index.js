import {all} from 'redux-saga/effects';

import {watchMovies} from './movies';

export default function* rootSaga() {
  yield all([watchMovies()]);
}
