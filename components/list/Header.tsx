import { Button, Searchbar, Text, useTheme } from 'react-native-paper';
import { Image, StyleSheet, View } from 'react-native';

import { useState } from 'react';

type Props = {
  handleSearchSubmit: (name: string) => void;
  isSearchSubmited: boolean;
};

export const Header = ({ handleSearchSubmit, isSearchSubmited }: Props) => {
  const [searchQuery, setSearchQuery] = useState('');
  const theme = useTheme();

  const handleSubmit = () => {
    if (!isSearchSubmited) {
      handleSearchSubmit(searchQuery);
    } else {
      handleSearchSubmit('');
      setSearchQuery('');
    }
  };

  const handleInputChange = (value: string) => {
    setSearchQuery(value);
    handleSearchSubmit('');
  };

  return (
    <View
      style={{ backgroundColor: theme.colors.tertiary, ...styles.container }}
    >
      <View>
        <Text
          variant="headlineMedium"
          style={{ color: theme.colors.onSecondary }}
        >
          Who are you {'\n'} looking for?
        </Text>
        <Image
          style={styles.image}
          source={{
            uri: 'https://pngimg.com/d/pokeball_PNG7.png',
          }}
        />
      </View>
      <Searchbar
        placeholder="E.g. Pikachu"
        onChangeText={handleInputChange}
        value={searchQuery}
        right={() => (
          <Button mode="contained" style={styles.button} onPress={handleSubmit}>
            {isSearchSubmited ? 'CLEAR' : 'GO'}
          </Button>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 230,
    padding: 30,
    justifyContent: 'space-between',
    overflow: 'hidden',
    position: 'relative',
  },
  button: {
    margin: 10,
  },
  image: {
    position: 'absolute',
    top: -70,
    right: -70,
    opacity: 0.7,
    height: 150,
    width: 150,
  },
});
