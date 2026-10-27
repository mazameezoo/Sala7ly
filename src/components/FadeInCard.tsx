import { ReactNode } from 'react';
import Animated, { FadeInDown } from 'react-native-reanimated';

export default function FadeInCard({ index, children }: { index: number; children: ReactNode }) {
  return <Animated.View entering={FadeInDown.delay(index * 80).duration(400)}>{children}</Animated.View>;
}
