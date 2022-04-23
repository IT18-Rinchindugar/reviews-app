import { Ionicons } from "@expo/vector-icons";
import React from "react";
import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  Image,
  ScrollView,
} from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { SafeAreaView } from "react-native-safe-area-context";
import Header from "../../../../../components/Header";
import Ratings from "../Ratings";

const ScannerResult = ({ type, data }) => {
  const reviewData = [
    {
      fullName: "John Armstrong",
      reviewed: "Lebara Mobile (UK)",
      review:
        "“As this website sells items which might be missing parts, they describe this on the website but fail to show this on your account and emails when something goes...”",
      rating: 5,
    },
    {
      fullName: "John Armstrong",
      reviewed: "Lebara Mobile (UK)",
      review:
        "“Beautiful, easy, fast service, grandparents loved them, definately recommended and will use again, Thankyou so much A+++++”",
      rating: 3,
    },
    {
      fullName: "Rita Maria Ballnus",
      reviewed: "DHL",
      review:
        "“As this website sells items which might be missing parts, they describe this on the website but fail to show this on your account and emails when something goes...”",
      rating: 2,
    },
  ];
  const renderType = type.split(".");
  const imagePath =
    "https://s3-prd-hkp-ecommerce-01.s3.ap-southeast-1.amazonaws.com/ecom-prod/uploads/20210608095037/A2413_BMW_770_500_500_case_x24.jpg";
  const images = [{ url: imagePath }];
  return (
    <SafeAreaView>
      <Header back title="Scanner Result" />
      <ScrollView
        style={styles.contentContainer}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.detailContainer}>
          <View>
            <Text style={{ fontSize: 12 }}>
              {renderType[renderType.length - 1]}
            </Text>
            <Text style={{ marginTop: 2, color: "#F2994A" }}>{data}</Text>
          </View>
          <TouchableOpacity style={styles.copyButton} onPress={() => {}}>
            <Ionicons name="ios-copy-outline" color="#F2994A" size={16} />
          </TouchableOpacity>
        </View>
        <View style={[styles.detailContainer, styles.mainContainer]}>
          {/* <ImageViewer imageUrls={images} style={{ width: 200, height: 200 }} /> */}
          <Image
            source={{ uri: imagePath }}
            style={{ width: 200, height: 200 }}
          />
        </View>
        <View style={{ marginVertical: 16 }}>
          <Text style={{ fontWeight: "700", fontSize: 18 }}>Reviews</Text>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {reviewData.map((review) => (
              <View
                key={review.fullName}
                style={[styles.detailContainer, styles.carouselItem]}
              >
                <View>
                  <View style={{ flexDirection: "row", alignItems: "center" }}>
                    <Image
                      source={{
                        uri: "https://user-images.trustpilot.com/6262794dad301800124141d5/64x64.png",
                      }}
                      style={{ width: 40, height: 40, borderRadius: 20 }}
                    />
                    <View style={{ marginLeft: 8 }}>
                      <Ratings count={review.rating} />
                    </View>
                  </View>
                  <View style={{ marginTop: 16 }}>
                    <Text
                      style={{
                        fontWeight: "600",
                        color: "#1b1b21",
                      }}
                    >
                      {review.fullName}
                      <Text style={{ marginHorizontal: 4, fontWeight: "400" }}>
                        {" "}
                        reviewed{" "}
                      </Text>
                      <Text style={{ fontWeight: "600", color: "#1b1b21" }}>
                        {review.reviewed}
                      </Text>
                    </Text>
                  </View>
                  <View style={{ marginTop: 16 }}>
                    <Text
                      style={{
                        fontWeight: "600",
                        color: "#1b1b21",
                      }}
                    >
                      {review.review}
                    </Text>
                  </View>
                </View>
              </View>
            ))}
          </ScrollView>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  contentContainer: {
    margin: 16,
  },
  detailContainer: {
    flexDirection: "row",
    borderRadius: 8,
    padding: 16,
    backgroundColor: "#fff",
    justifyContent: "space-between",
    alignItems: "center",
  },
  copyButton: {
    backgroundColor: "#E0E0E0",
    padding: 10,
    borderRadius: 24,
    justifyContent: "center",
    alignItems: "center",
  },
  mainContainer: {
    marginTop: 16,
  },
  carouselItem: {
    flexDirection: "row",
    borderRadius: 8,
    padding: 16,
    backgroundColor: "#fff",
    justifyContent: "space-between",
    alignItems: "flex-start",
    marginTop: 16,
    marginRight: 16,
    width: 300,
  },
});

export default ScannerResult;
