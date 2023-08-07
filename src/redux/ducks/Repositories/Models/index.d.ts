import { RepositoryProps } from '~/components/Controllers/Repository/Models';
import { RepositoriesTypes } from '..';

export interface DataProps extends RepositoryProps {}

export interface ActionProps {
  type:
    | typeof RepositoriesTypes.REQUEST
    | typeof RepositoriesTypes.SUCCESS
    | typeof RepositoriesTypes.FAILED
    | typeof RepositoriesTypes.CLEAR;
  payload: DataProps[];
}

export interface ParamsProps {
  search: string;
  page: number;
}
