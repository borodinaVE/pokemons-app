import { IconButton, useTheme } from 'react-native-paper';
import { Image, StyleSheet, View } from 'react-native';

import { useNavigation } from 'expo-router';

export const Header = () => {
  const theme = useTheme();
  const navigate = useNavigation();

  return (
    <View
      style={{ backgroundColor: theme.colors.tertiary, ...styles.container }}
    >
      <IconButton
        icon="arrow-left"
        size={30}
        onPress={() => navigate.goBack()}
        iconColor={theme.colors.secondary}
      />
      <Image
        style={styles.image}
        source={{
          uri: 'https://pngimg.com/d/pokeball_PNG7.png',
          cache: 'force-cache',
        }}
        testID="image"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    overflow: 'hidden',
    position: 'relative',
  },
  image: {
    opacity: 0.7,
    height: 70,
    width: 70,
  },
});
