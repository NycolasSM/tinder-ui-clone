import React from "react";
import { View, Text } from "react-native";
import { foods as foodsArray } from "./data";
import { useState } from "react";
import Card from "../Card";

const index = () => {
  const [foods, setFoods] = useState(foodsArray);

  return (
    <View>
      {foods.map(({ name, source }) => {
        return <Card key={name} name={name} source={source} />;
      })}
    </View>
  );
};

export default index;
