import React from 'react'
import { View, Text, TouchableOpacity, ActivityIndicator, FlatList } from "react-native";

import styles from "./nearbyjobs.style";
import useFetch from "@/hook/useFetch";
import { COLORS } from "@/constants";
import NearbyJobCard from "@/components/common/cards/nearby/NearbyJobCard";

const Nearbyjobs = () => {
  const { data, isLoading, error } = useFetch("search", { query: "React Native developer", num_pages: "1" });

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Nearby Jobs</Text>
        <TouchableOpacity>
          <Text style={styles.headerBtn}>Show all</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.cardsContainer}>
        {isLoading ? (
          <ActivityIndicator size={"large"} color={COLORS.primary} />
        ) : error ? (
          <Text style={{ textAlign: "center" }}>Opps!! Something went wrong Check</Text>
        ) : (
          <FlatList data={data} keyExtractor={(item) => item.job_id} renderItem={({ item }) => <NearbyJobCard job={item} />} />
        )}
      </View>
    </View>
  );
};

export default Nearbyjobs