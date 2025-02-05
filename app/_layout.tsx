import 'react-native-reanimated';

import * as SplashScreen from 'expo-splash-screen';

import {
  MD3LightTheme as DefaultTheme,
  PaperProvider,
} from 'react-native-paper';

import { COLORS } from '@/constants/colors';
import React from 'react';
import { Stack } from 'expo-router';
import { useEffect } from 'react';
import { useFonts } from 'expo-font';

SplashScreen.preventAutoHideAsync();

const theme = {
  ...DefaultTheme,
  colors: COLORS,
};

export default function RootLayout() {
  const [loaded] = useFonts({
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
  });

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  return (
    <PaperProvider theme={theme}>
      <Stack screenOptions={{ headerShown: false }} />
    </PaperProvider>
  );
}
