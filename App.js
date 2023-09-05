import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import YoutubePlayer from 'react-native-youtube-iframe';
import { WebView } from 'react-native-webview';

export default function App() {
  return (
    <View style={styles.container}>
      {/* <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" /> */}
      <WebView
        style={{ flex: 1, aspectRatio: 16 / 9 }}
        source={{ uri: 'https://youtu.be/-esiEI4HTdk?list=RD-esiEI4HTdk&t=297' }}
        allowsInlineMediaPlayback={true}
        // mediaPlaybackRequiresUserAction={Platform.OS !== 'android' || Platform.Version >= 17 ? false : undefined}
        userAgent="Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/77.0.3865.90 Safari/537.36"
      />
      
      {/* <YoutubePlayer 
        height={300}
        width={300}
        play={true}
        videoId={'mLI_QxszYrU'}
      /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    height: 200,
    width: '100%',
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
