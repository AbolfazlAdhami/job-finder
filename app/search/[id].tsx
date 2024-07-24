import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import React from "react";
import { Stack, useLocalSearchParams, useRouter } from "expo-router";
import { COLORS, icons } from "@/constants";
import { ScreenHeaderBtn } from "@/components";

export default function Search() {
  const { id } = useLocalSearchParams();
  const router = useRouter();
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.lightWhite }}>
      <Stack.Screen
        options={{
          headerTitle: "",
          headerStyle: {
            backgroundColor: COLORS.lightWhite,
          },
          headerShadowVisible: false,
          headerLeft: () => <ScreenHeaderBtn iconUrl={icons.left} dimension="60%" handlePress={() => router.back()} />,
        }}
      />
      <Text>Result for search {id}</Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({});
