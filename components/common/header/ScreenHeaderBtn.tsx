import React from "react";
import { TouchableOpacity, Image } from "react-native";

import styles from "./screenheader.style";

type ScreenBtnPropsType = {
  iconUrl: string;
  dimension: string;
  handlePress: Function;
};

const ScreenHeaderBtn = ({
  iconUrl,
  dimension,
  handlePress,
}: ScreenBtnPropsType) => {
  return (
    <TouchableOpacity style={styles.btnContainer} onPress={handlePress}>
      <Image source={iconUrl} style={styles.btnImg(dimension)} resizeMode="cover" />
    </TouchableOpacity>
  );
};

export default ScreenHeaderBtn;
