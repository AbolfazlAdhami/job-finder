import { useState } from "react";
import { useRouter } from "expo-router";
import { View, Text, TouchableOpacity, FlatList, ActivityIndicator } from "react-native";

import styles from "./popularjobs.style";
import useFetch from "@/hook/useFetch";
import { COLORS, SIZES } from "@/constants";
import PopularJobCard from "@/components/common/cards/popular/PopularJobCard";

const Popularjobs = () => {
  const { push } = useRouter();
  const { data, isLoading, error } = useFetch("search", { query: "React developer", num_pages: "1" });

  const [selectedJob, setSelectedJob] = useState();

  const handleCardPress = (item) => {
    push(`/job-details/${item.job_id}`);
    setSelectedJob(item.job_id);
  };
  console.log(error, "[errore]", data, isLoading);
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Popularjobs</Text>
        <TouchableOpacity>
          <Text style={styles.headerBtn}>Show all</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.cardsContainer}>
        {isLoading ? (
          <ActivityIndicator size="large" color={COLORS.tertiary} />
        ) : error ? (
          <Text style={{ textAlign: "center" }}>Opps!! Something went wrong Check</Text>
        ) : (
          <FlatList
            data={data}
            renderItem={({ item }) => <PopularJobCard item={item} handleCardPress={handleCardPress} selectedJob={selectedJob} />}
            keyExtractor={(item) => item.job_id}
            contentContainerStyle={{ columnGap: SIZES.medium }}
            horizontal
            showsHorizontalScrollIndicator={false}
          />
        )}
      </View>
    </View>
  );
};

export default Popularjobs;
