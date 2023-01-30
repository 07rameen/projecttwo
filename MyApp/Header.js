import React from "react";
import {
    View,
    Text,
    StyleSheet,
}from 'react-native';
const Header=(props)=>
{
    return(
        <View style={styles.view}>
            <Text style={styles.text}>
                We are in Header.js
            </Text>
        </View>
       
        
    )
}

const styles = StyleSheet.create({
    view:
    {
        height:50,
        backgroundColor:'#00f',
        justifyContent:'center',
        alignItems:'center'
    },
    text:
    {
        fontSize:25,
        fontWeight:'bold',
        color:'#ffff'
    }
    
})
export default Header;
