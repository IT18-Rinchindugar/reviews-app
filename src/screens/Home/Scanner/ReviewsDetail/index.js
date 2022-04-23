import { useNavigation } from "@react-navigation/native";
import { Ionicons, Feather, SimpleLineIcons } from "@expo/vector-icons";
import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Image,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Header from "../../../../components/Header";
import Ratings from "../components/Ratings";
import UserRatingFormModal from "../UserRatingFormModal";

const ReviewsDetail = ({ route }) => {
  const { productName } = route.params;
  const navigation = useNavigation();
  const [isModalVisible, setModalVisible] = useState(false);
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
  return (
    <SafeAreaView style={styles.container}>
      <Header back title={productName} />
      <View style={styles.contentContainer}>
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
              style={{
                flexDirection: "row",
                alignItems: "center",
              }}
              onPress={() => setModalVisible(true)}
            >
              <SimpleLineIcons name="note" size={16} color="#2F80ED" />
              <Text style={{ color: "#2F80ED", marginLeft: 4 }}>
                Write a Review
              </Text>
            </TouchableOpacity>
          </View>
          <View
            style={{
              marginVertical: 8,
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <View>
              <Text
                style={{ fontSize: 16, fontWeight: "700", color: "#F2994A" }}
              >
                4.6
                <Text> out of 5</Text>
              </Text>
              <Text
                style={{ fontSize: 16, fontWeight: "700", color: "#BDBDBD" }}
              >
                16 rating
              </Text>
            </View>
            <View>
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <Feather name="chevron-up" size={20} color="#27AE60" />
                <Text style={{ color: "#27AE60" }}>10</Text>
              </View>
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <Feather name="chevron-down" size={20} color="#EB5757" />
                <Text style={{ color: "#EB5757" }}>6</Text>
              </View>
            </View>
          </View>
          <ScrollView showsVerticalScrollIndicator={false}>
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
            <View height={200} />
          </ScrollView>
        </View>
        <UserRatingFormModal
          isModalVisible={isModalVisible}
          setModalVisible={setModalVisible}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  contentContainer: {
    marginHorizontal: 16,
  },
  detailContainer: {
    flexDirection: "row",
    borderRadius: 8,
    padding: 16,
    backgroundColor: "#fff",
    justifyContent: "space-between",
    alignItems: "center",
  },
  carouselItem: {
    flexDirection: "row",
    borderRadius: 8,
    padding: 16,
    backgroundColor: "#fff",
    justifyContent: "space-between",
    alignItems: "flex-start",
    marginTop: 16,
  },
});

export default ReviewsDetail;
