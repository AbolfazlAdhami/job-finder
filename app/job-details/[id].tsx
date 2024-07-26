import { Stack, useLocalSearchParams, useRouter } from "expo-router";
import { useCallback, useState } from "react";
import { View, Text, SafeAreaView, ScrollView, ActivityIndicator, RefreshControl, Share } from "react-native";

import { COLORS, icons, SIZES } from "../../constants";
import useFetch from "@/hook/useFetch";
import { JobTabs, ScreenHeaderBtn } from "@/components";
import { Company, JobAbout, JobFooter } from "@/components";
const tabs = ["About", "Qualifications", "Responsibilities"];

const JobDetails = () => {
  const { back } = useRouter();
  const { id } = useLocalSearchParams();

  const [activeTab, setActiveTab] = useState(tabs[0]);
  const [refreshing, setRefreshing] = useState(false);

  const { data, isLoading, error } = useFetch("job-details", {
    job_id: id,
  });
  console.log(data, isLoading, error);

  const shareLinkHandler = async () => {};
  const onRefresh = () => {};

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
      <>
        <ScrollView showsVerticalScrollIndicator={false} refreshControl={<RefreshControl onRefresh={onRefresh} refreshing={refreshing} />}>
          {isLoading ? (
            <ActivityIndicator size={"large"} color={COLORS.primary} />
          ) : error ? (
            <Text style={{ textAlign: "center" }}>Opps!! Something went wrong Check</Text>
          ) : data.length === 0 ? (
            <Text style={{ textAlign: "center" }}>No Data Available</Text>
          ) : (
            <View style={{ paddingBottom: 100, padding: SIZES.medium }}>
              <Company />
              <JobTabs />
            </View>
          )}
        </ScrollView>
      </>
    </SafeAreaView>
  );
};

export default JobDetails;
