import styled from 'styled-components/native';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';

export const Content = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.white};
  padding-top: ${getStatusBarHeight() + 40}px;
`;
