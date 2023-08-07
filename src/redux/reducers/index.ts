import { combineReducers } from 'redux';

import { repositoriesReducer } from '~/redux/ducks/Repositories';

export const rootReducer = combineReducers({
  repositoriesReducer,
});
