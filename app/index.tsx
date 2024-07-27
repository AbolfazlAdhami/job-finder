import { useState } from "react";
import { SafeAreaView, ScrollView, StyleSheet } from "react-native";
import { useRouter } from "expo-router";
import { COLORS, SIZES } from "@/constants";
import { Nearbyjobs, Popularjobs, Welcome } from "@/components";
import { StatusBar } from "expo-status-bar";

const Home = () => {
  const router = useRouter();
  const [searchTerm, setSearchTerm] = useState<string>("");

  const handleSearch = () => {
    if (searchTerm.trim() !== "") {
      router.push(`/search/${searchTerm}`);
    }
  };
  return (
    <SafeAreaView style={style.container}>
      <StatusBar style="light" />
      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={style.scrollContainer} scrollEnabled>
        <Welcome searchTerm={searchTerm} setSearchTerm={setSearchTerm} handleClick={handleSearch} />
        <Popularjobs />
        <Nearbyjobs />
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;

const style = StyleSheet.create({
  container: {
    backgroundColor: COLORS.lightWhite,
    paddingBottom: SIZES.medium,
    flex: 1,
  },
  scrollContainer: { padding: SIZES.medium, paddingBottom: SIZES.medium, overflow: "scroll" },
});
