import { View, Text } from "react-native";
import React from "react";
import { useRoute } from "@react-navigation/native";

export default function JobSearch() {
  const { params } = useRoute();

  return (
    <View>
      <Text>{params?.id}</Text>
    </View>
  );
}
