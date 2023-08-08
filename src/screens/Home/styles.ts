import styled from 'styled-components/native';

export const Header = styled.View`
  width: 100%;
  margin-top: 20px;
  padding: 0 16px;
`;

export const Title = styled.Text`
  color: ${({ theme }) => theme.colors.text};
  font-size: 34px;
  font-family: ${({ theme }) => theme.fonts.title};
  margin-bottom: 16px;
`;
