import React from "react";
import { View, Text } from "react-native";
import { Link } from "react-router-native";
const Products = () => {
  return (
  <View>
     <Link to="/" >
              <Text>Home</Text>
      </Link>
    <Text>Product 1</Text>
    <Text>Product 2</Text>
   
  </View>
  );
};
export default Products;
