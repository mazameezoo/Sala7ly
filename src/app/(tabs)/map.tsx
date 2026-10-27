import { View, Pressable, StyleSheet } from 'react-native';
import Text from '../../components/AppText';
import MapView, { Marker } from 'react-native-maps';
import { useRouter } from 'expo-router';
import { colors, status, spacing, radius, font } from '../../theme';
import StatusPill from '../../components/StatusPill';
import { useHazardMap } from '../../viewmodels/useHazardMap';

const startRegion = {
  latitude: 30.0444,
  longitude: 31.2357,
  latitudeDelta: 0.08,
  longitudeDelta: 0.08,
};

export default function MapScreen() {
  const vm = useHazardMap();
  const router = useRouter();

  return (
    <View style={styles.screen}>
      <MapView
        style={styles.map}
        initialRegion={startRegion}
        userInterfaceStyle="dark"
        onPress={vm.clear}
      >
        {vm.hazards.map((h) => (
          <Marker
            key={h.id}
            coordinate={{ latitude: h.latitude, longitude: h.longitude }}
            pinColor={status[h.status]}
            onPress={() => vm.select(h.id)}
          />
        ))}
      </MapView>

      {!vm.selected && (
        <View style={styles.hint}>
          <Text style={styles.hintText}>Tap a pin to see the hazard</Text>
        </View>
      )}

      {vm.selected && (
        <View style={styles.card}>
          <View style={styles.row}>
            <View style={styles.flex}>
              <Text style={styles.cardTitle}>{vm.selected.category}</Text>
              <Text style={styles.cardSub}>{vm.selected.location} · {vm.selected.verifications} verifications</Text>
            </View>
            <StatusPill status={vm.selected.status} />
          </View>
          <Pressable
            style={styles.button}
            onPress={() => router.push({ pathname: '/hazard/[id]', params: { id: vm.selected!.id } })}
          >
            <Text style={styles.buttonText}>View details</Text>
          </Pressable>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  screen: { flex: 1, backgroundColor: colors.background },
  map: { flex: 1 },
  flex: { flex: 1 },
  hint: { position: 'absolute', top: spacing.md, alignSelf: 'center', backgroundColor: colors.surface, borderRadius: radius.pill, paddingHorizontal: spacing.md, paddingVertical: spacing.sm },
  hintText: { color: colors.text, fontSize: font.small, fontWeight: '600' },
  card: { position: 'absolute', left: spacing.md, right: spacing.md, bottom: spacing.md, backgroundColor: colors.surface, borderRadius: radius.lg, padding: spacing.md, gap: spacing.md },
  row: { flexDirection: 'row', alignItems: 'center', gap: spacing.md },
  cardTitle: { color: colors.text, fontSize: font.body + 2, fontWeight: '700' },
  cardSub: { color: colors.muted, fontSize: font.small },
  button: { minHeight: 48, borderRadius: radius.md, backgroundColor: colors.primary, alignItems: 'center', justifyContent: 'center' },
  buttonText: { color: colors.onPrimary, fontSize: font.body, fontWeight: '700' },
});
