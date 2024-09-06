import { StyleSheet, Platform } from "react-native";

import { FONT, SIZES, COLORS } from "../../../constants";

const styles = StyleSheet.create({
  container: {
    marginVertical: SIZES.xxLarge,
  },
  header: {
    flexDirection: Platform.OS === "android" ? "row-reverse" : "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  headerTitle: {
    fontSize: SIZES.large,
    fontFamily: FONT.medium,
    color: COLORS.primary,
  },
  headerBtn: {
    fontSize: SIZES.medium,
    fontFamily: FONT.medium,
    color: COLORS.tertiary,
  },
  cardsContainer: {
    marginTop: SIZES.medium,
  },
});

export default styles;
