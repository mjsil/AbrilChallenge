import styled from 'styled-components/native';
import { TextInputProps } from 'react-native';

export const Container = styled.View`
  width: 100%;
  flex-direction: row;
  align-items: center;
  margin-bottom: 40px;
  background-color: ${({ theme }) => theme.colors.background_500};
  border-radius: 8px;
  padding: 8px;
`;

export const Content = styled.TextInput.attrs<TextInputProps>(({ theme }) => ({
  placeholderTextColor: theme.colors.subtext_500,
}))<TextInputProps>`
  flex: 1;
  margin-left: 8px;
  font-size: 17px;
  font-family: ${({ theme }) => theme.fonts.text};
`;
