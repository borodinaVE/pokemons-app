import { StyleSheet, Text } from 'react-native';

import { Link } from 'expo-router';
import React from 'react';

export default function NotFoundScreen() {
  return (
    <>
      <Text>404 Not Found</Text>
      <Link href="/list" style={styles.link}>
        Home
      </Link>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  link: {
    marginTop: 15,
    paddingVertical: 15,
  },
});
