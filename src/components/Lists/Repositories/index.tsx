import React from 'react';
import { FlatList } from 'react-native';
import { getBottomSpace } from 'react-native-iphone-x-helper';

import { Repository } from '~/components/Controllers/Repository';
import { Props } from './Models';

export const Repositories = ({ data, onEndReached, onPress }: Props) => {
  return (
    <FlatList
      data={data}
      keyExtractor={(item) => item.id.toString()}
      onEndReached={onEndReached}
      onEndReachedThreshold={0.2}
      style={{ flex: 1 }}
      contentContainerStyle={{ paddingTop: 20, paddingBottom: getBottomSpace() + 16 }}
      renderItem={({ item }) => <Repository data={item} onPress={onPress} />}
    />
  );
};
