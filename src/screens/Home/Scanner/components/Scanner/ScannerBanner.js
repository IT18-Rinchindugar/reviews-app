import React from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";

const ScannerBanner = ({ navigation }) => {
  return (
    <View style={styles.bannerContainer}>
      <Text>Barcode Scanner</Text>
      <TouchableOpacity
        activeOpacity={0.7}
        style={styles.bannerButton}
        onPress={() => navigation.navigate("BarCodeScanner")}
      >
        <Text style={styles.bannerText}>Scan Barcodes</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  bannerContainer: {
    padding: 10,
    borderRadius: 10,
    backgroundColor: "#fff",
  },
  bannerText: {
    fontWeight: "700",
    fontSize: 18,
    color: "#fff",
  },
  bannerButton: {
    width: "100%",
    borderRadius: 10,
    height: 50,
    backgroundColor: "#2ED279",
    justifyContent: "center",
    alignItems: "center",
  },
});

export default ScannerBanner;
