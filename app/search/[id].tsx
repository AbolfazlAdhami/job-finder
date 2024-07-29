import { ActivityIndicator, FlatList, Image, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { useEffect, useState } from "react";
import { Stack, useLocalSearchParams, useRouter } from "expo-router";
import { COLORS, icons, SIZES } from "@/constants";
import { NearbyJobCard, ScreenHeaderBtn } from "@/components";
import { axiosConfig } from "@/utils";
import styles from "@/styles/search";

export default function Search() {
  const { id } = useLocalSearchParams();
  const router = useRouter();

  const [searchResult, setSearchResult] = useState<any>([]);
  const [searchLoader, setSearchLoader] = useState<boolean>(false);
  const [searchError, setSearchError] = useState<any>(null);
  const [page, setPage] = useState<number>(1);

  const handleSearch = async () => {
    setSearchResult([]);
    setSearchLoader(true);
    try {
      const res = await axiosConfig.get("search", {
        params: {
          query: id,
          page: page.toString(),
        },
      });
      if (res.status === 200) {
        setSearchResult(() => [...res.data.data]);
        console.log(res.data.data, "{res}");
      }
    } catch (error) {
      console.log(error);
      setSearchError(error);
    } finally {
      setSearchLoader(false);
    }
  };

  const handlePagination = (direction: any) => {
    if (direction === "left" && page > 1) {
      setPage(page - 1);
      handleSearch();
    } else if (direction === "right") {
      setPage(page + 1);
      handleSearch();
    }
  };

  useEffect(() => {
    handleSearch();
  }, []);
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.lightWhite }}>
      <Stack.Screen
        options={{
          headerStyle: { backgroundColor: COLORS.lightWhite },
          headerShadowVisible: false,
          headerBackVisible: false,
          headerLeft: () => <ScreenHeaderBtn iconUrl={icons.left} dimension="60%" handlePress={() => router.back()} />,
          title: "",
        }}
      />
      <FlatList
        data={searchResult}
        keyExtractor={(item) => item.job_id}
        contentContainerStyle={{ rowGap: SIZES.medium, padding: SIZES.medium }}
        renderItem={({ item }) => <NearbyJobCard job={item} />}
        ListHeaderComponent={() => (
          <>
            <View style={styles.container}>
              <Text style={styles.searchTitle}>{id}</Text>
              <Text style={styles.noOfSearchedJobs}>Job Opportunities</Text>
            </View>
            <View style={styles.loaderContainer}>
              {searchLoader ? <ActivityIndicator /> : searchError && <Text style={{ textAlign: "center" }}>Opps!! Something went wrong Check</Text>}
            </View>
          </>
        )}
        ListFooterComponent={() => (
          <View style={styles.footerContainer}>
            <TouchableOpacity style={styles.paginationButton} onPress={() => handlePagination("left")}>
              <Image source={icons.chevronLeft} style={styles.paginationImage} resizeMode="contain" />
            </TouchableOpacity>
            <View style={styles.paginationTextBox}>
              <Text style={styles.paginationText}>{page}</Text>
            </View>
            <TouchableOpacity style={styles.paginationButton} onPress={() => handlePagination("right")}>
              <Image source={icons.chevronRight} style={styles.paginationImage} resizeMode="contain" />
            </TouchableOpacity>
          </View>
        )}
      />
    </SafeAreaView>
  );
}
