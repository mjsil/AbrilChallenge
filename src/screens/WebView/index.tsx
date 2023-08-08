import React, { useRef, useState } from 'react';
import WebView from 'react-native-webview';
import Entypo from 'react-native-vector-icons/Entypo';
import { useTheme } from 'styled-components/native';

import { Container } from '~/components/Layout/Container';
import { Load } from '~/components/Animations/Load';
import { Props } from './Models';
import { Header, Title } from './styles';

export const WebViewScreen = ({ navigation, route }: Props) => {
  const theme = useTheme();

  const repository = route.params.repository;
  const url = route.params.url;
  const webViewRef = useRef<WebView>(null);
  const [goBackWebView, setGoBackWebView] = useState(false);

  const handleBackPress = () => {
    goBackWebView ? webViewRef.current?.goBack() : navigation.goBack();
  };

  return (
    <Container>
      <Header onPress={handleBackPress}>
        <Entypo name="chevron-left" size={24} color={theme.colors.primary} />

        <Title>{repository}</Title>
      </Header>

      <WebView
        ref={webViewRef}
        source={{
          uri: url,
        }}
        startInLoadingState={true}
        allowsBackForwardNavigationGestures
        onNavigationStateChange={(navigation) => {
          setGoBackWebView(navigation.canGoBack);
        }}
        renderLoading={() => (
          <Load
            style={{
              height: '100%',
              backgroundColor: theme.colors.background_100,
            }}
          />
        )}
      />
    </Container>
  );
};
