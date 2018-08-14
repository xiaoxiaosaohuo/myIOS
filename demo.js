import React, { Component } from 'react'
import {
    StyleSheet,
    View,
    Image,
    Dimensions,
    Platform,
    Animated
  } from 'react-native';
import HomeHeader from "./header";
const deviceWidth = Dimensions.get("window").width;

export default class Home extends Component {
    constructor(props){
        super(props);
        this.state = {
            scrollY:new Animated.Value(0)
        };
    }
    componentDidMount(){
    }
    render() {
        const {
            scrollY
        } =this.state;
        const imageOpacity = scrollY.interpolate({
            inputRange: [0,10,20,30,40],
            outputRange: [0,0.1,0.2,0.5,1],
            extrapolate: 'clamp'
          });
          const backgroundTranslate = scrollY.interpolate({
            inputRange: [-1000,-600,-500,-400,-300,0, 100,4000],
            outputRange:[-1000,-600,-500,-400,-300,-500,-600,-4000],
            extrapolate: 'clamp'
          });
        return (
            <View style={styles.fill}>
                <HomeHeader 
                    // style={{backgroundColor:"#25DAF4"}}
                >
                </HomeHeader>
                <Animated.View style={[styles.bluebackground,{ transform: [{ translateY: backgroundTranslate}] }]}/>
                <View 
                style={styles.fullScreen}
                >   
                <Animated.View style={[styles.stickyHeader,{opacity:imageOpacity}]}>
                    <View style={[styles.stickyHeaderInner]}></View>
                </Animated.View>
                <Animated.ScrollView 
                style={styles.container}
                onScroll = {Animated.event(
                    [{ nativeEvent: { contentOffset: { y: this.state.scrollY } } }],
                    {useNativeDriver: true}
                  )}
                    scrollEventThrottle={1}
                >
                    
                    <Image
                        resizeMode={"stretch"}
                        source={require("./myHeader.jpg")} 
                        style={styles.headerImg}
                        > 
                    </Image>                    
                    <View style={styles.content}>
                        
                        
                    </View>
                    <View style={styles.footer}>

                    </View>
                </Animated.ScrollView>
            </View>
            
            </View>
        )
    }
}

const styles = StyleSheet.create({
    fill:{
        flex: 1,
        position:"relative",
        backgroundColor:"#f5f5f5"
    },
    fullScreen:{
        position: 'absolute',
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
        flex:1
        
    },
    bluebackground:{
        height:600,
        backgroundColor:"#25DAF4"
    
    },
    stickyHeader:{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 2,
        borderWidth:0
    },
    stickyHeaderInner:{
        height:  Platform.OS === "iOS" ? (isIphoneX ? 88 : 64) :56,
        backgroundColor: '#00DAF6'
    },
    container: {
      flex: 1
    },
    
    headerImg:{
        height:132,
        width:deviceWidth,
        zIndex:4
    },
    content:{
        flex: 1,
        backgroundColor:"#fff",
        paddingTop:20,
        height:1000
    },
    footer:{
        height:50,
        backgroundColor:"#f5f5f5"
    }
  });
