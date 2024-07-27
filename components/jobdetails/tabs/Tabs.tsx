import React from "react";
import { View, Text, FlatList, TouchableOpacity } from "react-native";

import styles from "./tabs.style";
import { SIZES } from "@/constants";

const TabButton = ({ name, activeTab, onHandleToggle }) => (
  <TouchableOpacity style={styles.btn(name, activeTab)} onPress={onHandleToggle}>
    <Text style={styles.btnText(name, activeTab)}>{name}</Text>
  </TouchableOpacity>
);

const Tabs = ({ tabs, activeTab, setActiveTab }) => {
  return (
    <View style={styles.container}>
      <FlatList
        data={tabs}
        horizontal
        showsHorizontalScrollIndicator={false}
        renderItem={({ item }) => <TabButton name={item} activeTab={activeTab} onHandleToggle={() => setActiveTab(item)} />}
        contentContainerStyle={{ columnGap: SIZES.small }}
        keyExtractor={(item) => item}
      />
    </View>
  );
};

export default Tabs;
