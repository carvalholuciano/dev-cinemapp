import {call, put, takeLatest} from 'redux-saga/effects';

import {moviesTypes, moviesActions} from '../ducks/movies';

import {moviesService} from '../../services/api';

export default function* searchMovies(action) {
  try {
    const response = yield call(moviesService.search, action.payload);
    if (response.Response) {
      yield put(moviesActions.success(response.Search));
    } else {
      yield put(moviesActions.error(response.Error));
    }
  } catch (error) {
    yield put(moviesActions.error(error));
  }
}

export function* watchMovies() {
  yield takeLatest(moviesTypes.REQUEST, searchMovies);
}
