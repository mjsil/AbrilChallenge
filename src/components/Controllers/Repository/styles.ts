import styled from 'styled-components/native';

export const Container = styled.View`
  width: 100%;
  padding: 12px 16px;
  flex-direction: row;
`;

export const ImageWrap = styled.View`
  width: 52px;
  height: 52px;
  border-radius: 26px;
  border: 1px solid ${({ theme }) => theme.colors.background_100};
  background-color: ${({ theme }) => theme.colors.background_100};
  align-self: center;
`;

export const Image = styled.Image`
  width: 100%;
  height: 100%;
  border-radius: 52px;
`;

export const Content = styled.View`
  flex: 1;
  flex-direction: row;
  justify-content: space-between;
  margin-left: 12px;
  border-bottom-width: 1px;
  border-style: solid;
  border-color: ${({ theme }) => theme.colors.border};
  border-radius: 2px;
`;

export const Header = styled.View`
  flex: 1;
`;

export const Title = styled.Text`
  font-size: 16px;
  color: ${({ theme }) => theme.colors.text};
  font-family: ${({ theme }) => theme.fonts.subtitle};
  margin-bottom: 4px;
`;

export const Subtitle = styled.Text`
  font-size: 14px;
  color: ${({ theme }) => theme.colors.subtext_100};
  font-family: ${({ theme }) => theme.fonts.text};
  margin-bottom: 12px;
`;

export const Stars = styled.Text`
  font-size: 14px;
  color: ${({ theme }) => theme.colors.subtext_100};
  font-family: ${({ theme }) => theme.fonts.text};
`;
