import React from "react";
import { View } from "react-native";
import { router, Stack } from "expo-router";
import "react-native-reanimated";
import { COLORS, icons } from "../constants";
import { ScreenHeaderBtn } from "../components";
import * as SplashScreen from "expo-splash-screen";

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  return (
    <View style={{ flex: 1, backgroundColor: COLORS.lightWhite }}>
      <Stack
        initialRouteName="home"
        screenOptions={{
          // headerShown: false,
          headerStyle: {
            backgroundColor: COLORS.lightWhite,
          },
        }}
      >
        <Stack.Screen
          name="index"
          options={{
            headerLeft: () => (
              <ScreenHeaderBtn
                dimensions="60%"
                iconUrl={icons.menu}
                onPress={() => console.log(123)}
              />
            ),
            headerTitle: "",
          }}
        />
        <Stack.Screen
          name="search/[id]"
          options={{
            headerLeft: () => (
              <ScreenHeaderBtn
                iconUrl={icons.left}
                dimensions="60%"
                onPress={() => router.back()}
              />
            ),
            headerTitle: "",
          }}
        />
      </Stack>
    </View>
  );
}
