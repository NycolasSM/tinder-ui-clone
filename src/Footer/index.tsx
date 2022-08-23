import React from "react";
import { View } from "react-native";
import RoundButton from "../RoundButton";
import { COLORS } from "../utils/constants";
import { styles } from "./styles";

const Footer = () => {
  return (
    <View style={styles.container}>
      <RoundButton name="times" size={40} color={COLORS.nope} />
      <RoundButton name="heart" size={34} color={COLORS.like} />
    </View>
  );
};

export default Footer;
