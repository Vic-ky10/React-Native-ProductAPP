import { Image, ScrollView, Text, View } from "react-native";
import React from "react";

const DetailsScreen = ({ route }) => {
  const { product } = route.params;

  return (
    <ScrollView
      contentContainerStyle={{
        padding: 24,
        backgroundColor: "#f9fafb",
      }}
    >
      <View
        style={{
        
    
         
        }}
      >
        <Image
          source={{ uri: product.image }}
          style={{
            width: "100%",
            height: 240,
            resizeMode: "contain",
            marginBottom: 20,
          }}
        />

        <Text
          style={{
            fontSize: 28,
            fontWeight: "700",
            color: "#111827",
            marginBottom: 12,
          }}
        >
          {product.title}
        </Text>

        <Text
          style={{
            fontSize: 16,
            color: "#6b7280",
            textTransform: "capitalize",
            marginBottom: 10,
          }}
        >
          {product.category}
        </Text>

        <Text
          style={{
            fontSize: 24,
            fontWeight: "700",
            color: "#059669",
            marginBottom: 16,
          }}
        >
          ${product.price}
        </Text>

        <Text
          style={{
            fontSize: 16,
            lineHeight: 24,
            color: "#374151",
            marginBottom: 20,
          }}
        >
          {product.description}
        </Text>

        <View
          style={{
            backgroundColor: "#eef2ff",
            padding: 14,
            borderRadius: 14,
          }}
        >
          <Text style={{ fontSize: 16, color: "#312e81", fontWeight: "600" }}>
            Rating: {product.rating?.rate ?? "N/A"} / 5
          </Text>
          <Text style={{ fontSize: 14, color: "#4338ca", marginTop: 4 }}>
            {product.rating?.count ?? 0} reviews
          </Text>
        </View>
      </View>
    </ScrollView>
  );
};

export default DetailsScreen;

