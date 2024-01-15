import { ScrollView, StyleSheet, Text, View, Image, TouchableOpacity, ActivityIndicator } from 'react-native'
import React, { useEffect, useState } from 'react'
import normalize from 'react-native-normalize'
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../store/store';
import { useNavigation } from '@react-navigation/native';
import { getPromotionDetail } from '../store/actions/promotionsDetail';
import Back from '../icons/Back.svg'
import { DOMParser } from 'xmldom'
import he from 'he';

const PromoDetail = ({ route }: { route: any }) => {
    const { id } = route.params;
    const [remainingDays, setRemainingDays] = useState(0);
    const { promotion, loadingPromotionDetail } = useSelector((state: RootState) => state.promotionDetailReducer)
    const navigation = useNavigation();
    const dispatch = useDispatch();
    useEffect(() => {
        navigation.addListener('focus', payload => { dispatch(getPromotionDetail(id)) });
    }, [promotion])


    useEffect(() => {
        console.log(loadingPromotionDetail, "loadingPromotionDetailloadingPromotionDetail")
        const daysLeft = calculateRemainingDays(promotion?.RemainingText);
        setRemainingDays(daysLeft);
    }, [promotion]);
    const extractTextFromHtml = (htmlString: any) => {

        if (htmlString != undefined) {
            const decodedHtml = he.decode(htmlString);
            const parser = new DOMParser();
            const xmlDoc = parser.parseFromString(decodedHtml, 'text/xml');
            if (xmlDoc != undefined) {
                const titleElement = xmlDoc.getElementsByTagName('p')[0];
                if (titleElement != undefined) {
                    const titleContent = titleElement.textContent;
                    return titleContent;
                }
                else {
                    return htmlString;
                }

            }
        } else
            return "";

    };
    const calculateRemainingDays = (remainingText: any) => {
        // RemainingText formatından tarih çıkartma
        const remainingDate = new Date(remainingText);

        // Bugünün tarihini alma
        const today = new Date();

        // Kalan günleri hesaplama
        const timeDifference = remainingDate.getTime() - today.getTime();
        const daysLeft = Math.ceil(timeDifference / (1000 * 60 * 60 * 24));

        return daysLeft >= 0 ? daysLeft : 0;
    };
    return (
        <View style={{ width: "100%", height: "100%", backgroundColor: "white" }} >
            {loadingPromotionDetail && <ActivityIndicator style={{ justifyContent: "center", alignItems: "center", width: "100%", height: "100%" }} size="large" color="black"></ActivityIndicator>}
            <View style={{ width: "100%", height: "50%" }}>
                <Image
                    style={{
                        width: "100%",
                        height: "100%",
                        borderBottomLeftRadius: normalize(100),
                        borderBottomRightRadius: normalize(16),
                    }}
                    source={{ uri: promotion.ImageUrl }} >
                </Image>
                <Image
                    style={{
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
                    }}
                    source={{ uri: promotion.BrandIconUrl }} >
                </Image>
                <View style={styles.remaningDayView} >
                    <Text style={styles.remaningText} >{"Son "}</Text>
                    <Text style={styles.remaningDayText} >{remainingDays}</Text>
                    <Text style={styles.remaningText} >{" Gün"}</Text>
                </View>
                <TouchableOpacity
                    onPress={() => { navigation.goBack(); }}
                    style={styles.backComponent} >
                    <Back ></Back>
                </TouchableOpacity>

            </View>
            <Text style={styles.TitleStyle}>{extractTextFromHtml(promotion.Title)}</Text>
            <ScrollView style={{ marginHorizontal: normalize(15), marginBottom: normalize(80) }} >
                <Text style={styles.descriptionStyle}>{extractTextFromHtml(promotion.Description)} </Text>
                <Text style={{ ...styles.descriptionStyle, marginTop: normalize(15) }}>
                    {extractTextFromHtml(promotion?.PromotionDetailItemAreas?.[0]?.Description)}
                </Text>
            </ScrollView>
            <View style={{ marginHorizontal: normalize(15) }}>
                <TouchableOpacity style={styles.HemenKatilButton} >
                    <Text style={{ color: "#FFF", fontSize: normalize(14), fontWeight: "700" }}>Hemen Katıl</Text>
                </TouchableOpacity>
            </View>
        </View>
    )

}
const styles = StyleSheet.create({
    container: {
        width: "100%",
        height: "100%",
        display: "flex",

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
    backComponent: {
        width: normalize(40),
        height: normalize(40),
        position: "absolute",
        top: 55,
        left: 15,
        backgroundColor: "#1D1E1C",
        borderRadius: normalize(20),
        justifyContent: "center",
        alignItems: "center",
    },
    TitleStyle: {
        fontSize: normalize(26),
        color: "#1D1E1C",
        fontWeight: "700",
        margin: normalize(15)
    },
    descriptionStyle: {
        fontSize: normalize(14),
        color: "#1D1E1C",
        fontWeight: "400",
    },
    HemenKatilButton: {
        width: "100%",
        height: normalize(56),
        backgroundColor: "#F40000",
        borderRadius: normalize(28),
        justifyContent: "center",
        alignItems: "center",
        position: "absolute",
        bottom: normalize(20),

    }
})


export default PromoDetail