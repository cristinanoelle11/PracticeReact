/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

 import React, { Component } from 'react';
 import { NativeRouter, Routes, Route, Link } from "react-router-native";
import Home from "./Home"
import Products from "./Products";

import {
  StyleSheet,
  View,
  Text,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

 const App = () =>  {
  
      return (
        <NativeRouter>
        <View style={styles.container}>
          <View style={styles.nav}> 
          </View>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/products" element={<Products />}></Route>
        </Routes>
        </View>
      </NativeRouter>
      );
  
};
// const App = () => {
  

//   return (
//     <NativeRouter>
//         <View style={styles.container}>
//           <Switch>
//             <Route exact path="/" component={Home} />
//             <Route path="/products" component={Products} />
//           </Switch>
//         </View>
//       </NativeRouter>
           
//   );
// };

const styles = StyleSheet.create({
  container: {
    marginTop: 25,
    padding: 10
  },
  header: {
    fontSize: 20
  },
  nav: {
    flexDirection: "row",
    justifyContent: "space-around"
  },
  navItem: {
    flex: 1,
    alignItems: "center",
    padding: 10
  },
  subNavItem: {
    padding: 5
  },
  topic: {
    textAlign: "center",
    fontSize: 15
  }
});

export default App;