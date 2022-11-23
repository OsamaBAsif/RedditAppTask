import React from 'react';
import WebView from 'react-native-webview';

const DetailsScreen = ({route}) => {
  return <WebView source={{uri: route.params.url}} />;
};

export default DetailsScreen;
