import React from 'react';
import { WebView } from 'react-native-webview';
import { Dimensions, View } from 'react-native'

const LinkScreen = ({ route }) => {
    const { uri } = route.params;
    const { width, height } = Dimensions.get('window');

    // Inject JavaScript to disable user scaling
    const injectedJS = `const meta = document.createElement('meta');
    meta.setAttribute('content', 'width=device-width, initial-scale=1, maximum-scale=1, user-scalable=0');
    meta.setAttribute('name', 'viewport');
    document.getElementsByTagName('head')[0].appendChild(meta);`;

    return (

        <WebView
            source={{ uri }}
            style={{ flex: 1 }}
            useWebKit={true}
            injectedJavaScript={injectedJS}
            javaScriptEnabled={true}
            scalesPageToFit={false}

        />

    );
};

export default LinkScreen;

















