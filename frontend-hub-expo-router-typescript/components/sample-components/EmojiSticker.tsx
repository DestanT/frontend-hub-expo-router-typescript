import { View, Image } from 'react-native';

type EmojiStickerProps = {
  imageSize: number;
  stickerSource: any;
};

export default function EmojiSticker({ imageSize, stickerSource }: EmojiStickerProps) {
  return (
    <View style={{ top: -350 }}>
      <Image
        source={stickerSource}
        resizeMode="contain"
        style={{ width: imageSize, height: imageSize }}
      />
    </View>
  );
}
