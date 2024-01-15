import React, { useEffect, useRef, useState } from 'react'
import { Image, Dimensions, StyleSheet, Text, View, FlatList, ActivityIndicator, ScrollView, Animated } from 'react-native'
import HomePageHeader from '../components/HomePageHeader'
import BottomNavBar from '../components/BottomNavBar'
import SearchIcon from '../icons/Small_Brand_Logo_1.png';
import FilterCard from '../components/FilterCard'
import normalize from 'react-native-normalize';
import { useDispatch, useSelector } from 'react-redux';
import { getAllTags } from '../store/actions/tagListActions';
import { getAllPromotions } from '../store/actions/promotionsList';
import { RootState } from "../store/store";
import PromotionCard from '../components/PromotionCard';

const Home = () => {
    const searchIcon = Image.resolveAssetSource(SearchIcon).uri
    const dispatch = useDispatch();
    const { loading, error, tags } = useSelector((state: RootState) => state.taglistReducer)
    const { loadingPromotion, errorPromotion, promotions } = useSelector((state: RootState) => state.promotionlistReducer)
    const [currentIndex, setCurrentIndex] = useState(0);

    const [data, setData] = useState();
    const [promotionsData, setPromotionList] = useState([]);

    const scroolX = useRef(new Animated.Value(0)).current
   const screenWidtha = Dimensions.get('window').width;
    useEffect(()=>{
        console.log(screenWidtha)
    },[])

    // const scroolX = useRef(new Animated.Value(0)).current;
   // const screenWidth = normalize(260); // Adjust this based on your card width
    const onScroll = (event: any) => {
        const offsetX = event.nativeEvent.contentOffset.x;
       
        const index = Math.floor(offsetX / (screenWidtha/1.2));
  

        setCurrentIndex(index);
    };
    const handleScroll = Animated.event(
        [{ nativeEvent: { contentOffset: { x: scroolX } } }],
        { useNativeDriver: false, listener: onScroll },
    );

    useEffect(() => {
        dispatch(getAllTags());
        dispatch(getAllPromotions());
        console.log(promotionsData.length)

    }, [])
    useEffect(() => {
        setData(tags);
        setPromotionList(promotions)
    }, [tags, promotions]);
    return (
        <View style={styles.container}>
            <HomePageHeader></HomePageHeader>
            {loading == true && <ActivityIndicator></ActivityIndicator>}
            <View style={{ marginBottom: normalize(15) }}>
                <FlatList
                    style={styles.filterCard}
                    data={data}
                    renderItem={({ item }) => (
                        <FilterCard IconUrl={item.IconUrl} Name={item.Name}></FilterCard>
                    )}
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                    keyExtractor={(item: any) => `${item.Id}`}
                >
                </FlatList>
            </View>
            <View style={{ height: "55%",  }}>
                <Animated.FlatList
                    data={promotionsData}
                    onScroll={handleScroll}
                    renderItem={({ item }) => (
                        <PromotionCard item={item}  ></PromotionCard>
                    )}
                    pagingEnabled
                    showsHorizontalScrollIndicator={false}
                    horizontal={true}
                    bounces={false}
                    keyExtractor={(item: any) => `${item.Id}`}
                >
                </Animated.FlatList>
            </View>
            <View style={{ width: "100%", justifyContent: "center", alignItems: "center", marginTop: normalize(15), flexDirection: "row", gap: normalize(5) }} >
                {promotionsData.map((_, index) => (
                    <View
                        key={index}
                        style={{
                            width:index === currentIndex ?  normalize(16): normalize(8),
                            height: normalize(8),
                            borderRadius: normalize(8),
                            backgroundColor: index === currentIndex ? '#F40000' : '#D8D8D8',
                            justifyContent: 'center',
                            alignItems: 'center',
                            marginRight: normalize(5),
                        }}
                    >
                    </View>))}
            </View>
            <BottomNavBar></BottomNavBar>
        </View>
    )

}
const styles = StyleSheet.create({
    container: {
        width: "100%",
        height: "100%",
        backgroundColor: "#FFF",
        display: "flex",
        flex: 1
    },
    filterCard: {
        display: "flex",
        marginTop: normalize(20),
        flexDirection: "row",
        overflow: "hidden",
        height: normalize(36),
        marginHorizontal:normalize(15),

    }
})

export default Home;