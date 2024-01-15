import { StyleSheet, Text, View,TouchableOpacity } from 'react-native'
import React, { Component } from 'react'
import DAHADAHA from '../icons/Daha_Daha.svg';
import Profile from '../icons/Profile.svg'
import normalize from 'react-native-normalize';
const HomePageHeader = () => {

    return (
        <View style={styles.containter}>
           <DAHADAHA width={normalize(81)} height={normalize(40)} ></DAHADAHA>
           <View style={{gap:normalize(10),display:"flex",flexDirection:"row"}}>
            <TouchableOpacity style={styles.logInButton} >
                <Text style={styles.logInText}>Giriş Yap</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.profileIcon} >
           <Profile width={normalize(16)} height={normalize(17)} color={"#FFF"} ></Profile>
            </TouchableOpacity>
           </View>
        </View>
    )

}
const styles = StyleSheet.create({
    containter:{
        width:"100%",
        paddingHorizontal:normalize(15),
        marginTop:normalize(40),
        justifyContent:"space-between",
        alignItems:"center",
        display:"flex",
        flexDirection:"row",
        height:normalize(40)
    },
    logInButton:{
        height:normalize(40),
        justifyContent:"center",
        alignItems:"center",
        backgroundColor:"#F40000",
        borderRadius:normalize(20),
        paddingHorizontal:normalize(15)
    },
    logInText:{
        fontSize:normalize(12),
        color:"#FFF",
        fontWeight:"700",
        letterSpacing:-0.171,
    },
    profileIcon:{
        display:"flex",
        justifyContent:"center",
        alignItems:"center",
        width:normalize(40),
        height:normalize(40),
        flexShrink:0,
        backgroundColor:"#1D1E1C",
        borderRadius:normalize(20)
    }
})


export default HomePageHeader;