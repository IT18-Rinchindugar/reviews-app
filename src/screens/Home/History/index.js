import React, { useState } from "react";
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Image,
} from "react-native";
import { Entypo } from "@expo/vector-icons";
import Scanner from "./assets/scanner.png";
import { SafeAreaView } from "react-native-safe-area-context";
import Header from "../../../components/Header";
import ScannedItems from "./ScannedItems";
const HistoryScreen = () => {
  const [active, setActive] = useState(1);
  return (
    <SafeAreaView style={styles.container}>
      <Header title="History" />
      <View style={styles.mainContainer}>
        <View style={styles.tabbars}>
          <TouchableOpacity
            activeOpacity={0.7}
            style={{
              height: 40,
              alignItems: "center",
              justifyContent: "center",
              backgroundColor: active === 1 ? "#fff" : "#BDBDBD",
              width: "49%",
              borderRadius: 8,
              margin: 2,
            }}
            onPress={() => setActive(1)}
          >
            <Text>Scanned</Text>
          </TouchableOpacity>
          <TouchableOpacity
            activeOpacity={0.7}
            style={{
              height: 40,
              alignItems: "center",
              justifyContent: "center",
              backgroundColor: active === 2 ? "#fff" : "#BDBDBD",
              width: "48%",
              borderRadius: 8,
              margin: 2,
            }}
            onPress={() => setActive(2)}
          >
            <Text>Reviewed</Text>
          </TouchableOpacity>
        </View>
        {active === 1 && <ScannedItems contentType="scanned" />}
        {active === 2 && <ScannedItems contentType="reviewed" />}
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  mainContainer: {
    flex: 1,
    marginHorizontal: 16,
  },
  tabbars: {
    flexDirection: "row",
    backgroundColor: "#BDBDBD",
    borderRadius: 8,
    justifyContent: "space-between",
    alignItems: "center",
  },
});

export default HistoryScreen;
