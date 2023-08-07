import React from 'react';

import { formatStarsToK } from '~/utils';
import { Props } from './Models';
import { Container, ImageWrap, Image, Stars, Content, Header, Title, Subtitle } from './styles';

export const Repository = ({ data, onPress }: Props) => {
  return (
    <Container onPress={() => onPress(data)}>
      <ImageWrap>
        <Image source={{ uri: data.image }} />
      </ImageWrap>

      <Content>
        <Header>
          <Title>{data.title}</Title>
          <Subtitle>{data.subtitle}</Subtitle>
        </Header>

        <Stars>{formatStarsToK(data.stars)}</Stars>
      </Content>
    </Container>
  );
};
