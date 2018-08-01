/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {
  Platform, 
  StyleSheet,
  Text,
  View,
  NativeModules,
  SliderIOS,
  ActionSheetIOS,
  TouchableOpacity,
  SegmentedControlIOS,} from 'react-native';

import Checkbox from './checkbox';
const COLORS = {
  AZURE: '#007aff',
  LIGHT_GRAY: '#aaa', // 0.667 white
  WHITE: '#fff',
  CLEAR: 'transparent',
};
const ANIMATION_TYPES = {
  'stroke': 'Stroke',
  'fill': 'Fill',
  'bounce': 'Bounce',
  'flat': 'Flat',
  'one-stroke': 'One stroke',
  'fade': 'Fade',
};

type Props = {};
export default class App extends Component{
  constructor(props){
    super(props);
    this.state = {
      drawTypeIndex: 1,
      boxTypeIndex: 0,
      drawTypeSegmentEnabled: true,
      animationDuration: 0.5,
      lineWidth: 5,
      animationIndex: 2,
    };
  }
  render() {
    const {
      drawTypeIndex, boxTypeIndex,
      animationDuration, lineWidth, animationIndex,
      drawTypeSegmentEnabled,
    } = this.state;

    let tintColor, onTintColor, onFillColor, onCheckColor;
    if (drawTypeIndex === 0) {
      tintColor = COLORS.LIGHT_GRAY;
      onTintColor = COLORS.AZURE;
      onFillColor = COLORS.CLEAR;
      onCheckColor = COLORS.AZURE;
    }
    else {
      tintColor = COLORS.LIGHT_GRAY;
      onTintColor = COLORS.AZURE;
      onFillColor = COLORS.AZURE;
      onCheckColor = COLORS.WHITE;
    }
    return (
      <View style={styles.container}>
        <View style={styles.sliderContainer}>
          <Text style={styles.sliderLabel}>Animation duration</Text>
          <Checkbox
            style={styles.checkbox}
            lineWidth={lineWidth}
            boxType={['circle', 'square'][boxTypeIndex]}
            tintColor={tintColor}
            onTintColor={onTintColor}
            onFillColor={onFillColor}
            onCheckColor={onCheckColor}
            onAnimationType={Object.keys(ANIMATION_TYPES)[animationIndex]}
            offAnimationType={Object.keys(ANIMATION_TYPES)[animationIndex]}
            animationDuration={animationDuration}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
