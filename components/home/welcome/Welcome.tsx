import React, { useState } from "react";
import { View, Text, TextInput, FlatList, TouchableOpacity, Image, Pressable, Platform } from "react-native";

import styles from "./welcome.style";
import { useRouter } from "expo-router";
import { icons, SIZES } from "@/constants";

const jobTypes = ["Full-time", "Part-time", "Contractor"];

type WellcomePropsType = {
  searchTerm: string;
  setSearchTerm: Function;
  handleClick: Function;
};

const Welcome = ({ searchTerm, setSearchTerm, handleClick }: WellcomePropsType) => {
  const router = useRouter();
  const [activeJobType, setActiveJobType] = useState("Full-time");
  const JobBox = ({ title }: { title: string }) => (
    <TouchableOpacity
      style={styles.tab(activeJobType, title)}
      onPress={() => {
        setActiveJobType(title);
        router.push(`/search/${title}`);
      }}
    >
      <Text style={styles.tabText(activeJobType, title)}>{title}</Text>
    </TouchableOpacity>
  );

  return (
    <View>
      <View style={styles.container}>
        <Text style={styles.userName}>Hello 👋</Text>
        <Text style={styles.welcomeMessage}>Find your Perfect Job</Text>
      </View>
      <View style={styles.searchContainer}>
        <View style={styles.searchWrapper}>
          <TextInput placeholder="What are you looking for?" style={styles.searchInput} value={searchTerm} onChange={(text) => setSearchTerm(text)} />
        </View>
        <Pressable onPress={handleClick} style={styles.searchBtn}>
          <Image style={styles.searchBtnImage} resizeMode="contain" source={icons.search} />
        </Pressable>
      </View>
      <View style={styles.tabsContainer}>
        <FlatList
          data={jobTypes}
          contentContainerStyle={{
            columnGap: SIZES.small,
            flexDirection: Platform.OS == "android" ? "row-reverse" : "row",
          }}
          keyExtractor={(item) => item}
          horizontal
          renderItem={({ item }) => <JobBox title={item} />}
        />
      </View>
    </View>
  );
};

export default Welcome;
