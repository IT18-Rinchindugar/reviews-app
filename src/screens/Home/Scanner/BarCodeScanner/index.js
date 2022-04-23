import { BarCodeScanner } from "expo-barcode-scanner";
import React, { useEffect, useState } from "react";
import { Text, View, StyleSheet, Image, Dimensions } from "react-native";
import ScannerResult from "../components/ScannerResult";
import ScanningImage from "../assets/scanning.png";
import Header from "../../../../components/Header";
import { SafeAreaView } from "react-native-safe-area-context";

const { width } = Dimensions.get("window");
const qrSize = width * 0.8;

const BarCodeScannerScreen = () => {
  const [hasPermission, setHasPermission] = useState(null);
  const [scanned, setScanned] = useState(false);
  const [scannedData, setScannedData] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    (async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status === "granted");
    })();
  }, []);

  const handleBarCodeScanned = ({ type, target, data }) => {
    setScanned(true);
    setScannedData({ type, target, data });
  };

  if (hasPermission === null) {
    return <Text>Requesting for camera permission</Text>;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }

  return (
    <SafeAreaView style={styles.container}>
      {!scanned && (
        <BarCodeScanner
          onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
          style={[StyleSheet.absoluteFillObject, { marginTop: 30 }]}
        >
          <Header back backButtonColor="#fff" title="" />
          <View style={styles.barCodeStyle}>
            <Image style={styles.qr} source={ScanningImage} />
          </View>
        </BarCodeScanner>
      )}
      {scanned && scannedData && (
        <ScannerResult type={scannedData.type} data={scannedData.data} />
      )}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
  },
  barCodeStyle: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 8,
  },
  qr: {
    width: qrSize,
    height: qrSize,
  },
});

export default BarCodeScannerScreen;
