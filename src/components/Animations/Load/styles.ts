import styled from 'styled-components/native';
import { getBottomSpace } from 'react-native-iphone-x-helper';

export const Container = styled.ActivityIndicator.attrs({
  size: 'small',
})`
  color: ${({ theme }) => theme.colors.text};
  padding-bottom: ${getBottomSpace()}px;
`;
