import { Image, StyleSheet, View } from 'react-native';
import { Surface, Text, useTheme } from 'react-native-paper';

import { Link } from 'expo-router';
import { Pokemon } from '@/types/pokemon';
import { TYPES } from '@/constants/types';
import { Type } from '../common/Type';
import { capitalizeFirstLetter } from '@/utils/capitalize';
import { formatPokemonId } from '@/utils/formatPokemonId';

export const PokemonCard = (props: Pokemon) => {
  const { name, url, id, types } = props;
  const theme = useTheme();

  return (
    <Link
      href={{
        pathname: '/pokemon/[name]',
        params: { name },
      }}
      style={styles.container}
    >
      <Surface
        style={{
          backgroundColor: theme.colors.secondary,
          ...styles.surface,
        }}
        elevation={1}
      >
        <View style={styles.title}>
          <Text variant="titleMedium" style={{ color: theme.colors.tertiary }}>
            {capitalizeFirstLetter(name)}
          </Text>
          <Text variant="titleMedium" style={{ color: theme.colors.primary }}>
            {formatPokemonId(id)}
          </Text>
        </View>
        <Image
          style={styles.image}
          source={{
            uri: url,
          }}
        />
        <View style={styles.types}>
          {types.map((type) => (
            <Type key={type} type={type as keyof typeof TYPES} />
          ))}
        </View>
      </Surface>
    </Link>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1 / 2,
    margin: 10,
  },
  image: {
    height: 120,
    width: 120,
  },
  surface: {
    padding: 10,
    borderRadius: 10,
    alignItems: 'center',
  },
  title: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  types: {
    width: 160,
    marginTop: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});
