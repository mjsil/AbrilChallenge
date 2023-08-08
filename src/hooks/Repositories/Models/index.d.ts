import { initialState } from '~/redux/ducks/Repositories/';
import { RepositoryProps } from '~/components/Controllers/Repository/Models';

export interface StateProps {
  repositoriesReducer: typeof initialState;
}

export interface RepositoriesProps extends RepositoryProps {}
