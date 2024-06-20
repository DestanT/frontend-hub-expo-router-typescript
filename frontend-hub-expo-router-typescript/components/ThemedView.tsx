import { forwardRef } from 'react';
import { View, type ViewProps } from 'react-native';

import { useThemeColor } from '@/hooks/useThemeColor';

export type ThemedViewProps = ViewProps & {
  lightColor?: string;
  darkColor?: string;
};

const ThemedViewComponent = forwardRef<View, ThemedViewProps>(
  ({ style, lightColor, darkColor, ...otherProps }, ref) => {
    const backgroundColor = useThemeColor({ light: lightColor, dark: darkColor }, 'background');

    return <View ref={ref} style={[{ backgroundColor }, style]} {...otherProps} />;
  },
);

ThemedViewComponent.displayName = 'ThemedView';

export const ThemedView = ThemedViewComponent;
