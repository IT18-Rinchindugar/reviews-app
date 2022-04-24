import React from "react";
import { StyleSheet, View, Text, TouchableOpacity, Image } from "react-native";
import logo from "../../assets/logo.png";

const ScannerBanner = ({ navigation }) => {
  return (
    <View style={styles.bannerContainer}>
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        <Image style={{ width: 100, height: 80 }} source={logo} />
        <View style={{ width: 200 }}>
          <Text style={{ fontSize: 18, fontWeight: "bold" }}>
            Barcode Scanner
          </Text>
          <Text style={{ fontSize: 12, marginTop: 4 }}>
            Бүртээгдэхүүнийг таних Barcode унших хэсэг
          </Text>
        </View>
      </View>
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
    marginTop: 16,
  },
});

export default ScannerBanner;
