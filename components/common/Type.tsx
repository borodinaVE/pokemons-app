import { StyleSheet, View } from 'react-native';
import { Text, useTheme } from 'react-native-paper';

import { TYPES } from '@/constants/types';
import { capitalizeFirstLetter } from '@/utils/capitalize';

export const Type = ({ type }: { type: keyof typeof TYPES }) => {
  const theme = useTheme();

  return (
    <View style={{ backgroundColor: TYPES[type], ...styles.type }}>
      <Text variant="titleSmall" style={{ color: theme.colors.secondary }}>
        {capitalizeFirstLetter(type.toString())}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  type: {
    width: 75,
    alignItems: 'center',
    borderRadius: 5,
  },
});
