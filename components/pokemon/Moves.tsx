import { Button, Surface, Text, useTheme } from 'react-native-paper';
import { StyleSheet, View } from 'react-native';

import { useState } from 'react';

type Props = {
  moves: string[];
};

export const Moves = ({ moves }: Props) => {
  const theme = useTheme();
  const [showAll, setShowAll] = useState(false);

  const toggleShowAll = () => {
    setShowAll((prevState) => !prevState);
  };

  return (
    <Surface style={styles.surface}>
      <View style={styles.title}>
        <Text variant="titleLarge" style={{ color: theme.colors.primary }}>
          Moves
        </Text>
        <Button mode="contained" onPress={toggleShowAll}>
          {showAll ? 'Hide' : 'See all'}
        </Button>
      </View>
      <View style={styles.params}>
        {(showAll ? moves : moves.slice(0, 3)).map((move) => (
          <Surface
            key={move}
            mode="flat"
            elevation={2}
            style={styles.paramContent}
          >
            <Text variant="titleMedium" style={{ color: theme.colors.primary }}>
              {move}
            </Text>
          </Surface>
        ))}
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
    alignItems: 'center',
  },
  params: {
    width: '100%',
    flexDirection: 'row',
    flexWrap: 'wrap',
    columnGap: 15,
  },
  paramContent: {
    marginTop: 5,
    paddingHorizontal: 20,
    paddingVertical: 5,
    borderRadius: 5,
  },
});
