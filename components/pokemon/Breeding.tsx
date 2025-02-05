import { StyleSheet, View } from 'react-native';
import { Surface, Text, useTheme } from 'react-native-paper';

import { getHeight } from '@/utils/getHeight';
import { getWeight } from '@/utils/getWeight';

type Props = {
  weight: number;
  height: number;
};

export const Breeding = ({ weight, height }: Props) => {
  const theme = useTheme();

  return (
    <Surface style={styles.surface}>
      <View style={styles.title}>
        <Text variant="titleLarge" style={{ color: theme.colors.primary }}>
          Breeding
        </Text>
      </View>
      <View style={styles.params}>
        <View style={styles.paramsInfo}>
          <Text
            variant="titleMedium"
            style={{ color: theme.colors.onPrimaryContainer }}
          >
            weight
          </Text>
          <Surface mode="flat" elevation={2} style={styles.paramContent}>
            <Text variant="titleMedium" style={{ color: theme.colors.primary }}>
              {getWeight(weight)}
            </Text>
          </Surface>
        </View>
        <View style={styles.paramsInfo}>
          <Text
            variant="titleMedium"
            style={{ color: theme.colors.onPrimaryContainer }}
          >
            height
          </Text>
          <Surface mode="flat" elevation={2} style={styles.paramContent}>
            <Text variant="titleMedium" style={{ color: theme.colors.primary }}>
              {getHeight(height)}
            </Text>
          </Surface>
        </View>
      </View>
    </Surface>
  );
};

const styles = StyleSheet.create({
  surface: {
    margin: 10,
    padding: 20,
    borderRadius: 10,
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  title: {
    marginBottom: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  params: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  paramsInfo: {
    flex: 1 / 2,
    alignItems: 'center',
  },
  paramContent: {
    marginTop: 5,
    paddingHorizontal: 15,
    paddingVertical: 5,
    borderRadius: 5,
  },
});
