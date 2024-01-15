import { Image, ImageBackground, StyleSheet, Text, TouchableOpacity, View,Dimensions } from 'react-native'
import React, { useEffect, useState } from 'react'
import normalize from 'react-native-normalize'
import { DOMParser } from 'xmldom'
import RectangleRed from '../icons/RectangleRed.svg';
import RectangleRedPng from '../icons/RectangleCopyPng.png';
import he from 'he';
import { useNavigation } from '@react-navigation/native';
import SVGBackground from './SVGBackground';

interface PromotionCardProps {
    item: any
}
const PromotionCard = ({ item }: PromotionCardProps) => {
    const navigation = useNavigation();
    const [remainingDays, setRemainingDays] = useState(0);

    const extractTextFromHtml = (htmlString: any) => {//Html ayıklama 
        const decodedHtml = he.decode(htmlString);
        const parser = new DOMParser();
        const xmlDoc = parser.parseFromString(decodedHtml, 'text/xml');
        if (xmlDoc != undefined) {
            const titleElement = xmlDoc.getElementsByTagName('p')[0];
            const titleContent = titleElement.textContent;
            return titleContent;
        }
        return null;
    };
    useEffect(() => {
        const daysLeft = calculateRemainingDays(item?.RemainingText);//gün hesabı
        setRemainingDays(daysLeft);
    }, [item]);


    const calculateRemainingDays = (remainingText: any) => {
        const remainingDate = new Date(remainingText);
        // Bugünün tarihini alma
        const today = new Date();
        // Kalan günleri hesaplama
        const timeDifference = remainingDate.getTime() - today.getTime();
        const daysLeft = Math.ceil(timeDifference / (1000 * 60 * 60 * 24));
        return daysLeft >= 0 ? daysLeft : 0;
    };

    return (
        <>
        <SVGBackground />
        <TouchableOpacity 
        activeOpacity={1}
        onPress={() => { navigation.navigate("PromoDetail", { id: item.Id });console.log(item.Id,"item.Iditem.Id") }}
         style={styles.container}>
       
             <View style={{  flex:1,}}>
                <Image
                    style={styles.BigImageStyle}
                    source={{ uri: item.ImageUrl }} >
                </Image>
                <Image
                    style={styles.dahaDagaImage}
                    source={{ uri: item.BrandIconUrl }} >
                </Image>
                <View style={styles.remaningDayView} >
                    <Text style={styles.remaningText} >{"Son "}</Text>
                    <Text style={styles.remaningDayText} >{remainingDays}</Text>
                    <Text style={styles.remaningText} >{" Gün"}</Text>
                </View>
            </View>
            <Text style={styles.TitleText} >{extractTextFromHtml(item?.Title)}</Text>
            <TouchableOpacity style={{ width: normalize(98), marginTop: normalize(5) }}>
                <Text style={styles.DahaText} >{"Daha Daha"}</Text>
            </TouchableOpacity>
        </TouchableOpacity>
        </>
    )

}
const styles = StyleSheet.create({
    container: {
        display: "flex",
        height:"95%",
        width:Dimensions.get('window').width ,
        alignItems: "center",
        marginBottom: normalize(180),
        borderColor: "#F4F6F5",
        borderWidth: 2,
        borderRadius: 16,
        backgroundColor:"white",
        justifyContent:"center",
     
       
    },
    remaningDayView: {
        height: normalize(32),
        width: normalize(97),
        position: "absolute",
        backgroundColor: "#1D1E1C",
        borderRadius: 26.818,
        right: 5,
        bottom: 5,
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "row"

    },
    remaningText: {
        color: "#FFF",
        fontSize: normalize(13),
        fontWeight: "400"
    },
    remaningDayText: {
        color: "#FFF",
        fontSize: normalize(15),
        fontWeight: "400"
    },
    TitleText: {
        marginHorizontal: normalize(30),
        marginTop: normalize(20),
        textAlign: 'center',
        color: "#1D1E1C",
        fontSize: normalize(14),
        fontWeight: "700",
        lineHeight: normalize(20),
        letterSpacing: -0.215
    },
    DahaText: {
        color: "#F40000",
        fontSize: normalize(14),
        textAlign: "center",
        fontWeight: "700",

    },
    BigImageStyle:{
        width: Dimensions.get('window').width ,
        height: normalize(247),
        flex: 1,
        borderTopLeftRadius: normalize(16),
        borderTopRightRadius: normalize(16),
        borderBottomLeftRadius: normalize(100),
        borderBottomRightRadius: normalize(16),
    },
    dahaDagaImage:{
        width: normalize(55),
        height: normalize(55),
        position: "absolute",
        left: 0,
        bottom: 0,
        zIndex: 2,
        borderColor: "white",
        borderWidth: 5,
        backgroundColor: "white",
        borderRadius: normalize(80)
    }
})


export default PromotionCard