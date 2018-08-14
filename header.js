import React, { Component } from "react";
import { View,Text,StyleSheet,Platform,TouchableOpacity } from "react-native";

class HomeHeader extends Component {
   
    
    
    componentDidMount(){
    }
    render() {
        const {style}=this.props;
        const height =Platform.OS === "iOS" ? (isIphoneX ? 88 : 64) : 56;

        return (
            <View  style={[styles.header,{height: height},style]}>
                <View style={styles.flex}>
                </View>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    header:{
        alignItems:"flex-end",
        justifyContent: "space-between",
        flexDirection:"row",
        borderBottomWidth: 0,
        backgroundColor:"transparent",
        top:0,
        zIndex:3
    },
    flex:{
        justifyContent: "space-between",
        flexDirection:"row"
    },
    icon:{
        color:"#fff",
        top:0
    },
    badge:{
        top:10,
        right:10
    }
    
})

export default  HomeHeader;
