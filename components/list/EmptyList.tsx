import { Text, useTheme } from 'react-native-paper';

import { StyleSheet } from 'react-native';

export const EmptyList = () => {
  const theme = useTheme();

  return (
    <Text
      variant="titleLarge"
      style={{ color: theme.colors.primary, ...styles.text }}
    >
      No pokemon found
    </Text>
  );
};

const styles = StyleSheet.create({
  text: {
    margin: 'auto',
    marginTop: 30,
  },
});
