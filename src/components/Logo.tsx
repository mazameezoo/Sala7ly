import { Image } from 'react-native';

export default function Logo({ size = 76 }: { size?: number }) {
  return (
    <Image
      source={require('../../assets/icon.png')}
      style={{ width: size, height: size, borderRadius: size * 0.24 }}
    />
  );
}
