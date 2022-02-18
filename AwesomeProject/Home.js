import React from "react";
import { View, Text } from "react-native";
import { Link } from "react-router-native";
const Home = () => {
  return (
    <View >
    <Text>Programming with Mash</Text>
    <Link to="/products">
      <Text>Products</Text>
    </Link>
</View>
  );
};

export default Home;

 