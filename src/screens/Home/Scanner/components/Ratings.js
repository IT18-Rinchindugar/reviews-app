import { AntDesign } from "@expo/vector-icons";
import React from "react";
import { View } from "react-native";

const Ratings = ({ count }) => {
  return (
    <View style={{ flexDirection: "row" }}>
      <AntDesign
        name="star"
        size={20}
        color={count >= 1 ? "#F2994A" : "#E0E0E0"}
      />
      <AntDesign
        name="star"
        size={20}
        color={count >= 2 ? "#F2994A" : "#E0E0E0"}
      />
      <AntDesign
        name="star"
        size={20}
        color={count >= 3 ? "#F2994A" : "#E0E0E0"}
      />
      <AntDesign
        name="star"
        size={20}
        color={count >= 4 ? "#F2994A" : "#E0E0E0"}
      />
      <AntDesign
        name="star"
        size={20}
        color={count >= 5 ? "#F2994A" : "#E0E0E0"}
      />
    </View>
  );
};

export default Ratings;
