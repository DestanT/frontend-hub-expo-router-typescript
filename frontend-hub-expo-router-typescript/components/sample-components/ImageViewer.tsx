import { StyleSheet, Image } from 'react-native';

// Change type definition to match your props
type ImageViewerProps = {
  placeholderImageSource: any;
};

export default function ImageViewer({ placeholderImageSource }: ImageViewerProps) {
  return <Image source={placeholderImageSource} style={styles.image} />;
}

const styles = StyleSheet.create({
  image: {
    width: 320,
    height: 440,
    borderRadius: 18,
  },
});
