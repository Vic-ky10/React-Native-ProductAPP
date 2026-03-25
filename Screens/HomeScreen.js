import {
  ActivityIndicator,
  FlatList,
  Image,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useEffect, useState } from "react";
import { Button } from "react-native-web";

const HomeScreen = ({ navigation }) => {
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const fetchProducts = async () => {
    try {
      setLoading(true);
      setError("");

      const res = await fetch("https://fakestoreapi.com/products");
      if (!res.ok) {
        throw new Error("Failed to fetch products");
      }

      const data = await res.json();
      setProducts(data);
    } catch (fetchError) {
      setError(fetchError.message || "Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const filteredProducts = products.filter((item) =>
    item.title.toLowerCase().includes(search.toLowerCase()),
  );

  const renderItem = ({ item }) => {
    return (
      <TouchableOpacity
        onPress={() => navigation.navigate("Details", { product: item })}
        style={{
          marginBottom: 12,
          padding: 16,
          borderRadius: 16,
          borderBottomWidth: 1,
          borderBottomColor: "#e5e7eb",
          flexDirection: "row",
          gap: 14,
          alignItems: "center",
        }}
      >
        <Image
          source={{ uri: item.image }}
          style={{ width: 72, height: 72, resizeMode: "contain" }}
        />

        <View style={{ flex: 1 }}>
          <Text style={{ fontSize: 17, fontWeight: "700", marginBottom: 6 }}>
            {item.title}
          </Text>

          <Text style={{ color: "#6b7280", marginBottom: 6 }}>
            {item.category}
          </Text>

          <Text style={{ fontSize: 16, color: "#111827", fontWeight: "600" }}>
            ${item.price}
          </Text>
        </View>
      </TouchableOpacity>
    );
  };

  if (loading) {
    return (
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "#f3f4f6",
        }}
      >
        <ActivityIndicator size="large" color="#111827" />
        <Text style={{ marginTop: 12 }}>Loading products...</Text>
      </View>
    );
  }

  if (error) {
    return (
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
          padding: 24,
          backgroundColor: "#f3f4f6",
        }}
      >
        <Text
          style={{
            fontSize: 16,
            color: "#b91c1c",
            marginBottom: 12,
            textAlign: "center",
          }}
        >
          {error}
        </Text>
        <TouchableOpacity
          onPress={fetchProducts}
          style={{
            backgroundColor: "#111827",
            paddingHorizontal: 18,
            paddingVertical: 12,
            borderRadius: 12,
          }}
        >
          <Text style={{ color: "#fff", fontWeight: "600" }}>Retry</Text>
        </TouchableOpacity>
      </View>
    );
  }

  return (
    <>
      <View
        style={{ justifyContent: "center", alignItems: "center", padding: 20 }}
      >
        <Button
          title="UseNavigations"
          onPress={() =>navigation.navigate("UseRef")}
        />
      </View>
      <View style={{ flex: 1, backgroundColor: "#f3f4f6", padding: 16 }}>
        <Text style={{ fontSize: 28, fontWeight: "700", marginBottom: 12 }}>
          Product Catalog
        </Text>

        <FlatList
          data={filteredProducts}
          renderItem={renderItem}
          keyExtractor={(item) => item.id.toString()}
          showsVerticalScrollIndicator={false}
          ListEmptyComponent={
            <Text
              style={{ textAlign: "center", color: "#6b7280", marginTop: 32 }}
            >
              No products match your search.
            </Text>
          }
        />
      </View>
    </>
  );
};

export default HomeScreen;
