import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { isSubarray } from '~/utils';
import { RepositoriesActions } from '~/redux/ducks/Repositories';
import { RepositoriesProps, StateProps } from './Models';

export const useRepositories = () => {
  const dispatch = useDispatch();
  const [repositories, setRepositories] = useState<RepositoriesProps[]>([]);

  const isLoading = useSelector(
    ({ repositoriesReducer }: StateProps) => repositoriesReducer.loading,
  );

  const isError = useSelector(({ repositoriesReducer }: StateProps) => repositoriesReducer.error);

  const requestedRepositories = useSelector(
    ({ repositoriesReducer }: StateProps) => repositoriesReducer.data,
  );

  const getAllRepositories = (page: number, search: string) => {
    const searchedText = !search ? 'stars:>0' : search;
    dispatch(RepositoriesActions.repositoriesRequest({ search: searchedText, page }));
  };

  useEffect(() => {
    if (!isSubarray(repositories, requestedRepositories)) {
      setRepositories((prevRepositories) => [...prevRepositories, ...requestedRepositories]);
    }
  }, [requestedRepositories]);

  return {
    isLoading,
    isError,
    repositories,
    getAllRepositories,
    resetRepositories: setRepositories,
  };
};
