import { SafeAreaView, ScrollView, StyleSheet, Text } from "react-native";
import React from "react";

import { COLORS, icons, SIZES } from "@/constants";

import {
  Nearbyjobs,
  Welcome,
  ScreenHeaderBtn,
  Popularjobs,
} from "../components";
import { StatusBar } from "expo-status-bar";
import { options } from "@/config/http";

const Home = () => {
  console.log(options);
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="dark" />
      <Text>awdawdwa</Text>
      {/* <ScrollView
        style={styles.scrollView}
        showsVerticalScrollIndicator={false}
      >
        <Welcome />
      </ScrollView> */}
    </SafeAreaView>
  );
};

export default Home;

//   <Nearbyjobs />
//   <Popularjobs />

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollView: { flex: 1, padding: SIZES.medium },
});
