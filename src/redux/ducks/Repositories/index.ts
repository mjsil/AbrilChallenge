import { ActionProps, DataProps, ParamsProps } from './Models';

// ActionTypes
export const RepositoriesTypes = {
  REQUEST: 'repositories/REQUEST',
  SUCCESS: 'repositories/SUCCESS',
  FAILED: 'repositories/FAILED',
  CLEAR: 'repositories/CLEAR',
};

// Reducer
interface RepositoriesState {
  loading: boolean;
  error: boolean;
  data: DataProps[];
}

export const initialState: RepositoriesState = {
  loading: false,
  error: false,
  data: [],
};

export const repositoriesReducer = (state = initialState, action: ActionProps) => {
  switch (action.type) {
    case RepositoriesTypes.REQUEST:
      return {
        ...state,
        loading: true,
        error: false,
      };
    case RepositoriesTypes.SUCCESS:
      return {
        ...state,
        loading: false,
        error: false,
        data: action.payload,
      };
    case RepositoriesTypes.FAILED:
      return {
        ...state,
        loading: false,
        error: true,
      };
    case RepositoriesTypes.CLEAR:
      return {
        ...state,
        loading: initialState.loading,
        error: initialState.error,
      };
    default:
      return state;
  }
};

// Action Creators
export const RepositoriesActions = {
  repositoriesRequest: (params: ParamsProps) => ({
    type: RepositoriesTypes.REQUEST,
    params,
  }),
  repositoriesSuccess: (data: DataProps[]) => ({
    type: RepositoriesTypes.SUCCESS,
    payload: data,
  }),
  repositoriesFailed: () => ({
    type: RepositoriesTypes.FAILED,
  }),
  repositoriesClear: () => ({
    type: RepositoriesTypes.CLEAR,
  }),
};
