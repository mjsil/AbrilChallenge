import React, { useCallback, useEffect, useState } from 'react';

import { Props } from './Models';
import { RepositoryProps } from '~/components/Controllers/Repository/Models';
import { Container } from '~/components/Layout/Container';
import { Input } from '~/components/Controllers/Input';
import { Repositories } from '~/components/Lists/Repositories';
import { Load } from '~/components/Animations/Load';
import { useRepositories } from '~/hooks/Repositories';
import { Header, Title } from './styles';

export const HomeScreen = ({ navigation }: Props) => {
  const [page, setPage] = useState(1);
  const [searchedText, setSearchedText] = useState('');
  const { isLoading, isError, repositories, getAllRepositories, resetRepositories } =
    useRepositories();

  const handleNavigationWebViewScreen = (data: RepositoryProps) => {
    navigation.navigate('WebViewScreen', {
      repository: data.title,
      url: data.url,
    });
  };

  const handleFilteredRepositories = () => {
    resetRepositories([]);
    setPage(1);
  };

  const handlePageIncrement = () => {
    if (!isLoading && !isError) {
      setPage((prevPage) => prevPage + 1);
    }
  };

  const getAllRepositoriesRequest = useCallback(
    () => getAllRepositories(page, searchedText),
    [page],
  );

  useEffect(() => {
    getAllRepositoriesRequest();
  }, [getAllRepositoriesRequest]);

  return (
    <Container>
      <>
        <Header>
          <Title>Repositórios</Title>

          <Input
            value={searchedText}
            onChangeText={setSearchedText}
            placeholder="Busca por repositórios"
            returnKeyType="send"
            onBlur={handleFilteredRepositories}
          />
        </Header>

        <Repositories
          data={repositories}
          onEndReached={handlePageIncrement}
          onPress={handleNavigationWebViewScreen}
        />

        {isLoading && <Load />}
      </>
    </Container>
  );
};
