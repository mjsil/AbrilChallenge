import 'react-native-get-random-values';
import { v4 as uuidv4 } from 'uuid';
import { put } from 'redux-saga/effects';
import axios from 'axios';

import { ParamsProps } from '~/redux/ducks/Repositories/Models';
import { RepositoriesActions } from '~/redux/ducks/Repositories';
import { RepositoriesProps, ResponseProps } from './Models/indes';

export function* getAllRepositoriesRequest({ params }: { params: ParamsProps }) {
  try {
    const { search, page } = params;
    const response: ResponseProps = yield axios.get(
      `https://api.github.com/search/repositories?q=${search}&sort=stars&order=desc&page=${page}&per_page=15`,
    );
    const repositories = response.data.items;
    const formattedRepositories: RepositoriesProps[] = repositories.map((repository) => {
      const generatedUUID = uuidv4();

      return {
        id: generatedUUID,
        image: repository.owner.avatar_url,
        title: repository.name,
        subtitle: repository.owner.login,
        stars: repository.stargazers_count,
        url: repository.html_url,
      };
    });

    yield put(RepositoriesActions.repositoriesSuccess(formattedRepositories));
  } catch (err) {
    console.log('>>>>', err);
    yield put(RepositoriesActions.repositoriesFailed());
  }
}
