import { Image, ImageBackground, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React, { useState } from 'react';
import normalize from 'react-native-normalize';

interface FilterCardProps {
    IconUrl: any;
    Name: string
}

const FilterCard = ({ IconUrl, Name }: FilterCardProps) => {
    const [isSelected, setIsSelected] = useState(false);
    const handlePress = () => {
        setIsSelected(!isSelected);
    };
    return (

        <TouchableOpacity onPress={handlePress} style={[styles.container, isSelected ? styles.selectedContainer : null]}      >
            {IconUrl != null &&
                <Image
                    style={styles.imageContainer}
                    source={{ uri: IconUrl }}
                >
                </Image>
            }
            <Text style={styles.textStyles}>
                {Name}
            </Text>
        </TouchableOpacity>

    );
};

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        height: normalize(36),
        gap: normalize(6),
        borderColor: '#ECEEEF',
        borderWidth: 1.5,
        borderRadius: normalize(8),
        alignItems: "center",
        padding: normalize(6),
        marginRight: normalize(5),
        width: normalize(105),
        flexDirection: "row",

    },
    selectedContainer: {
        borderColor: '#F40000', // Red border color when selected
    },
    imageContainer: {
        width: normalize(24),
        height: normalize(24),
        borderRadius: normalize(7)
    },
    textStyles: {
        color: '#1D1E1C',
        fontSize: normalize(12),
        fontWeight: '400'
    }
});

export default FilterCard;
