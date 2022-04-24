import React from "react";
import { View, StyleSheet, ScrollView } from "react-native";
import ScannerBanner from "../components/Scanner/ScannerBanner";
import { SafeAreaView } from "react-native-safe-area-context";
import Header from "../../../../components/Header";

const ScannerBaseScreen = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <Header title="Scanner" />
      <ScrollView style={styles.mainContainer}>
        <ScannerBanner navigation={navigation} />
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  mainContainer: {
    margin: 16,
  },
});

export default ScannerBaseScreen;
