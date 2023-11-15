import React, { useEffect, useRef, useState } from "react";
import { FlatList, StyleSheet, View, Text, Animated, } from "react-native";
import { styles } from "./style";
import { commonStyle } from "../../helper/commonStyle";

const WheelPicker = ({ items, itemHeight, selectedIndex }) => {

    const ref = useRef();

    const [changedIndex, setChangedIndex] = useState('')

    const modifiedItems = ["", "", '', ...items, '', "", ""];
    const scrollY = useRef(new Animated.Value(0)).current;

    const renderItem = ({ item, index }) => {
        const inputRange = [
            (index - 4) * itemHeight,
            (index - 4) * itemHeight,
            index * itemHeight,
        ];

        const scale = scrollY.interpolate({
            inputRange,
            outputRange: [0.5, 1, 0.5],
        });
      
        return (
            <Animated.View style={{ height: itemHeight, transform: [{ scale }], opacity: ((changedIndex+3) === index) ? 1 : 0.8  }}>
                <Text style={[commonStyle.text24, commonStyle.textAlignCenter, commonStyle.textSecondary,  ((changedIndex+3) === index) && {...commonStyle.fontBold, ... commonStyle.textPrimary} ]}>{item}</Text>
            </Animated.View>
        );
    };

    const momentumScrollEnd = (event) => {
        const y = event.nativeEvent.contentOffset.y;
        const index = Math.round(y / itemHeight);
        setChangedIndex(index)
        // props.onIndexChange(index);
    };

    const scrollToIndex = index => {
        ref?.current?.scrollToIndex({
            animated: true,
            index: index,
        });
        setChangedIndex(selectedIndex)
    }

    useEffect(() => {
        if (selectedIndex >= 0) {
            scrollToIndex(selectedIndex )            
        }
    }, [])

    return (
        <View style={[{ height: itemHeight * 7 }]}>
            <Animated.FlatList
                ref={ref}
                scrollEnabled
                data={modifiedItems}
                renderItem={renderItem}
                keyExtractor={(item, index) => index}
                showsVerticalScrollIndicator={false}
                snapToInterval={itemHeight}
                onMomentumScrollEnd={momentumScrollEnd}
                scrollEventThrottle={16}
                scrolltoin
                getItemLayout={(_, index) => ({
                    length: itemHeight,
                    offset: itemHeight * index,
                    index,
                })}
                onScroll={Animated.event(
                    [{ nativeEvent: { contentOffset: { y: scrollY } } }],
                    { useNativeDriver: true },
                )}
            />
            <View style={[styles.indicatorHolder, { top: itemHeight * 3 }]}>
                <View style={[styles.indicator]} />
                <View style={[styles.indicator, { marginTop: itemHeight }]} />
            </View>
        </View>
    );
};


export default WheelPicker;