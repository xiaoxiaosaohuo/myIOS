import React from "react";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Animated,
  SafeAreaView,
  Dimensions,
  PixelRatio
} from "react-native";
import normalize from "./ p2d";
export default class App extends React.Component {
  state = {
    y: new Animated.Value(0)
  };

  render() {
    const { y } = this.state;
    return (
      <SafeAreaView style={styles.root}>
        <View style={styles.container}>
          <Text style={styles.text}>7878</Text>
        </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    margin: 16
  },
  container: {
    flex: 1
  },
  text: {
    fontSize: normalize(12),
    // paddingVertical: 2,
    // lineHeight:20,
    // height:20
  }
});
