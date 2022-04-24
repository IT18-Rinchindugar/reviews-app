import { Ionicons, Feather, SimpleLineIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  Image,
  ScrollView,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Header from "../../../../../components/Header";
import UserRatingFormModal from "../../UserRatingFormModal";
import Ratings from "../Ratings";

const ScannerResult = ({ type, data, productData }) => {
  const [isModalVisible, setModalVisible] = useState(false);
  const navigation = useNavigation();

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
            source={{ uri: productData.photoUrl }}
            style={{ width: 200, height: 200 }}
            resizeMode="contain"
          />
        </View>
        <View style={{ marginVertical: 16 }}>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Text style={{ fontWeight: "700", fontSize: 18 }}>
              Ratings & Reviews
            </Text>
            <TouchableOpacity
              onPress={() =>
                navigation.navigate("ReviewsDetail", {
                  productName: productData.productName,
                  data: productData,
                })
              }
            >
              <Text style={{ color: "#F2994A" }}>See all</Text>
            </TouchableOpacity>
          </View>
          <View
            style={{
              marginTop: 8,
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <View>
              <Text
                style={{ fontSize: 16, fontWeight: "700", color: "#F2994A" }}
              >
                {productData.ratingAVG}
                <Text> out of 5</Text>
              </Text>
              <Text
                style={{ fontSize: 16, fontWeight: "700", color: "#BDBDBD" }}
              >
                {productData?.reviews.length} rating
              </Text>
            </View>
            <View>
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <Feather name="chevron-up" size={20} color="#27AE60" />
                <Text style={{ color: "#27AE60" }}>{productData.positive}</Text>
              </View>
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <Feather name="chevron-down" size={20} color="#EB5757" />
                <Text style={{ color: "#EB5757" }}>{productData.negative}</Text>
              </View>
            </View>
          </View>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {productData &&
              productData?.reviews.map((review) => (
                <View
                  key={review.fullName}
                  style={[styles.detailContainer, styles.carouselItem]}
                >
                  <View>
                    <View
                      style={{ flexDirection: "row", alignItems: "center" }}
                    >
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
                        <Text
                          style={{ marginHorizontal: 4, fontWeight: "400" }}
                        >
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
          <TouchableOpacity
            style={{
              flexDirection: "row",
              marginVertical: 16,
              alignItems: "center",
            }}
            onPress={() => setModalVisible(true)}
          >
            <SimpleLineIcons name="note" size={20} color="#2F80ED" />
            <Text style={{ color: "#2F80ED", marginTop: 4, marginLeft: 4 }}>
              Write a Review
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
      <UserRatingFormModal
        isModalVisible={isModalVisible}
        setModalVisible={setModalVisible}
      />
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
