import styled from 'styled-components/native';

export const Header = styled.TouchableOpacity.attrs({
  activeOpacity: 0.7,
})`
  flex-direction: row;
  width: 100%;
  padding: 8px;
`;

export const Title = styled.Text`
  color: ${({ theme }) => theme.colors.text};
  font-size: 16px;
  font-family: ${({ theme }) => theme.fonts.subtitle};
`;
