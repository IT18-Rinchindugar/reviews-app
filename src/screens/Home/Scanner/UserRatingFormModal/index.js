import React from "react";
import {
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { showMessage } from "react-native-flash-message";
import Modal from "react-native-modal";
import { Rating } from "react-native-ratings";
import { SafeAreaView } from "react-native-safe-area-context";

const UserRatingFormModal = ({ isModalVisible, setModalVisible }) => {
  return (
    <SafeAreaView style={styles.container}>
      <Modal
        isVisible={isModalVisible}
        style={{
          backgroundColor: "#fff",
          margin: 0,
          justifyContent: "flex-start",
          padding: 16,
        }}
      >
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            height: 50,
          }}
        >
          <TouchableOpacity onPress={() => setModalVisible(false)}>
            <Text style={{ color: "#2F80ED" }}>Cancel</Text>
          </TouchableOpacity>
          <Text>Write a Review</Text>
          <TouchableOpacity
            onPress={() => {
              showMessage({
                message: "Амжилттай",
                description: "Бүртээгдэхүүний сэтгэгдэл илгээгдлээ",
                type: "success",
                duration: 2000,
              });

              setModalVisible(false);
            }}
          >
            <Text style={{ color: "#219653" }}>Илгээх</Text>
          </TouchableOpacity>
        </View>
        <View
          style={{
            marginTop: 20,
            alignItems: "center",
          }}
        >
          <Rating
            size={24}
            onClick={() => {}}
            ratingValue={5} /* Available Props */
          />
          <Text style={{ marginTop: 4, color: "#E0E0E0", fontWeight: "500" }}>
            Tap a Star to Rate
          </Text>
        </View>
        <ScrollView>
          <View
            style={{
              marginTop: 20,
            }}
          >
            <Text style={{ fontWeight: "700", fontSize: 16 }}>Review</Text>
            <TextInput
              multiline
              returnKeyType="default"
              placeholderTextColor="#444444"
              style={[styles.textInputStyle, styles.descriptionStyle]}
            />
          </View>
        </ScrollView>
      </Modal>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  textInputStyle: {
    borderRadius: 8,
    backgroundColor: "#F2F2F2",
    fontStyle: "normal",
    fontWeight: "400",
    fontSize: 16,
    color: "#000",
    height: 40,
    padding: 12,
    marginTop: 8,
  },
  descriptionStyle: {
    height: 200,
    paddingVertical: 20,
  },
});

export default UserRatingFormModal;
