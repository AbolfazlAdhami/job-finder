import { Stack, useRouter, useSearchParams } from "expo-router";
import { useCallback, useState } from "react";
import { View, Text, SafeAreaView, ScrollView, ActivityIndicator, RefreshControl, Share } from "react-native";

import { COLORS, icons, SIZES } from "../../constants";
import useFetch from "@/hook/useFetch";
import { ScreenHeaderBtn } from "@/components";

const JobDetails = () => {
  const { back } = useRouter();

  const shareLinkHandler = async () => {};

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.lightWhite }}>
      <Stack.Screen
        options={{
          headerStyle: { backgroundColor: COLORS.lightWhite },
          headerShadowVisible: false,
          headerBackVisible: false,
          headerRight: () => <ScreenHeaderBtn iconUrl={icons.share} dimension="60%" handlePress={shareLinkHandler} />,
          headerLeft: () => <ScreenHeaderBtn iconUrl={icons.left} dimension="60%" handlePress={() => back()} />,
          title: "",
        }}
      />
    </SafeAreaView>
  );
};

export default JobDetails;
