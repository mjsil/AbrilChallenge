import { all, takeLatest } from 'redux-saga/effects';

import { RepositoriesTypes } from '~/redux/ducks/Repositories';
import { getAllRepositoriesRequest } from './Repository';

export function* rootSaga() {
  yield all([takeLatest(RepositoriesTypes.REQUEST, getAllRepositoriesRequest)]);
}
