import { StyleSheet } from 'react-native';
import { ThemedView } from '@/components/ThemedView';
import { StatusBar } from 'expo-status-bar';

import Button from '@/components/sample-components/Button';
import ImageViewer from '@/components/sample-components/ImageViewer';

const PlaceholderImage = require('@/assets/images/background-image.png');

export default function StickerSmashExampleView() {
  return (
    <ThemedView style={styles.container}>
      <ThemedView style={styles.imageContainer}>
        <ImageViewer placeholderImageSource={PlaceholderImage} />
      </ThemedView>
      <ThemedView style={styles.footerContainer}>
        <Button theme='primary' label='Choose a photo' />
        <Button label='Use this photo' />
      </ThemedView>
      <StatusBar style='auto' />
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  imageContainer: {
    flex: 1,
    paddingTop: 58,
  },
  footerContainer: {
    flex: 1 / 3,
    alignItems: 'center',
  },
});
