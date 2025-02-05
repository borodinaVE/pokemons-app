import { Image, StyleSheet, View } from 'react-native';
import { Surface, Text, useTheme } from 'react-native-paper';

import { Features } from './Features';
import { Pokemon } from '@/types/pokemon';
import { TYPES } from '@/constants/types';
import { Type } from '../common/Type';
import { capitalizeFirstLetter } from '@/utils/capitalize';
import { formatPokemonId } from '@/utils/formatPokemonId';

type Props = {
  pokemon: Pokemon;
};

export const MainInfo = ({ pokemon }: Props) => {
  const theme = useTheme();

  return (
    <Surface style={styles.surface}>
      <View style={styles.title}>
        <View>
          <Text variant="titleMedium" style={{ color: theme.colors.primary }}>
            {formatPokemonId(pokemon.id)}
          </Text>
          <Text variant="titleLarge" style={{ color: theme.colors.tertiary }}>
            {capitalizeFirstLetter(pokemon.name)}
          </Text>
        </View>
        <View style={styles.types}>
          {pokemon.types.map((type: string) => (
            <Type key={type} type={type as keyof typeof TYPES} />
          ))}
        </View>
      </View>
      <View style={styles.graphic}>
        <View>
          <Features
            hp={pokemon.hp}
            attack={pokemon.attack}
            defense={pokemon.defense}
            speed={pokemon.speed}
          />
        </View>
        <Image
          style={styles.image}
          source={{
            uri: pokemon.url,
          }}
        />
      </View>
    </Surface>
  );
};

const styles = StyleSheet.create({
  surface: {
    margin: 10,
    padding: 30,
    borderRadius: 10,
    justifyContent: 'space-between',
  },
  title: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  types: {
    flexDirection: 'row',
    columnGap: 10,
    alignItems: 'center',
  },
  image: {
    height: 200,
    width: 200,
    marginBottom: 20,
  },
  graphic: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});
