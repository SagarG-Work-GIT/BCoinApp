import { Dimensions, PixelRatio, Platform } from "react-native";

export const {
    width: SCREEN_WIDTH,
    height: SCREEN_HEIGHT,
} = Dimensions.get('window');


const scale = SCREEN_WIDTH / 320;

export function normalize(size) {
    const newSize = size * scale
    if (Platform.OS === 'ios') {
        return Math.round(PixelRatio.roundToNearestPixel(newSize))
    } else {
        return Math.round(PixelRatio.roundToNearestPixel(newSize)) - 2
    }
}


export const images = {
    bitcoin_bg: require("../assets/images/bitcoin_bg.png"),
    coin: require("../assets/images/coin.png")
}

export const icons = {
    icon: require("../assets/icons/icon.png"),
    logout:require("../assets/icons/logout.png"),
    star:require("../assets/icons/star.png"),
}