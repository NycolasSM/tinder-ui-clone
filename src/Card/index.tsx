import React from "react";
import { View, Text, Image } from "react-native";

import { styles } from "./styles";

const Card = ({ name, source }) => {
  return (
    <View style={styles.container}>
      <Image source={source} style={styles.image}/>
      <Text style={styles.name}>{name}</Text>
    </View>
  );
};

export default Card;
