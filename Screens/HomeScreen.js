import { FlatList, Text, TouchableOpacity, View } from "react-native";
import React from "react";

const products = [
  { id: "1", name: "Laptop", price: "$1000" },
  { id: "2", name: "Phone", price: "$600" },
  { id: "3", name: "Headphones", price: "$200" },
  { id: "4", name: "Keyboard", price: "$150" },
];

const HomeScreen = ({ navigation }) => {
  const renderItem = ({ item }) => {
    return (
      <TouchableOpacity
        onPress={() => navigation.navigate("Details", { product: item })}
        style={{
          padding: 20,
          borderBottomWidth: 1,
        }}
      >
        <Text style={{ fontSize: 18 }}>{item.name}</Text>

        <Text>{item.price}</Text>
      </TouchableOpacity>
    );
  };

  return (
    <View>
      <FlatList
        data={products}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

export default HomeScreen;
