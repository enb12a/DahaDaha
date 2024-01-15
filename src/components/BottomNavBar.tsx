import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { Component } from 'react'
import normalize from 'react-native-normalize'
import Portal from '../icons/PORTAL.svg'
import Kesfet from '../icons/Kesfet.svg'
import DahaCuzdan from '../icons/DahaCuzdan.svg'



const bottomNavBar = () => {
    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.BarKesfetIconContainerStyles}>
                <Kesfet width={normalize(26)} height={normalize(26)}></Kesfet>
                <Text style={styles.KesfetText}>KEŞFET</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.portalStyle}>
                <Portal width={normalize(69)} height={normalize(71)} ></Portal>
            </TouchableOpacity>
            <TouchableOpacity style={styles.BarDahaCuzdanIconContainerStyles}>
                <DahaCuzdan width={normalize(26)} height={normalize(26)}></DahaCuzdan>
                <Text style={styles.DahaCuzdanText}>DAHA CÜZDAN</Text>
            </TouchableOpacity>

        </View>
    )

}
const styles = StyleSheet.create({
    container: {
        width: "100%",
        height:normalize(68),
        display: "flex",
        flexDirection: "row",
        justifyContent: 'space-evenly',
        alignItems: "center",
        position: 'absolute',
        bottom: 0,
        borderColor: "#ECEEEF",
        borderWidth: 1.5,
        borderTopLeftRadius: normalize(20),
        borderTopRightRadius: normalize(20),
        shadowColor: "#000",
        shadowOffset: {
            height: 4,
            width: 0
        },
        shadowOpacity: 0.50,
        shadowRadius: 4.65,
        elevation: 1
    },
    BarKesfetIconContainerStyles: {
        width: normalize(110),
        display: "flex",
        gap: normalize(3),
        justifyContent: "center",
        alignItems: "center",

    },
    BarDahaCuzdanIconContainerStyles: {
        width: normalize(110),
        display: "flex",
        gap: normalize(3),
        justifyContent: "center",
        alignItems: "center",

    },

    KesfetText: {
        color: "#1D1E1C",
        textAlign: "center",
        fontSize: normalize(10),
        fontWeight: "700",
        letterSpacing: 0.5
    },
    DahaCuzdanText: {
        color: "#1D1E1C",
        textAlign: "center",
        fontSize: normalize(10),
        fontWeight: "700",
        letterSpacing: 0.5
    },
    portalStyle:{
        bottom: normalize(12), shadowColor: "#000",
        shadowOffset: {
            height: 4,
            width: 0
        },
        shadowOpacity: 0.50,
        shadowRadius: 4.65,
        elevation: 1
    }
})

export default bottomNavBar