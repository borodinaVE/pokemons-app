import { Snackbar, Text, useTheme } from 'react-native-paper';

type Props = {
  handleDismiss?: () => void;
  visible: boolean;
};
export const Error = ({ handleDismiss, visible }: Props) => {
  const theme = useTheme();

  return (
    <Snackbar
      visible={visible}
      onDismiss={() => handleDismiss?.()}
      action={{
        label: 'Retry',
        onPress: handleDismiss,
      }}
    >
      <Text variant="titleMedium" style={{ color: theme.colors.secondary }}>
        Something went wrong
      </Text>
    </Snackbar>
  );
};
