import { Stack, useLocalSearchParams, useRouter } from "expo-router";
import { useState } from "react";
import { View, Text, SafeAreaView, ScrollView, ActivityIndicator, RefreshControl, Share } from "react-native";

import { COLORS, icons, SIZES } from "../../constants";
import useFetch from "@/hook/useFetch";
import { JobTabs, ScreenHeaderBtn, Specifics } from "@/components";
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

  const shareLinkHandler = async () => {
    try {
      await Share.share({
        title: data[0].job_title,
        url: data[0]?.job_google_link ?? "https://careers.google.com/jobs/results/",
      });
    } catch (err) {
      console.error(err);
    }
  };
  const onRefresh = () => {};

  const displayTabContent = () => {
    switch (activeTab) {
      case "Qualifications":
        return <Specifics title="Qualifications" points={data[0].job_highlights?.Qualifications ?? ["N/A"]} />;

      case "About":
        return <JobAbout info={data[0].job_description ?? "No data provided"} />;

      case "Responsibilities":
        return <Specifics title="Responsibilities" points={data[0].job_highlights?.Responsibilities ?? ["N/A"]} />;

      default:
        return null;
    }
  };

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
              <Company
                companyLogo={data[0].employer_logo}
                jobTitle={data[0].job_title}
                companyName={data[0].employer_name}
                location={data[0].job_country}
              />
              <JobTabs tabs={tabs} activeTab={activeTab} setActiveTab={setActiveTab} />
              {displayTabContent()}
            </View>
          )}
        </ScrollView>
        {data && <JobFooter url={data[0]?.job_google_link ?? "https://careers.google.com/jobs/results/"} />}
      </>
    </SafeAreaView>
  );
};

export default JobDetails;
