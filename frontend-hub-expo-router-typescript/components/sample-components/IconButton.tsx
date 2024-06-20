import { Pressable, StyleSheet, Text } from 'react-native';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import type { ComponentProps } from 'react';
import { useThemeColor } from '@/hooks/useThemeColor';

type MaterialIconsProps = ComponentProps<typeof MaterialIcons>['name'];

type IconButtonProps = {
  icon: MaterialIconsProps;
  label: string;
  onPress: () => void;
};

export default function IconButton({ icon, label, onPress }: IconButtonProps) {
  const color = useThemeColor({ light: '#000', dark: '#fff' }, 'text');
  return (
    <Pressable style={styles.iconButton} onPress={onPress}>
      <MaterialIcons name={icon} size={24} color={color} />
      <Text style={styles.iconButtonLabel}>{label}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  iconButton: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  iconButtonLabel: {
    color: '#fff',
    marginTop: 12,
  },
});
