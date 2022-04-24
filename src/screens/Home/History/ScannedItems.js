import { Entypo } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import axios from "axios";
import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  Image,
  ActivityIndicator,
} from "react-native";
import Scanner from "./assets/scanner.png";

const ScannedItems = ({ contentType }) => {
  const navigation = useNavigation();
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const fetchData = async (type) => {
    const res = await axios.get(
      `https://json-server-123456789.herokuapp.com/${type}`
    );
    setData(res.data);
    setLoading(false);
  };

  useEffect(async () => {
    await fetchData(contentType);
  }, [contentType]);

  if (loading) {
    return (
      <View style={{ marginVertical: 16 }}>
        <ActivityIndicator />
      </View>
    );
  }

  return (
    <ScrollView>
      {data &&
        data.length > 0 &&
        data.map((d) => (
          <TouchableOpacity
            onPress={() =>
              navigation.navigate("ReviewsDetail", {
                productName: d.productName,
              })
            }
            activeOpacity={0.7}
            style={{
              marginTop: 16,
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
              backgroundColor: "#fff",
              borderRadius: 8,
              paddingHorizontal: 8,
            }}
          >
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <Image source={Scanner} style={{ width: 60, height: 70 }} />
              <View>
                <Text style={{ color: "#F2994A" }}>{d.id}</Text>
                <Text>Barcode</Text>
              </View>
            </View>
            <Entypo name="chevron-right" size={24} color="black" />
          </TouchableOpacity>
        ))}
    </ScrollView>
  );
};

export default ScannedItems;
