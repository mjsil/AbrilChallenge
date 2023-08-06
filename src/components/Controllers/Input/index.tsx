import React from 'react';
import { TextInputProps } from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { useTheme } from 'styled-components/native';

import { Container, Content } from './styles';

export const Input = ({ ...rest }: TextInputProps) => {
  const theme = useTheme();

  return (
    <Container>
      <AntDesign name="search1" size={24} color={theme.colors.subtext_500} />

      <Content {...rest} />
    </Container>
  );
};
