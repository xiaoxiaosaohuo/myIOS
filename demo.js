import React, { Component } from 'react';
import { View, Image, ImageBackground, Text, ScrollView, StyleSheet } from 'react-native';



export default class Demo extends Component {
                 constructor(props) {
                   super(props);
                   this.state = {
                       zIndex:1000
                   };
                 }
                 onContentSizeChange = (contentWidth, contentHeight) => {
                   console.log(contentHeight);
                 };
                 onScrollBeginDrag = ()=>{
                    //  console.log(contentInset);
                    this.setState({ zIndex:0 });
                 }  
                 onScroll = (event)=>{
                     const y = event.nativeEvent.contentOffset.y;
                     this.setState({ zIndex: y>0?0:10000 });
                     console.log(event.nativeEvent.contentOffset) //垂直滚动距离        
                }

                 render() {
                   return <ScrollView style={styles.fill} onScroll={this.onScroll} stickyHeaderIndices={[0]}>
                       <View style={styles.header} />
                       <View style={{ ...styles.imageWrapper, zIndex: this.state.zIndex }}>
                         <ImageBackground source={require("./img.jpg")} style={{ height: 400 }}>
                           <View style={styles.content}>
                           <Text>圣诞节富兰克林开始的减肥</Text>
                           </View>
                         </ImageBackground>
                       </View>
                       <View style={styles.header} />
                     </ScrollView>;
                 }
               }
const styles = StyleSheet.create({
  fill: {
    flex: 1,
    backgroundColor: "red"
  },
  header: {
    height: 80,
    backgroundColor: "red"
  },
  imageWrapper: {
    flex: 1,
    top: -20
  }
});
