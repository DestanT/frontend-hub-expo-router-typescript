import { useState } from 'react';
import { StyleSheet } from 'react-native';
import { ThemedView } from '@/components/ThemedView';
import { StatusBar } from 'expo-status-bar';

import Button from '@/components/sample-components/Button';
import ImageViewer from '@/components/sample-components/ImageViewer';
import * as ImagePicker from 'expo-image-picker';

const PlaceholderImage = require('@/assets/images/background-image.png');

export default function StickerSmashExampleView() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const pickImageAsync = async () => {
    // Example result object:
    // {
    //   "assets": [
    //     {
    //       "assetId": null,
    //       "base64": null,
    //       "duration": null,
    //       "exif": null,
    //       "height": 4800,
    //       "rotation": null,
    //       "type": "image",
    //       "uri": "file:///data/user/0/...",
    //       "width": 3200
    //     }
    //   ],
    //   "canceled": false
    // }
    let result: ImagePicker.ImagePickerResult = await ImagePicker.launchImageLibraryAsync({
      allowsEditing: true, // Android and iOS only
      quality: 1,
    });

    if (!result.canceled) {
      setSelectedImage(result.assets[0].uri);
    } else {
      alert('You did not select an image.');
    }
  };

  return (
    <ThemedView style={styles.container}>
      <ThemedView style={styles.imageContainer}>
        <ImageViewer placeholderImageSource={PlaceholderImage} selectedImage={selectedImage} />
      </ThemedView>
      <ThemedView style={styles.footerContainer}>
        <Button theme='primary' label='Choose a photo' onPress={pickImageAsync} />
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
