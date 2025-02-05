import { ActivityIndicator, useTheme } from 'react-native-paper';
import { StyleSheet, View } from 'react-native';

export const Spinner = () => {
  const theme = useTheme();

  return (
    <View style={styles.spinner}>
      <ActivityIndicator
        animating={true}
        size={'large'}
        color={theme.colors.tertiary}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  spinner: {
    margin: 'auto',
    marginTop: 30,
  },
});
