import { useEffect } from 'react';
import { View, StyleSheet } from 'react-native';
import Animated, { useSharedValue, useAnimatedStyle, withTiming } from 'react-native-reanimated';
import { colors, radius } from '../theme';

export default function AnimatedBar({ ratio }: { ratio: number }) {
  const width = useSharedValue(0);

  useEffect(() => {
    width.value = withTiming(ratio * 100, { duration: 800 });
  }, [ratio]);

  const animated = useAnimatedStyle(() => ({ width: `${width.value}%` }));

  return (
    <View style={styles.track}>
      <Animated.View style={[styles.fill, animated]} />
    </View>
  );
}

const styles = StyleSheet.create({
  track: { height: 10, borderRadius: radius.pill, backgroundColor: colors.surfaceRaised },
  fill: { height: 10, borderRadius: radius.pill, backgroundColor: colors.primary },
});
